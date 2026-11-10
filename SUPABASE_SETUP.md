# Gestor Financeiro — instalação com Supabase + GitHub Pages

Versão independente do Claude: login com e-mail e senha, banco de dados próprio no Supabase (gratuito) e acesso pelo navegador no PC e no celular através do GitHub Pages.

```
docs/                 ← o site (é isso que o GitHub Pages publica)
  index.html, core.js, views.js, supa.js
  config.js           ← você cola aqui a URL e a chave do Supabase
supabase/schema.sql   ← cria as tabelas e as regras de segurança
```

---

## 1. Criar o banco no Supabase (5 min)

1. Acesse **https://supabase.com** → *Start your project* → entre com sua conta do GitHub.
2. **New project**
   - *Name*: `gestor-financeiro`
   - *Database password*: gere uma senha forte e guarde (não vai no app).
   - *Region*: **South America (São Paulo)**.
3. Aguarde o projeto ficar pronto (~2 min).
4. Menu lateral **SQL Editor** → **New query** → cole todo o conteúdo de `supabase/schema.sql` → **Run**.
   Deve aparecer *Success. No rows returned*.

## 2. Configurar o login (3 min)

Menu **Authentication**:

1. **Sign In / Providers → Email**: deixe *Enable Email provider* ligado.
   - **Confirm email**:
     - *Ligado* (recomendado): cada pessoa confirma o e-mail antes de entrar.
     - O servidor de e-mail gratuito do Supabase envia **poucos e-mails por hora**. Se vários amigos se cadastrarem ao mesmo tempo, alguns e-mails de confirmação podem atrasar. Para um grupo pequeno funciona bem; para muitos usuários, configure um SMTP próprio em *Authentication → Emails → SMTP Settings* (ex.: Brevo ou Resend, ambos têm plano gratuito).
2. **URL Configuration** (preencha depois do passo 4, quando tiver o endereço do site):
   - *Site URL*: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`
   - *Redirect URLs*: adicione o mesmo endereço.
   Isso faz os links de confirmação e de "esqueci a senha" voltarem para o app.

## 3. Ligar o app ao seu banco (1 min)

1. No Supabase: **Project Settings → API Keys** (ou botão **Connect**).
2. Copie:
   - **Project URL** — ex.: `https://abcdefghijk.supabase.co`
   - **Publishable key** (`sb_publishable_...`) — ou, em projetos antigos, a **anon public key**.
3. Edite `docs/config.js` e substitua os dois valores.

> Essas duas informações são públicas por natureza: qualquer app web do Supabase as expõe no navegador. Quem protege os dados é o **login + as regras de segurança (RLS)** do `schema.sql`: cada usuário só enxerga os espaços dos quais é membro. **Nunca** coloque a *secret key* / *service_role* no app.

## 4. Publicar no GitHub Pages (2 min)

1. No repositório: **Settings → Pages**.
2. *Source*: **Deploy from a branch** → escolha a branch e a pasta **/docs** → **Save**.
3. Em 1–2 minutos o endereço aparece no topo da página (ex.: `https://lsimoes2021gm.github.io/gestor-financeiro/`).
4. Volte ao passo 2.2 e cole esse endereço no Supabase.

> O GitHub Pages gratuito exige **repositório público**. O código pode ficar público sem problema — os dados ficam no Supabase, protegidos por login. Repositório privado com Pages só nos planos pagos do GitHub.

## 5. Primeiro acesso e migração dos dados

1. Abra o endereço do site → **Criar conta** → confirme o e-mail → **Entrar**.
2. Cada pessoa que se cadastra ganha um **espaço de finanças privado**.
3. Para trazer seus dados da versão do Claude:
   - Na versão do Claude: *Configurações → Dados e backup → Baixar backup (JSON)*.
   - Na versão nova: *Configurações → Dados e backup → Restaurar backup* → escolha o arquivo.

## 6. Compartilhar com família e amigos

- **Cada amigo usa as próprias finanças**: basta mandar o link do site. Ele cria a conta e tem um espaço só dele — ninguém vê os dados de ninguém.
- **Finanças em conjunto** (casal, família): em *Configurações → Usuários → Convidar pessoa*, informe o e-mail e a permissão:
  - **Editor** — lança e edita;
  - **Leitor** — só visualiza.
  A pessoa cria a conta (ou entra) com **esse mesmo e-mail** e o espaço compartilhado aparece automaticamente no seletor do menu lateral.
- Você pode criar vários espaços (ex.: "Pessoal", "Família", "Empresa") em *Configurações → Usuários → + Novo espaço*.

## 7. No celular

Abra o link no navegador e use **Adicionar à tela inicial** (Chrome: menu ⋮; Safari: botão Compartilhar). O app abre como um aplicativo, e o login fica salvo.

---

### Limites do plano gratuito do Supabase
- 500 MB de banco (dezenas de milhares de lançamentos — sobra muito).
- 50.000 usuários ativos/mês.
- **Projetos sem nenhum acesso por 7 dias são pausados**; basta entrar no painel do Supabase e clicar em *Restore*. Com uso semanal isso não acontece.

### O que muda em relação à versão do Claude
| Recurso | Claude | GitHub + Supabase |
|---|---|---|
| Login | conta Claude | e-mail e senha próprios |
| Usuários | convidados no Claude | qualquer pessoa com o link |
| Sincronização PC/celular | ✓ | ✓ (tempo real) |
| Analista com IA | ✓ | — (sugestão de categoria pelo histórico continua) |
| Backup no Google Drive | ✓ | baixar arquivo JSON |
| Download de CSV / .ics | ✓ | ✓ |
