-- =====================================================================
-- Gestor Financeiro & Patrimonial — esquema do banco (Supabase)
-- Rode este arquivo inteiro em: Supabase → SQL Editor → New query → Run
-- Pode ser executado mais de uma vez sem erro.
-- =====================================================================

-- ---------- Tabelas ----------
-- Espaço de finanças (cada usuário ganha um ao se cadastrar; pode ser compartilhado com a família)
create table if not exists public.workspaces (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  owner      uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- Quem tem acesso a cada espaço e com qual papel
create table if not exists public.members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id      uuid not null references auth.users(id) on delete cascade,
  email        text,
  role         text not null default 'editor' check (role in ('owner', 'editor', 'viewer')),
  created_at   timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

-- Convites pendentes (por e-mail); aceitos automaticamente no próximo login da pessoa
create table if not exists public.invites (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  email        text not null,
  role         text not null default 'editor' check (role in ('editor', 'viewer')),
  invited_by   uuid references auth.users(id) on delete set null,
  created_at   timestamptz not null default now(),
  primary key (workspace_id, email)
);

-- Todos os dados do app (contas, cartões, lançamentos, metas…) em formato de documento
create table if not exists public.records (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  col          text not null,
  id           text not null,
  data         jsonb not null,
  updated_at   timestamptz not null default now(),
  updated_by   uuid default auth.uid(),
  primary key (workspace_id, col, id)
);
create index if not exists records_ws_idx on public.records (workspace_id);
create index if not exists members_user_idx on public.members (user_id);

-- ---------- Funções auxiliares (evitam recursão nas regras de acesso) ----------
create or replace function public.is_member(ws uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from members where workspace_id = ws and user_id = auth.uid());
$$;

create or replace function public.can_write(ws uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from members where workspace_id = ws and user_id = auth.uid() and role in ('owner', 'editor'));
$$;

create or replace function public.is_owner(ws uuid) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from members where workspace_id = ws and user_id = auth.uid() and role = 'owner');
$$;

-- Cria um espaço e coloca quem chamou como proprietário
create or replace function public.create_workspace(ws_name text) returns uuid
language plpgsql security definer set search_path = public as $$
declare wid uuid; em text;
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  select email into em from auth.users where id = auth.uid();
  insert into workspaces (name, owner) values (coalesce(nullif(trim(ws_name), ''), 'Minhas finanças'), auth.uid()) returning id into wid;
  insert into members (workspace_id, user_id, email, role) values (wid, auth.uid(), em, 'owner');
  return wid;
end $$;

-- Aceita os convites enviados para o e-mail de quem está logado
create or replace function public.accept_invites() returns integer
language plpgsql security definer set search_path = public as $$
declare n integer; em text;
begin
  if auth.uid() is null then return 0; end if;
  select email into em from auth.users where id = auth.uid();
  insert into members (workspace_id, user_id, email, role)
    select workspace_id, auth.uid(), em, role from invites where lower(email) = lower(em)
    on conflict (workspace_id, user_id) do nothing;
  get diagnostics n = row_count;
  delete from invites where lower(email) = lower(em);
  return n;
end $$;

revoke all on function public.create_workspace(text) from public, anon;
revoke all on function public.accept_invites() from public, anon;
grant execute on function public.create_workspace(text) to authenticated;
grant execute on function public.accept_invites() to authenticated;
grant execute on function public.is_member(uuid), public.can_write(uuid), public.is_owner(uuid) to authenticated;

-- ---------- Segurança em nível de linha (cada um só vê o que é seu) ----------
alter table public.workspaces enable row level security;
alter table public.members    enable row level security;
alter table public.invites    enable row level security;
alter table public.records    enable row level security;

drop policy if exists ws_select on public.workspaces;
drop policy if exists ws_update on public.workspaces;
drop policy if exists ws_delete on public.workspaces;
create policy ws_select on public.workspaces for select to authenticated using (public.is_member(id));
create policy ws_update on public.workspaces for update to authenticated using (public.is_owner(id)) with check (public.is_owner(id));
create policy ws_delete on public.workspaces for delete to authenticated using (public.is_owner(id));

drop policy if exists m_select on public.members;
drop policy if exists m_update on public.members;
drop policy if exists m_delete on public.members;
create policy m_select on public.members for select to authenticated using (public.is_member(workspace_id));
create policy m_update on public.members for update to authenticated using (public.is_owner(workspace_id) and role <> 'owner') with check (public.is_owner(workspace_id) and role in ('editor', 'viewer'));
create policy m_delete on public.members for delete to authenticated using ((public.is_owner(workspace_id) and role <> 'owner') or (user_id = auth.uid() and role <> 'owner'));

drop policy if exists i_select on public.invites;
drop policy if exists i_insert on public.invites;
drop policy if exists i_delete on public.invites;
create policy i_select on public.invites for select to authenticated using (public.is_member(workspace_id));
create policy i_insert on public.invites for insert to authenticated with check (public.is_owner(workspace_id) and invited_by = auth.uid());
create policy i_delete on public.invites for delete to authenticated using (public.is_owner(workspace_id));

drop policy if exists r_select on public.records;
drop policy if exists r_insert on public.records;
drop policy if exists r_update on public.records;
drop policy if exists r_delete on public.records;
create policy r_select on public.records for select to authenticated using (public.is_member(workspace_id));
create policy r_insert on public.records for insert to authenticated with check (public.can_write(workspace_id));
create policy r_update on public.records for update to authenticated using (public.can_write(workspace_id)) with check (public.can_write(workspace_id));
create policy r_delete on public.records for delete to authenticated using (public.can_write(workspace_id));

grant select, insert, update, delete on public.records to authenticated;
grant select, update, delete on public.workspaces to authenticated;
grant select, update, delete on public.members to authenticated;
grant select, insert, delete on public.invites to authenticated;

-- ---------- Tempo real (sincroniza PC e celular na hora) ----------
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
     and not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'records') then
    execute 'alter publication supabase_realtime add table public.records';
  end if;
end $$;
