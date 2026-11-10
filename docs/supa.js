'use strict';
/* =========================================================
   Gestor Financeiro — modo Supabase (login + banco próprio)
   Ativado quando config.js tem URL e chave do Supabase e o
   app não está rodando dentro do Claude.
   ========================================================= */
(function () {
  const C = window.GFP_CONFIG || {};
  const insideClaude = !!(window.claude && typeof window.claude.use === 'function');
  const configured = C.supabaseUrl && C.supabaseKey && !/SEU-PROJETO|COLE_AQUI/.test(C.supabaseUrl + C.supabaseKey);
  if (insideClaude || !configured) return;
  if (!window.supabase || !window.supabase.createClient) { console.error('Biblioteca do Supabase não carregou'); return; }

  const sb = window.supabase.createClient(C.supabaseUrl, C.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  window.SB = sb;
  const APP = C.appName || 'Gestor Financeiro';
  const appUrl = () => location.origin + location.pathname;
  const msgErr = e => {
    const m = (e && (e.message || e.error_description)) || String(e);
    const map = [[/Invalid login credentials/i, 'E-mail ou senha incorretos.'], [/Email not confirmed/i, 'Confirme seu e-mail pelo link que enviamos antes de entrar.'], [/User already registered/i, 'Este e-mail já tem cadastro. Use "Entrar" ou "Esqueci a senha".'], [/Password should be at least/i, 'A senha precisa ter pelo menos 6 caracteres.'], [/rate limit|too many/i, 'Muitas tentativas. Aguarde alguns minutos e tente de novo.'], [/Unable to validate email|invalid format/i, 'E-mail inválido.'], [/Failed to fetch|NetworkError/i, 'Sem conexão com o servidor. Verifique a internet.']];
    for (const [re, t] of map) if (re.test(m)) return t;
    return m;
  };

  // ---------- tela de login ----------
  function authScreen(mode = 'login', note = '') {
    return new Promise(resolve => {
      const L = document.getElementById('loading');
      const draw = (m, n = '') => {
        const T = { login: ['Entrar', 'Acesse suas finanças'], signup: ['Criar conta', 'Grátis e leva 1 minuto'], forgot: ['Recuperar senha', 'Enviaremos um link para o seu e-mail'], reset: ['Nova senha', 'Defina sua nova senha de acesso'] }[m];
        L.innerHTML = `<div class="card" style="width:min(400px,92vw);text-align:left"><div class="bd" style="padding:28px">
          <div style="display:flex;gap:10px;align-items:center;margin-bottom:18px"><div class="av" style="background:linear-gradient(135deg,#2f5bea,#0f9f6e);width:38px;height:38px;font-size:16px">G</div><div><b style="font-size:15px;color:var(--text)">${esc(APP)}</b><div class="hint">Finanças & Patrimônio</div></div></div>
          <h2 style="margin:0 0 2px;font-size:18px;color:var(--text)">${T[0]}</h2><div class="hint" style="margin-bottom:16px">${T[1]}</div>
          <form id="authF" style="display:flex;flex-direction:column;gap:10px">
            ${m === 'signup' ? '<input class="ctl" name="name" placeholder="Seu nome" autocomplete="name">' : ''}
            ${m !== 'reset' ? '<input class="ctl" name="email" type="email" placeholder="E-mail" autocomplete="email" required>' : ''}
            ${m !== 'forgot' ? `<input class="ctl" name="pass" type="password" placeholder="${m === 'login' ? 'Senha' : 'Senha (mín. 6 caracteres)'}" autocomplete="${m === 'login' ? 'current-password' : 'new-password'}" required minlength="6">` : ''}
            ${m === 'signup' || m === 'reset' ? '<input class="ctl" name="pass2" type="password" placeholder="Repita a senha" autocomplete="new-password" required>' : ''}
            <div id="authMsg" class="hint" style="min-height:16px;${n ? 'color:var(--pos)' : ''}">${esc(n)}</div>
            <button class="btn pri" style="justify-content:center;height:38px">${T[0]}</button>
          </form>
          <div style="display:flex;justify-content:space-between;margin-top:14px;font-size:12.5px">
            ${m === 'login' ? '<a href="javascript:void 0" data-m="signup">Criar conta</a><a href="javascript:void 0" data-m="forgot">Esqueci a senha</a>' : m !== 'reset' ? '<a href="javascript:void 0" data-m="login">← Voltar para o login</a>' : ''}
          </div></div></div>`;
        L.querySelectorAll('[data-m]').forEach(a => a.onclick = () => draw(a.dataset.m));
        const f = L.querySelector('#authF'); const msg = L.querySelector('#authMsg'); const btn = f.querySelector('button');
        setTimeout(() => { const i = f.querySelector('input'); i && i.focus(); }, 30);
        f.onsubmit = async e => {
          e.preventDefault(); const v = Object.fromEntries(new FormData(f)); msg.style.color = 'var(--neg)'; msg.textContent = '';
          if ((m === 'signup' || m === 'reset') && v.pass !== v.pass2) { msg.textContent = 'As senhas não conferem.'; return; }
          btn.disabled = true;
          try {
            if (m === 'login') { const { data, error } = await sb.auth.signInWithPassword({ email: v.email.trim(), password: v.pass }); if (error) throw error; resolve(data.session); return; }
            if (m === 'signup') {
              const { data, error } = await sb.auth.signUp({ email: v.email.trim(), password: v.pass, options: { emailRedirectTo: appUrl(), data: { name: (v.name || '').trim() } } });
              if (error) throw error;
              if (data.session) { resolve(data.session); return; }
              draw('login', 'Conta criada! Abra o e-mail de confirmação que enviamos e depois entre aqui.'); return;
            }
            if (m === 'forgot') { const { error } = await sb.auth.resetPasswordForEmail(v.email.trim(), { redirectTo: appUrl() }); if (error) throw error; draw('login', 'Se o e-mail estiver cadastrado, você receberá um link para criar uma nova senha.'); return; }
            if (m === 'reset') { const { data, error } = await sb.auth.updateUser({ password: v.pass }); if (error) throw error; const s = (await sb.auth.getSession()).data.session; toast('Senha alterada com sucesso'); resolve(s || data); return; }
          } catch (err) { msg.textContent = msgErr(err); }
          btn.disabled = false;
        };
      };
      draw(mode, note);
    });
  }

  // ---------- camada de dados ----------
  let recovering = false;
  sb.auth.onAuthStateChange(ev => {
    if (ev === 'PASSWORD_RECOVERY') recovering = true;
    if (ev === 'SIGNED_OUT' && Store.mode === 'supabase' && Store.session) location.reload();
  });

  Object.defineProperty(Store, 'wsInfo', { get() { return (this.workspaces || []).find(w => w.id === this.ws) || {}; }, configurable: true });
  Object.assign(Store, {
    async init() {
      this.mode = 'supabase';
      document.querySelector('#loading > div').innerHTML = '<div class="spin"></div>Carregando…';
      let session = (await sb.auth.getSession()).data.session;
      await new Promise(r => setTimeout(r, 0));
      if (/type=recovery/.test(location.hash) || recovering) { session = await authScreen('reset'); }
      if (!session) session = await authScreen('login');
      if (/access_token|type=/.test(location.hash)) history.replaceState(null, '', location.pathname + '#dashboard');
      document.getElementById('loading').innerHTML = '<div><div class="spin"></div>Carregando seus dados…</div>';
      this.session = session; this.uid = session.user.id; this.email = session.user.email;
      this.userName = (session.user.user_metadata && session.user.user_metadata.name) || this.email.split('@')[0];
      try { const { data } = await sb.rpc('accept_invites'); if (data > 0) setTimeout(() => toast(`Você recebeu acesso a ${data} espaço(s) compartilhado(s)`), 800); } catch (e) { }
      await this.loadWorkspaces();
      if (!this.workspaces.some(w => w.role === 'owner')) {
        const { error } = await sb.rpc('create_workspace', { ws_name: 'Finanças de ' + this.userName });
        if (error) { toast('Erro ao criar seu espaço: ' + msgErr(error)); }
        await this.loadWorkspaces();
      }
      let ws = null; try { ws = localStorage.getItem('gfp_ws_' + this.uid); } catch (e) { }
      await this.openWorkspace(this.workspaces.some(w => w.id === ws) ? ws : (this.workspaces[0] || {}).id);
    },
    async loadWorkspaces() {
      const { data, error } = await sb.from('members').select('role, workspaces(id,name,owner)').eq('user_id', this.uid);
      if (error) { toast('Erro: ' + msgErr(error)); this.workspaces = []; return; }
      this.workspaces = (data || []).filter(r => r.workspaces).map(r => ({ id: r.workspaces.id, name: r.workspaces.name, role: r.role })).sort((a, b) => (a.role === 'owner' ? 0 : 1) - (b.role === 'owner' ? 0 : 1) || a.name.localeCompare(b.name));
    },
    async openWorkspace(id) {
      if (!id) return;
      this.ws = id; try { localStorage.setItem('gfp_ws_' + this.uid, id); } catch (e) { }
      this.canWrite = this.wsInfo.role !== 'viewer';
      COLS.forEach(c => S[c] = new Map());
      let from = 0;
      while (true) {
        const { data, error } = await sb.from('records').select('col,id,data').eq('workspace_id', id).range(from, from + 999);
        if (error) { toast('Erro ao carregar: ' + msgErr(error)); break; }
        data.forEach(r => { if (S[r.col]) S[r.col].set(r.id, Object.assign({}, r.data, { id: r.id })); });
        if (data.length < 1000) break; from += 1000;
      }
      if (this.chan) sb.removeChannel(this.chan);
      const apply = row => { if (row && row.workspace_id === this.ws && S[row.col]) { S[row.col].set(row.id, Object.assign({}, row.data, { id: row.id })); this.emit(); } };
      this.chan = sb.channel('ws-' + id)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'records', filter: 'workspace_id=eq.' + id }, p => apply(p.new))
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'records', filter: 'workspace_id=eq.' + id }, p => apply(p.new))
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'records' }, p => { const o = p.old || {}; if (o.workspace_id === this.ws && S[o.col] && S[o.col].delete(o.id)) this.emit(); })
        .subscribe();
      this.emit();
    },
    row(col, obj) { return { workspace_id: this.ws, col, id: obj.id, data: this.clean(obj), updated_at: new Date().toISOString() }; },
    handleErr(e) {
      const m = msgErr(e);
      if (/row-level security|permission denied|42501/i.test(m + (e && e.code))) { this.canWrite = false; toast('Você tem acesso somente leitura a este espaço.'); this.emit(); }
      else toast('Erro ao gravar: ' + m);
      throw e;
    },
    stamp(obj) {
      if (!obj.id) obj.id = uid();
      if (!obj.createdAt) { obj.createdAt = new Date().toISOString(); obj.createdBy = this.uid; }
      obj.updatedAt = new Date().toISOString(); obj.updatedBy = this.uid; return obj;
    },
    async put(col, obj) {
      this.stamp(obj); S[col].set(obj.id, obj); this.emit();
      const { error } = await sb.from('records').upsert(this.row(col, obj)); if (error) this.handleErr(error);
      return obj;
    },
    async putMany(col, arr) {
      arr.forEach(o => { this.stamp(o); S[col].set(o.id, o); }); this.emit();
      for (let i = 0; i < arr.length; i += 400) { const { error } = await sb.from('records').upsert(arr.slice(i, i + 400).map(o => this.row(col, o))); if (error) this.handleErr(error); }
    },
    async del(col, id) {
      S[col].delete(id); this.emit();
      const { error } = await sb.from('records').delete().eq('workspace_id', this.ws).eq('col', col).eq('id', id); if (error) this.handleErr(error);
    },
    async delMany(col, ids) {
      ids.forEach(id => S[col].delete(id)); this.emit();
      for (let i = 0; i < ids.length; i += 200) { const { error } = await sb.from('records').delete().eq('workspace_id', this.ws).eq('col', col).in('id', ids.slice(i, i + 200)); if (error) this.handleErr(error); }
    },
    async logout() { this.session = null; await sb.auth.signOut(); location.reload(); },
    async switchWorkspace(id) { document.getElementById('view').innerHTML = '<div class="empty">Carregando…</div>'; await this.openWorkspace(id); toast('Espaço: ' + this.wsInfo.name); },
    async newWorkspace() {
      openForm({ title: 'Novo espaço de finanças', data: { name: '' }, fields: [{ k: 'name', label: 'Nome do espaço', req: true, ph: 'Ex.: Finanças da família, Empresa…' }, { k: 'h', type: 'html', html: '<div class="hint">Cada espaço tem contas, cartões e lançamentos próprios. Você pode convidar pessoas para cada um.</div>' }],
        async onSave(d) { const { data, error } = await sb.rpc('create_workspace', { ws_name: d.name }); if (error) throw new Error(msgErr(error)); await Store.loadWorkspaces(); await Store.switchWorkspace(data); } });
    },
    async renameWorkspace() {
      const w = this.wsInfo;
      openForm({ title: 'Renomear espaço', data: { name: w.name }, fields: [{ k: 'name', label: 'Nome', req: true }],
        async onSave(d) { const { error } = await sb.from('workspaces').update({ name: d.name.trim() }).eq('id', w.id); if (error) throw new Error(msgErr(error)); await Store.loadWorkspaces(); Store.emit(); } });
    },
    async changePassword() {
      openForm({ title: 'Alterar senha', data: {}, fields: [{ k: 'p1', label: 'Nova senha', type: 'password', req: true, w: 3 }, { k: 'p2', label: 'Repita a nova senha', type: 'password', req: true, w: 3 }],
        async onSave(d) { if (d.p1.length < 6) throw new Error('Mínimo de 6 caracteres'); if (d.p1 !== d.p2) throw new Error('As senhas não conferem'); const { error } = await sb.auth.updateUser({ password: d.p1 }); if (error) throw new Error(msgErr(error)); toast('Senha alterada'); } });
    },
    async renderMembers(el) {
      const w = this.wsInfo; const owner = w.role === 'owner';
      const [m, i] = await Promise.all([sb.from('members').select('user_id,email,role,created_at').eq('workspace_id', this.ws), sb.from('invites').select('email,role,created_at').eq('workspace_id', this.ws)]);
      const mem = (m.data || []).sort((a, b) => (a.role === 'owner' ? -1 : 0) - (b.role === 'owner' ? -1 : 0)); const inv = i.data || [];
      const R = { owner: 'Proprietário', editor: 'Editor (lança e edita)', viewer: 'Leitor (só visualiza)' };
      const cnt = id => txs().filter(t => t.createdBy === id).length;
      el.innerHTML = `<div class="grid g2"><div class="card"><div class="hd"><h3>Pessoas com acesso a "${esc(w.name)}"</h3></div><div class="bd p0 list">
        ${mem.map((x, k) => `<div class="it">${avatar(x.email, k)}<div class="grow"><b>${esc(x.email || 'usuário')}</b>${x.user_id === this.uid ? ' ' + chip('você', 'acc') : ''}<div class="hint">${R[x.role]} · desde ${fmtDate((x.created_at || '').slice(0, 10))} · ${cnt(x.user_id)} lançamento(s)</div></div>
          ${owner && x.role !== 'owner' ? `<select class="ctl" style="height:28px" data-role="${x.user_id}">${optsHTML([['editor', 'Editor'], ['viewer', 'Leitor']], x.role)}</select><button class="btn sm ghost danger" data-rm="${x.user_id}">Remover</button>` : ''}
          ${!owner && x.user_id === this.uid ? '<button class="btn sm ghost danger" data-leave="1">Sair do espaço</button>' : ''}</div>`).join('')}
        ${inv.map(x => `<div class="it">${avatar(x.email, 9)}<div class="grow"><b>${esc(x.email)}</b> ${chip('convite pendente', 'warn')}<div class="hint">${R[x.role]} · aguardando a pessoa criar a conta ou entrar</div></div>${owner ? `<button class="btn sm ghost danger" data-uninv="${esc(x.email)}">Cancelar</button>` : ''}</div>`).join('')}
        </div></div>
        <div class="card"><div class="hd"><h3>Convidar pessoa</h3></div><div class="bd">${owner ? `<div class="fg"><div class="f w4"><label>E-mail</label><input class="ctl" id="invEmail" type="email" placeholder="email@exemplo.com"></div><div class="f w2"><label>Permissão</label><select class="ctl" id="invRole"><option value="editor">Editor</option><option value="viewer">Leitor</option></select></div></div>
          <button class="btn pri" id="invBtn" style="margin-top:12px">Convidar</button>
          <p class="hint" style="line-height:1.6;margin-bottom:0">A pessoa deve abrir o link do app e <b>criar a conta com este mesmo e-mail</b> (ou entrar, se já tiver conta). O acesso é liberado automaticamente no login. Envie o link do app para ela pelo WhatsApp: <span class="mono">${esc(appUrl())}</span></p>` : '<div class="mut">Somente o proprietário do espaço pode convidar pessoas.</div>'}</div></div></div>
        <div class="card" style="margin-top:16px"><div class="bd" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><div class="grow"><b>Seus espaços</b><div class="hint">Cada pessoa que se cadastra ganha um espaço próprio e privado. Crie outros para separar família, empresa etc.</div></div>
          ${owner ? '<button class="btn" id="wsRen">Renomear este espaço</button>' : ''}<button class="btn" id="wsNew">+ Novo espaço</button><button class="btn" id="pwBtn">Alterar minha senha</button></div></div>`;
      const reload = () => this.renderMembers(el);
      const q = s => el.querySelector(s);
      if (q('#invBtn')) q('#invBtn').onclick = async () => {
        const em = q('#invEmail').value.trim().toLowerCase(); if (!/^\S+@\S+\.\S+$/.test(em)) { toast('E-mail inválido'); return; }
        if (mem.some(x => (x.email || '').toLowerCase() === em)) { toast('Essa pessoa já tem acesso'); return; }
        const { error } = await sb.from('invites').upsert({ workspace_id: this.ws, email: em, role: q('#invRole').value, invited_by: this.uid }); if (error) { toast('Erro: ' + msgErr(error)); return; }
        toast('Convite registrado para ' + em); reload();
      };
      el.querySelectorAll('[data-role]').forEach(s => s.onchange = async () => { const { error } = await sb.from('members').update({ role: s.value }).eq('workspace_id', this.ws).eq('user_id', s.dataset.role); toast(error ? 'Erro: ' + msgErr(error) : 'Permissão atualizada'); });
      el.querySelectorAll('[data-rm]').forEach(b => b.onclick = async () => { if (!(await confirmBox('Remover acesso', 'Esta pessoa deixará de ver e lançar neste espaço.', 'Remover', 'danger'))) return; const { error } = await sb.from('members').delete().eq('workspace_id', this.ws).eq('user_id', b.dataset.rm); toast(error ? 'Erro: ' + msgErr(error) : 'Acesso removido'); render(); });
      el.querySelectorAll('[data-uninv]').forEach(b => b.onclick = async () => { await sb.from('invites').delete().eq('workspace_id', this.ws).eq('email', b.dataset.uninv); reload(); });
      const lv = q('[data-leave]'); if (lv) lv.onclick = async () => { if (!(await confirmBox('Sair do espaço', `Você perderá o acesso a "${esc(w.name)}".`, 'Sair', 'danger'))) return; await sb.from('members').delete().eq('workspace_id', this.ws).eq('user_id', this.uid); await this.loadWorkspaces(); await this.switchWorkspace((this.workspaces[0] || {}).id); };
      if (q('#wsRen')) q('#wsRen').onclick = () => this.renameWorkspace();
      q('#wsNew').onclick = () => this.newWorkspace(); q('#pwBtn').onclick = () => this.changePassword();
    },
  });
})();
