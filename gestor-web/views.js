'use strict';
/* =========================================================
   Gestor Financeiro & Patrimonial — interface
   ========================================================= */
let AI = null, MCP = null, DL = null, USER = null;
const CH = {};
const cssv = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

// ---------- ícones ----------
const IC = {
  dashboard: 'M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z',
  lancamentos: 'M4 6h16M4 12h16M4 18h10',
  pagar: 'M12 2v20M17 7l-5-5-5 5',
  receber: 'M12 22V2M7 17l5 5 5-5',
  cartoes: 'M2 6h20v12H2zM2 10h20',
  bancos: 'M3 10l9-6 9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18',
  fluxo: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  projetado: 'M3 12h4l3-8 4 16 3-8h4',
  dre: 'M6 3h9l5 5v13H6zM9 13h6M9 17h6M9 9h3',
  orcamento: 'M12 2a10 10 0 1 0 10 10H12z',
  projecoes: 'M3 20l5-7 4 3 8-11',
  patrimonio: 'M3 21h18M5 21V9l7-6 7 6v12M10 21v-6h4v6',
  metas: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
  indicadores: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  alertas: 'M12 3l10 18H2zM12 10v5M12 18v.5',
  integracoes: 'M8 3v4M16 3v4M4 11h16M6 7h12v13H6z',
  config: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12l2-1-2-4-2 1-2-2V4h-4v2l-2 2-2-1-2 4 2 1v2l-2 1 2 4 2-1 2 2v2h4v-2l2-2 2 1 2-4-2-1z',
};
const icon = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${IC[k] || ''}"/></svg>`;
const NAV = [
  ['Visão geral', [['dashboard', 'Dashboard'], ['indicadores', 'Indicadores'], ['alertas', 'Alertas']]],
  ['Operação', [['lancamentos', 'Lançamentos'], ['pagar', 'Contas a pagar'], ['receber', 'Contas a receber'], ['cartoes', 'Cartões de crédito'], ['bancos', 'Bancos e contas']]],
  ['Análise', [['fluxo', 'Fluxo de caixa'], ['projetado', 'Fluxo projetado'], ['dre', 'DRE gerencial'], ['orcamento', 'Orçamento'], ['projecoes', 'Projeções']]],
  ['Patrimônio', [['patrimonio', 'Patrimônio'], ['metas', 'Metas']]],
  ['Sistema', [['integracoes', 'Integrações & IA'], ['config', 'Configurações']]],
];
const TITLES = Object.fromEntries(NAV.flatMap(g => g[1]));

// ---------- componentes ----------
function toast(msg) { const d = document.createElement('div'); d.textContent = msg; $('#toast').appendChild(d); setTimeout(() => d.remove(), 4200); }
function modal(html) { const m = $('#modal'); m.innerHTML = html; m.classList.add('on'); return m; }
function closeModal() { const m = $('#modal'); m.classList.remove('on'); m.innerHTML = ''; }
function choose(title, msg, buttons) {
  return new Promise(res => {
    modal(`<div class="mdl" style="width:min(460px,100%)"><div class="mh"><h2>${esc(title)}</h2></div><div class="mb">${msg}</div><div class="mf">${buttons.map((b, i) => `<button class="btn ${b.cls || ''}" data-ch="${i}">${esc(b.label)}</button>`).join('')}</div></div>`);
    $$('#modal [data-ch]').forEach(b => b.onclick = () => { closeModal(); res(buttons[+b.dataset.ch].v); });
  });
}
const confirmBox = (title, msg, ok = 'Confirmar', cls = 'pri') => choose(title, `<p style="margin:0">${msg}</p>`, [{ label: 'Cancelar', v: false }, { label: ok, v: true, cls }]);
const kpi = (l, v, s = '', cls = '', extra = '') => `<div class="card kpi"><div class="l"><span>${l}</span>${extra}</div><div class="v ${cls}">${v}</div>${s ? `<div class="s">${s}</div>` : ''}</div>`;
const money = (v, sign = false) => `<span class="num ${v < -0.004 ? 'neg' : (sign && v > 0.004 ? 'pos' : '')}">${fmt(v)}</span>`;
const chip = (t, c = '') => `<span class="chip ${c}">${t}</span>`;
const bar = (p, c) => `<div class="bar"><i class="${c || (p >= 1 ? 'neg' : p >= .8 ? 'warn' : 'pos')}" style="width:${Math.min(100, Math.max(0, p * 100)).toFixed(1)}%"></i></div>`;
const statusChip = t => t.status === 'pago' ? chip(t.type === 'R' ? 'Recebido' : 'Pago', 'pos') : (t.due || t.date) < todayStr() ? chip('Vencido', 'neg') : chip('Pendente', 'warn');
const empty = (msg, btn = '') => `<div class="empty">${msg}${btn ? `<div style="margin-top:12px">${btn}</div>` : ''}</div>`;
const optsHTML = (opts, cur) => opts.map(([v, l]) => `<option value="${esc(v)}" ${String(v) === String(cur ?? '') ? 'selected' : ''}>${esc(l)}</option>`).join('');
const normOpts = a => (a || []).map(x => Array.isArray(x) ? x : [x, x]);
const avatar = (name, i = 0) => `<div class="av" style="background:${PALETTE[i % PALETTE.length]}">${esc((name || '?').slice(0, 2).toUpperCase())}</div>`;
const roCheck = () => { if (!Store.canWrite) { toast('Você está em modo somente leitura.'); return false; } return true; };

// ---------- formulário genérico ----------
function openForm(o) {
  const d = Object.assign({}, o.data || {});
  const fieldHTML = f => {
    const v = d[f.k] ?? '';
    let inp;
    if (f.type === 'select') inp = `<select class="ctl" name="${f.k}">${optsHTML(normOpts(typeof f.options === 'function' ? f.options(d) : f.options), v)}</select>`;
    else if (f.type === 'textarea') inp = `<textarea class="ctl" name="${f.k}" placeholder="${esc(f.ph || '')}">${esc(v)}</textarea>`;
    else if (f.type === 'seg') inp = `<input type="hidden" name="${f.k}" value="${esc(v)}"><div class="seg">${f.options.map(([val, l]) => `<button type="button" class="${val} ${val === v ? 'on' : ''}" data-seg="${f.k}" data-v="${val}">${l}</button>`).join('')}</div>`;
    else if (f.type === 'check') inp = `<label style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text)"><input type="checkbox" name="${f.k}" ${v ? 'checked' : ''}> ${esc(f.text || '')}</label>`;
    else if (f.type === 'html') inp = f.html;
    else {
      const t = f.type === 'money' ? 'text' : (f.type || 'text');
      const list = f.list ? `<datalist id="dl_${f.k}">${(typeof f.list === 'function' ? f.list() : f.list).map(x => `<option value="${esc(x)}">`).join('')}</datalist>` : '';
      inp = `<input class="ctl" name="${f.k}" type="${t}" ${f.type === 'money' ? 'inputmode="decimal"' : ''} ${f.step ? `step="${f.step}"` : ''} value="${esc(v)}" placeholder="${esc(f.ph || '')}" ${f.list ? `list="dl_${f.k}"` : ''} autocomplete="off">${list}`;
    }
    return `<div class="f w${f.w || 6}" data-f="${f.k}">${f.label ? `<label>${esc(f.label)}${f.req ? ' *' : ''}</label>` : ''}${inp}${f.hint ? `<div class="hint">${f.hint}</div>` : ''}</div>`;
  };
  const root = modal(`<div class="mdl ${o.wide ? 'wide' : ''}"><div class="mh"><h2>${esc(o.title)}</h2><button class="btn ghost ib" data-x>✕</button></div>
    <form class="mb" autocomplete="off"><div class="fg">${o.fields.map(fieldHTML).join('')}</div>${o.note || ''}</form>
    <div class="mf">${o.onDelete ? '<button class="btn danger" data-del style="margin-right:auto">Excluir</button>' : ''}<button class="btn" data-x>Cancelar</button><button class="btn pri" data-ok>${esc(o.okLabel || 'Salvar')}</button></div></div>`);
  const read = () => { o.fields.forEach(f => { const el = root.querySelector(`[name="${f.k}"]`); if (!el) return; d[f.k] = f.type === 'check' ? el.checked : el.value; }); return d; };
  const visible = f => !f.when || f.when(d);
  const refresh = () => {
    read();
    o.fields.forEach(f => {
      const w = root.querySelector(`[data-f="${f.k}"]`); if (!w) return;
      w.style.display = visible(f) ? '' : 'none';
      if (f.type === 'select' && typeof f.options === 'function') {
        const el = w.querySelector('select'); const opts = normOpts(f.options(d)); const sig = opts.map(x => x[0]).join('|');
        if (el.dataset.sig !== sig) { const cur = el.value; el.innerHTML = optsHTML(opts, cur); el.dataset.sig = sig; if (!opts.some(x => String(x[0]) === cur) && opts[0]) el.value = opts[0][0]; d[f.k] = el.value; }
      }
    });
    o.onChange && o.onChange(d, api);
  };
  const api = {
    root, d, refresh,
    set(k, v) { const el = root.querySelector(`[name="${k}"]`); if (el) { refresh(); el.value = v; } refresh(); },
  };
  root.querySelector('form').addEventListener('input', refresh);
  root.querySelector('form').addEventListener('change', e => { o.onFieldChange && o.onFieldChange(e.target.name, d, api); refresh(); });
  root.querySelector('form').addEventListener('submit', e => e.preventDefault());
  $$('[data-seg]', root).forEach(b => b.onclick = () => {
    const k = b.dataset.seg; root.querySelector(`[name="${k}"]`).value = b.dataset.v;
    $$(`[data-seg="${k}"]`, root).forEach(x => x.classList.toggle('on', x === b)); refresh();
  });
  $$('[data-x]', root).forEach(b => b.onclick = closeModal);
  if (o.onDelete) root.querySelector('[data-del]').onclick = async () => { try { await o.onDelete(d); } catch (e) { toast(e.message || e); } };
  root.querySelector('[data-ok]').onclick = async () => {
    read();
    const miss = o.fields.find(f => f.req && visible(f) && !String(d[f.k] ?? '').trim());
    if (miss) { toast(`Preencha: ${miss.label}`); root.querySelector(`[name="${miss.k}"]`)?.focus(); return; }
    const btn = root.querySelector('[data-ok]'); btn.disabled = true;
    try { if (!roCheck()) { btn.disabled = false; return; } const r = await o.onSave(d, api); if (r !== false) closeModal(); }
    catch (e) { toast(e.message || String(e)); btn.disabled = false; }
  };
  refresh();
  setTimeout(() => { const first = root.querySelector('input.ctl:not([type=hidden]),select.ctl'); first && first.focus(); }, 30);
  return api;
}

// ---------- gráficos ----------
function mkChart(id, config) {
  const el = document.getElementById(id); if (!el || !window.Chart) return;
  if (CH[id]) CH[id].destroy();
  Chart.defaults.font.family = 'Inter'; Chart.defaults.font.size = 11.5; Chart.defaults.color = cssv('--muted'); Chart.defaults.borderColor = cssv('--line2');
  config.options = Object.assign({ responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false } }, config.options || {});
  config.options.plugins = Object.assign({ legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true } }, tooltip: { callbacks: { label: c => `${c.dataset.label ? c.dataset.label + ': ' : (c.label ? c.label + ': ' : '')}${fmt(c.raw)}` } } }, config.options.plugins || {});
  CH[id] = new Chart(el, config);
}
const killCharts = () => { Object.keys(CH).forEach(k => { CH[k].destroy(); delete CH[k]; }); };
const yMoney = { ticks: { callback: v => fmtK(v) }, grid: { color: () => cssv('--line2') } };
const noGrid = { grid: { display: false } };

// ---------- shell ----------
function renderSide() {
  const nAl = alerts().filter(a => a.sev === 'danger').length;
  const mode = Store.mode === 'cloud' ? `<span class="dot ok"></span> Banco em nuvem · multiusuário${Store.stale ? ' (reconectando)' : ''}` : `<span class="dot loc"></span> Modo local (só neste navegador)`;
  $('#side').innerHTML = `<div class="brand"><div class="logo">G</div><div><b>Gestor Financeiro</b><small>Finanças & Patrimônio</small></div></div>
  ${NAV.map(([g, items]) => `<div class="navg"><div>${g}</div>${items.map(([k, l]) => `<a class="nav ${P.view === k ? 'on' : ''}" href="#${k}">${icon(k)}<span>${l}</span>${k === 'alertas' && nAl ? `<span class="bdg">${nAl}</span>` : ''}</a>`).join('')}</div>`).join('')}
  <div class="sidefoot"><div class="who" id="whoami"></div><div>${mode}</div>${Store.canWrite ? '' : '<div style="color:#f59e0b;margin-top:4px">Somente leitura</div>'}</div>`;
  if (USER && Store.uid) USER.profiles([Store.uid]).then(ps => { const n = (ps[Store.uid] || {}).name || 'Você'; const w = $('#whoami'); if (w) w.innerHTML = `${avatar(n)}<span>${esc(n)}</span>`; }).catch(() => { });
}
function renderTop() {
  $('#title').textContent = TITLES[P.view] || '';
  $('#mLbl').textContent = ymLong(P.ym);
  const ents = cfg().entities;
  $('#entSel').innerHTML = `<option value="*">Consolidado · todas as entidades</option>` + ents.map(e => `<option ${P.ent === e ? 'selected' : ''}>${esc(e)}</option>`).join('');
  if (P.ent !== '*' && !ents.includes(P.ent)) P.ent = '*';
  $('#entSel').value = P.ent;
}
let rq = 0;
function render() { cancelAnimationFrame(rq); rq = requestAnimationFrame(renderNow); }
function renderNow() {
  const v = location.hash.slice(1); P.view = VIEWS[v] ? v : 'dashboard';
  renderSide(); renderTop(); killCharts();
  const el = $('#view'); const st = el.scrollTop;
  try { el.innerHTML = (Store.canWrite ? '' : '<div class="banner">Você tem acesso somente leitura a este espaço. Peça ao proprietário acesso de Colaborador para lançar.</div>') + VIEWS[P.view].html(); VIEWS[P.view].after && VIEWS[P.view].after(); }
  catch (e) { console.error(e); el.innerHTML = `<div class="card"><div class="bd">Erro ao montar a tela: ${esc(e.message)}</div></div>`; }
  el.scrollTop = st;
}

// ---------- ações (delegação) ----------
const ACT = {};
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const f = ACT[b.dataset.act]; if (f) { e.preventDefault(); f(b.dataset, b); }
});
ACT.go = d => { location.hash = d.v; };
ACT.newTx = d => txForm({}, d.type ? { type: d.type, status: d.status || 'pago' } : {});
ACT.editTx = d => { const t = S.tx.get(d.id); if (t) txForm(t); };
ACT.delTx = async d => delTx(d.id);
ACT.payTx = d => payForm(d.id);
ACT.payInv = d => invoicePayForm(d.card, d.ref);
ACT.newAcc = () => accForm();
ACT.editAcc = d => accForm(S.accounts.get(d.id));
ACT.stmt = d => statementModal(d.id);
ACT.adjust = d => adjustForm(d.id);
ACT.newCard = () => cardForm();
ACT.editCard = d => cardForm(S.cards.get(d.id));
ACT.selCard = d => { UI.card = d.id; UI.ref = null; render(); };
ACT.import = () => importModal();
ACT.newAsset = d => assetForm({ kind: d.kind });
ACT.editAsset = d => assetForm(S.assets.get(d.id));
ACT.newGoal = () => goalForm();
ACT.editGoal = d => goalForm(S.goals.get(d.id));
ACT.contrib = d => contribForm(d.id);
ACT.newBudget = () => budgetForm();
ACT.editBudget = d => budgetForm(S.budgets.get(d.id));
ACT.suggestBudget = () => suggestBudgets();
ACT.budgetCat = d => budgetForm({ cat: d.cat, amount: +d.amt });
ACT.snap = () => recordSnapshot();
ACT.ai = d => { location.hash = 'integracoes'; setTimeout(() => askAI(d.q), 60); };
ACT.tab = d => { UI[d.k] = d.v; render(); };
const UI = { card: null, ref: null, horizon: 90, variable: false, dreCats: true, cfgTab: 'geral', payH: 60, proj: { months: 24, incomeGrowth: 5, inflation: 4.5, yield: 10, extra: 0, base: 6 } };

// =========================================================
// LANÇAMENTOS — formulário principal
// =========================================================
function srcOptions(d) {
  const o = [['', 'Selecione…']];
  accounts().forEach(a => o.push(['acc:' + a.id, '🏦 ' + a.name + (cfg().entities.length > 1 ? ` (${a.entity || 'Pessoal'})` : '')]));
  if (d.type === 'D' || d.type === 'R') cards().forEach(c => o.push(['card:' + c.id, '💳 ' + c.name]));
  return o;
}
function txForm(t0 = {}, preset = {}) {
  if (!accounts().length && !cards().length) { toast('Cadastre primeiro uma conta bancária ou cartão.'); accForm(); return; }
  const editing = !!t0.id;
  const d0 = editing ? Object.assign({}, t0) : Object.assign({ type: 'D', date: todayStr(), status: 'pago', parc: '1', rep: '1' }, preset);
  d0.src = d0.src || (d0.card ? 'card:' + d0.card : d0.account ? 'acc:' + d0.account : (srcOptions(d0)[1] || [''])[0]);
  d0.amount = d0.amount ? String(d0.amount).replace('.', ',') : '';
  const isCard = d => (d.src || '').startsWith('card:');
  const descs = [...new Set(txs().map(t => t.desc).filter(Boolean))].slice(-300);
  const parties = [...new Set(txs().map(t => t.party).filter(Boolean))];
  const ccs = [...new Set([...cfg().costCenters, ...txs().map(t => t.cc).filter(Boolean)])];
  const api = openForm({
    title: editing ? 'Editar lançamento' : 'Novo lançamento', data: d0, wide: false,
    fields: [
      { k: 'type', type: 'seg', options: [['D', 'Despesa'], ['R', 'Receita'], ['T', 'Transferência']] },
      { k: 'desc', label: 'Descrição', w: 4, req: true, list: descs, ph: 'Ex.: Supermercado Pão de Açúcar' },
      { k: 'amount', label: 'Valor (R$)', type: 'money', w: 2, req: true, ph: '0,00' },
      { k: 'date', label: 'Data / competência', type: 'date', w: 2, req: true },
      { k: 'src', label: 'Conta ou cartão', type: 'select', w: 4, req: true, options: srcOptions, when: d => d.type !== 'T' },
      { k: 'account', label: 'Conta de origem', type: 'select', w: 3, options: () => [['', 'Selecione…'], ...accounts().map(a => [a.id, a.name])], when: d => d.type === 'T', req: true },
      { k: 'toAccount', label: 'Conta de destino', type: 'select', w: 3, options: () => [['', 'Selecione…'], ...accounts().map(a => [a.id, a.name])], when: d => d.type === 'T', req: true },
      { k: 'status', label: 'Situação', type: 'select', w: 2, options: d => [['pago', d.type === 'R' ? 'Recebido' : 'Pago / efetivado'], ['pendente', d.type === 'R' ? 'A receber' : 'A pagar']], when: d => !isCard(d) },
      { k: 'due', label: 'Vencimento', type: 'date', w: 2, when: d => !isCard(d) && d.status === 'pendente' },
      { k: 'paidDate', label: 'Data do pagamento', type: 'date', w: 2, when: d => !isCard(d) && d.status === 'pago' && editing },
      { k: 'parc', label: 'Parcelas', type: 'number', w: 2, when: d => isCard(d) && !editing && d.type === 'D', hint: 'Divide o valor total' },
      { k: 'rep', label: 'Repetir (meses)', type: 'number', w: 2, when: d => !isCard(d) && !editing && d.type !== 'T', hint: 'Contas fixas / recorrentes' },
      { k: 'invoice', label: 'Fatura (mês de venc.)', type: 'month', w: 2, when: d => isCard(d) && editing },
      { k: 'cat', label: 'Categoria', type: 'select', w: 3, req: true, options: d => [['', 'Selecione…'], ...catsOf(d.type === 'R' ? 'R' : 'D').map(c => c.name)], when: d => d.type !== 'T' },
      { k: 'sub', label: 'Subcategoria', type: 'select', w: 3, options: d => [['', '—'], ...((catInfo(d.cat) || {}).subs || [])], when: d => d.type !== 'T' },
      { k: 'cc', label: 'Centro de custo', w: 3, list: ccs, ph: 'Ex.: Casa, Empresa, Filhos' },
      { k: 'party', label: 'Cliente / fornecedor', w: 3, list: parties },
      { k: 'notes', label: 'Observações', type: 'textarea' },
    ],
    note: `<div style="display:flex;gap:8px;margin-top:12px;align-items:center" id="txNote"><button type="button" class="btn sm" id="aiCat" style="display:${AI ? '' : 'none'}">✨ Sugerir categoria com IA</button><span class="hint" id="txHint"></span></div>`,
    onFieldChange(k, d, api) {
      if (k === 'desc' && !d.cat && d.type !== 'T') { const g = learnCategory(d.desc); if (g && catInfo(g.cat)?.type === (d.type === 'R' ? 'R' : 'D')) { api.set('cat', g.cat); api.set('sub', g.sub || ''); $('#txHint').textContent = 'Categoria sugerida pelo histórico'; } }
    },
    onChange(d) {
      const h = $('#txHint'); if (!h) return;
      if (isCard(d) && d.date) { const c = S.cards.get(d.src.slice(5)); if (c) { const ref = d.invoice || invoiceRefFor(c, d.date); h.textContent = `Entra na fatura de ${ymLabel(ref)} · vencimento ${fmtDate(invoiceDue(c, ref))}`; } }
      else if (h.textContent.startsWith('Entra')) h.textContent = '';
    },
    onDelete: editing ? async () => { closeModal(); await delTx(t0.id); } : null,
    async onSave(d) {
      const amount = r2(parseNum(d.amount)); if (!(amount > 0)) throw new Error('Informe um valor maior que zero.');
      const base = { type: d.type, desc: d.desc.trim(), amount, date: d.date, cc: d.cc || '', party: d.party || '', notes: d.notes || '' };
      if (d.type === 'T') {
        if (d.account === d.toAccount) throw new Error('Origem e destino devem ser diferentes.');
        Object.assign(base, { account: d.account, toAccount: d.toAccount, cat: 'Transferência', status: d.status || 'pago', paidDate: d.status === 'pago' ? (d.paidDate || d.date) : '', due: d.due || d.date, card: '' });
      } else {
        base.cat = d.cat; base.sub = d.sub || '';
        if (isCard(d)) { base.card = d.src.slice(5); base.account = ''; base.status = 'pago'; }
        else { base.account = d.src.slice(4); base.card = ''; base.status = d.status; base.due = d.status === 'pendente' ? (d.due || d.date) : (d.due || d.date); base.paidDate = d.status === 'pago' ? (d.paidDate || d.date) : ''; }
      }
      if (editing) {
        const t = Object.assign({}, t0, base);
        if (t.card) t.invoice = d.invoice || invoiceRefFor(S.cards.get(t.card), t.date); else delete t.invoice;
        await Store.put('tx', t); toast('Lançamento atualizado'); return;
      }
      const out = [];
      if (base.card && d.type === 'D' && +d.parc > 1) {
        const n = Math.min(48, Math.max(1, parseInt(d.parc))); const card = S.cards.get(base.card); const ref0 = invoiceRefFor(card, base.date); const g = uid();
        const each = Math.floor(amount / n * 100) / 100;
        for (let k = 0; k < n; k++) out.push(Object.assign({}, base, { amount: k === n - 1 ? r2(amount - each * (n - 1)) : each, date: k ? addMonthsDate(base.date, k) : base.date, invoice: addMonths(ref0, k), desc: `${base.desc} (${k + 1}/${n})`, group: g, inst: [k + 1, n], total: amount }));
      } else if (!base.card && +d.rep > 1) {
        const n = Math.min(60, parseInt(d.rep)); const g = uid();
        for (let k = 0; k < n; k++) out.push(Object.assign({}, base, { date: addMonthsDate(base.date, k), due: addMonthsDate(base.due || base.date, k), status: k === 0 ? base.status : 'pendente', paidDate: k === 0 ? base.paidDate : '', group: g, recur: true }));
      } else {
        if (base.card) base.invoice = invoiceRefFor(S.cards.get(base.card), base.date);
        out.push(base);
      }
      await Store.putMany('tx', out);
      toast(out.length > 1 ? `${out.length} lançamentos criados` : 'Lançamento registrado');
    },
  });
  const aiBtn = $('#aiCat');
  if (aiBtn) aiBtn.onclick = async () => {
    const d = api.d; if (!d.desc) { toast('Digite a descrição primeiro.'); return; }
    aiBtn.disabled = true; aiBtn.textContent = '✨ Analisando…';
    try {
      const cats = catsOf(d.type === 'R' ? 'R' : 'D').map(c => ({ categoria: c.name, subcategorias: c.subs }));
      const r = await AI.json(`Você classifica lançamentos financeiros pessoais no Brasil. Descrição: "${d.desc}". Valor: R$ ${d.amount || '?'}. Escolha a melhor categoria e subcategoria EXATAMENTE desta lista: ${JSON.stringify(cats)}. Responda só JSON {"cat":"...","sub":"..."}.`, { modelTier: 'quick' });
      if (r && catInfo(r.cat)) { api.set('cat', r.cat); api.set('sub', r.sub || ''); $('#txHint').textContent = `IA: ${r.cat}${r.sub ? ' › ' + r.sub : ''}`; }
      else toast('A IA não encontrou uma categoria adequada.');
    } catch (e) { toast(e.code === 'not_granted' ? 'IA não autorizada nesta visualização.' : 'IA indisponível no momento.'); }
    aiBtn.disabled = false; aiBtn.textContent = '✨ Sugerir categoria com IA';
  };
}
async function delTx(id) {
  if (!roCheck()) return; const t = S.tx.get(id); if (!t) return;
  if (t.group) {
    const v = await choose('Excluir lançamento', `<p style="margin:0">"${esc(t.desc)}" faz parte de um grupo (${t.inst ? 'parcelamento' : 'recorrência'}).</p>`, [{ label: 'Cancelar', v: 0 }, { label: 'Somente este', v: 1 }, { label: t.inst ? 'Todas as parcelas' : 'Este e os futuros', v: 2, cls: 'danger' }]);
    if (!v) return;
    if (v === 2) { const ids = txs().filter(x => x.group === t.group && (t.inst || x.date >= t.date)).map(x => x.id); await Store.delMany('tx', ids); toast(`${ids.length} lançamentos excluídos`); return; }
  } else if (!(await confirmBox('Excluir lançamento', `Excluir "${esc(t.desc)}" de ${fmt(t.amount)}?`, 'Excluir', 'danger'))) return;
  await Store.del('tx', id); toast('Lançamento excluído');
}
function payForm(id) {
  const t = S.tx.get(id); if (!t) return;
  openForm({
    title: t.type === 'R' ? 'Registrar recebimento' : 'Registrar pagamento (baixa)', okLabel: 'Confirmar baixa',
    data: { paidDate: todayStr(), account: t.account, amount: String(t.amount).replace('.', ',') },
    fields: [
      { k: 'html', type: 'html', html: `<div class="kv"><span>Lançamento</span><b>${esc(t.desc)}</b><span>Vencimento</span><span>${fmtDate(t.due || t.date)}</span><span>Valor previsto</span><span>${fmt(t.amount)}</span></div>` },
      { k: 'paidDate', label: 'Data do pagamento', type: 'date', w: 3, req: true },
      { k: 'amount', label: 'Valor efetivo (com juros/desconto)', type: 'money', w: 3, req: true },
      { k: 'account', label: 'Conta', type: 'select', options: accounts().map(a => [a.id, a.name]), req: true },
    ],
    async onSave(d) {
      const v = r2(parseNum(d.amount)); const n = Object.assign({}, t, { status: 'pago', paidDate: d.paidDate, account: d.account, amount: v });
      if (v !== +t.amount) n.origAmount = +t.amount;
      await Store.put('tx', n); toast(t.type === 'R' ? 'Recebimento registrado' : 'Pagamento registrado');
    },
  });
}
function invoicePayForm(cardId, ref) {
  const c = S.cards.get(cardId); const inv = cardInvoices(cardId)[ref]; if (!c || !inv) return;
  openForm({
    title: `Pagar fatura ${c.name} · ${ymLabel(ref)}`, okLabel: 'Registrar pagamento',
    data: { date: todayStr(), account: c.payAccount || (accounts()[0] || {}).id, amount: String(inv.open).replace('.', ',') },
    fields: [
      { k: 'html', type: 'html', html: `<div class="kv"><span>Total da fatura</span><b>${fmt(inv.total)}</b><span>Já pago</span><span>${fmt(inv.paid)}</span><span>Em aberto</span><b>${fmt(inv.open)}</b><span>Vencimento</span><span>${fmtDate(inv.due)}</span></div>` },
      { k: 'date', label: 'Data do pagamento', type: 'date', w: 3, req: true },
      { k: 'amount', label: 'Valor pago', type: 'money', w: 3, req: true, hint: 'Pagamento parcial é permitido' },
      { k: 'account', label: 'Debitar da conta', type: 'select', options: accounts().map(a => [a.id, a.name]), req: true },
    ],
    async onSave(d) {
      const v = r2(parseNum(d.amount)); if (!(v > 0)) throw new Error('Valor inválido');
      await Store.put('tx', { type: 'D', kind: 'fatura', payCard: cardId, invoice: ref, account: d.account, amount: v, date: d.date, paidDate: d.date, due: inv.due, status: 'pago', cat: 'Pagamento de fatura', desc: `Pagamento fatura ${c.name} ${ymLabel(ref)}` });
      toast('Pagamento da fatura registrado');
    },
  });
}

// =========================================================
// VIEWS
// =========================================================
const VIEWS = {};

// ---------- DASHBOARD ----------
VIEWS.dashboard = {
  html() {
    if (!accounts(true).length && !cards(true).length) return onboarding();
    const cur = compTotals(P.ym), prev = compTotals(addMonths(P.ym, -1)); const nw = netWorth();
    const res = cur.R - cur.D; const sav = cur.R ? res / cur.R : null;
    const varp = (a, b) => b ? `${a >= b ? '▲' : '▼'} ${pct(Math.abs(a / b - 1), 0)} vs mês anterior` : 'sem base anterior';
    const al = alerts().slice(0, 6);
    const due = [...payables('D', 15).map(p => ({ ...p, k: 'D' })), ...payables('R', 15).map(p => ({ ...p, k: 'R' }))].sort((a, b) => a.due.localeCompare(b.due)).slice(0, 8);
    const bud = budgetRows(P.ym).filter(r => r.type === 'D').slice(0, 5);
    return `<div class="toolbar"><div class="mut">Competência: <b>${ymLong(P.ym)}</b> · ${P.ent === '*' ? 'Consolidado' : esc(P.ent)}</div><div class="sp"></div>
      ${AI ? `<button class="btn" data-act="ai" data-q="Faça um diagnóstico financeiro completo do mês analisado: pontos fortes, riscos, 3 ações práticas priorizadas.">✨ Diagnóstico com IA</button>` : ''}
      <button class="btn" data-act="newTx" data-type="R">+ Receita</button><button class="btn" data-act="newTx" data-type="D">+ Despesa</button></div>
    <div class="grid g5">
      ${kpi('Saldo em contas', fmt(nw.cash), `${scopeAccounts().length} conta(s) consolidadas`, nw.cash < 0 ? 'neg' : '')}
      ${kpi('Receitas do mês', fmt(cur.R), varp(cur.R, prev.R), 'pos')}
      ${kpi('Despesas do mês', fmt(cur.D), varp(cur.D, prev.D), 'neg')}
      ${kpi('Resultado do mês', fmt(res), `Taxa de poupança: ${pct(sav)}`, res < 0 ? 'neg' : 'pos')}
      ${kpi('Patrimônio líquido', fmt(nw.nw), `Ativos ${fmtK(nw.totalAssets)} · Passivos ${fmtK(nw.totalLiab)}`)}
    </div>
    <div class="grid g3" style="margin-top:16px">
      <div class="card s2"><div class="hd"><h3>Receitas × Despesas · 12 meses</h3><small>regime de competência</small></div><div class="bd"><div class="chart"><canvas id="c1"></canvas></div></div></div>
      <div class="card"><div class="hd"><h3>Despesas por categoria</h3><small>${ymLabel(P.ym)}</small></div><div class="bd"><div class="chart"><canvas id="c2"></canvas></div></div></div>
    </div>
    <div class="grid g3" style="margin-top:16px">
      <div class="card s2"><div class="hd"><h3>Fluxo de caixa projetado · 60 dias</h3><a href="#projetado" class="btn sm ghost">Detalhar →</a></div><div class="bd"><div class="chart sm"><canvas id="c3"></canvas></div></div></div>
      <div class="card"><div class="hd"><h3>Alertas</h3><a href="#alertas" class="btn sm ghost">Ver todos</a></div><div class="bd" style="display:flex;flex-direction:column;gap:8px;max-height:252px;overflow:auto">${al.length ? al.map(alertHTML).join('') : '<div class="mut">Nenhum alerta. Tudo em ordem ✓</div>'}</div></div>
    </div>
    <div class="grid g4" style="margin-top:16px">
      <div class="card s2"><div class="hd"><h3>Próximos vencimentos · 15 dias</h3></div><div class="bd p0 list">${due.length ? due.map(p => `<div class="it"><div class="grow"><div class="ell">${esc(p.desc)}</div><div class="hint">${fmtDate(p.due)} · ${p.k === 'R' ? 'a receber' : 'a pagar'}</div></div><b class="num ${p.k === 'R' ? 'pos' : ''}">${fmt(p.amount)}</b>${p.virtual ? `<button class="btn sm" data-act="payInv" data-card="${p.card.id}" data-ref="${p.inv.ref}">Pagar</button>` : `<button class="btn sm" data-act="payTx" data-id="${p.t.id}">Baixar</button>`}</div>`).join('') : '<div class="empty">Sem vencimentos nos próximos 15 dias</div>'}</div></div>
      <div class="card"><div class="hd"><h3>Contas</h3><a href="#bancos" class="btn sm ghost">→</a></div><div class="bd p0 list">${scopeAccounts().slice(0, 6).map((a, i) => `<div class="it">${avatar(a.bank || a.name, i)}<div class="grow ell">${esc(a.name)}<div class="hint">${ACC_TYPES[a.type] || ''}</div></div>${money(accBalance(a.id))}</div>`).join('') || '<div class="empty">Sem contas</div>'}</div></div>
      <div class="card"><div class="hd"><h3>Orçamento do mês</h3><a href="#orcamento" class="btn sm ghost">→</a></div><div class="bd">${bud.length ? bud.map(r => `<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px"><span>${esc(r.b.cat)}</span><span class="mut num">${pct(r.pct, 0)}</span></div>${bar(r.pct)}</div>`).join('') : '<div class="mut">Defina orçamentos por categoria para acompanhar aqui.</div>'}</div></div>
    </div>
    ${scopeCards().length ? `<div class="card" style="margin-top:16px"><div class="hd"><h3>Cartões de crédito</h3><a href="#cartoes" class="btn sm ghost">→</a></div><div class="bd p0"><table class="t"><thead><tr><th>Cartão</th><th>Fatura atual</th><th>Fecha</th><th>Vence</th><th class="n">Valor</th><th>Uso do limite</th></tr></thead><tbody>${scopeCards().map(c => { const ref = currentInvoiceRef(c); const inv = cardInvoices(c.id)[ref] || { total: 0 }; const u = cardUsed(c.id); const p = c.limit ? u / c.limit : 0; return `<tr><td><b>${esc(c.name)}</b></td><td>${ymLabel(ref)}</td><td>${fmtDate(invoiceClose(c, ref))}</td><td>${fmtDate(invoiceDue(c, ref))}</td><td class="n">${fmt(inv.total)}</td><td style="min-width:160px">${bar(p, p > .8 ? 'neg' : 'pos')}<div class="hint">${fmt(u)} de ${fmt(c.limit)}</div></td></tr>`; }).join('')}</tbody></table></div></div>` : ''}`;
  },
  after() {
    if (!accounts(true).length && !cards(true).length) return;
    const ms = []; for (let i = 11; i >= 0; i--) ms.push(addMonths(P.ym, -i));
    const cs = ms.map(m => compTotals(m));
    mkChart('c1', { type: 'bar', data: { labels: ms.map(ymLabel), datasets: [
      { label: 'Receitas', data: cs.map(c => r2(c.R)), backgroundColor: cssv('--pos'), borderRadius: 4, order: 2 },
      { label: 'Despesas', data: cs.map(c => r2(c.D)), backgroundColor: cssv('--neg'), borderRadius: 4, order: 2 },
      { label: 'Resultado', type: 'line', data: cs.map(c => r2(c.R - c.D)), borderColor: cssv('--acc'), backgroundColor: cssv('--acc'), tension: .3, pointRadius: 3, order: 1 }] }, options: { scales: { y: yMoney, x: noGrid } } });
    const cur = compTotals(P.ym); const ent = Object.entries(cur.byCat).filter(([k]) => (catInfo(k) || {}).type !== 'R').sort((a, b) => b[1] - a[1]);
    const top = ent.slice(0, 7); const rest = sum(ent.slice(7), x => x[1]); if (rest) top.push(['Outras', rest]);
    mkChart('c2', { type: 'doughnut', data: { labels: top.map(x => x[0]), datasets: [{ data: top.map(x => r2(x[1])), backgroundColor: top.map(x => catColor(x[0])), borderWidth: 0 }] }, options: { cutout: '65%', interaction: { mode: 'nearest' }, plugins: { legend: { position: 'right', labels: { boxWidth: 8, font: { size: 11 } } } } } });
    const pj = projectedDaily(60);
    mkChart('c3', { type: 'line', data: { labels: pj.series.map(s => fmtDate(s.d).slice(0, 5)), datasets: [{ label: 'Saldo projetado', data: pj.series.map(s => s.bal), borderColor: cssv('--acc'), backgroundColor: cssv('--acc2'), fill: true, tension: .2, pointRadius: 0, segment: { borderColor: c => c.p1.parsed.y < 0 ? cssv('--neg') : cssv('--acc') } }] }, options: { plugins: { legend: { display: false } }, scales: { y: yMoney, x: { grid: { display: false }, ticks: { maxTicksLimit: 10 } } } } });
  },
};
function onboarding() {
  return `<div class="card" style="max-width:860px;margin:30px auto"><div class="bd" style="padding:34px">
    <h2 style="margin:0 0 6px">Bem-vindo ao seu Gestor Financeiro & Patrimonial</h2>
    <p class="mut" style="margin:0 0 22px">Um sistema de gestão no padrão profissional: fluxo de caixa, DRE gerencial, contas a pagar e receber, cartões, patrimônio, projeções e indicadores — em um só lugar, acessível pelo navegador e compartilhável com sua família ou sócio.</p>
    <div class="grid g3">
      <div class="card"><div class="bd"><b>1. Cadastre suas contas</b><p class="hint">Bancos, contas digitais, investimentos e carteira, com saldo inicial.</p><button class="btn pri sm" data-act="newAcc">+ Conta bancária</button></div></div>
      <div class="card"><div class="bd"><b>2. Cadastre seus cartões</b><p class="hint">Limite, dia de fechamento e vencimento — as faturas são calculadas sozinhas.</p><button class="btn sm" data-act="newCard">+ Cartão de crédito</button></div></div>
      <div class="card"><div class="bd"><b>3. Escriture o dia a dia</b><p class="hint">Lance despesas e receitas, ou importe o extrato OFX/CSV do seu banco.</p><button class="btn sm" data-act="import">Importar extrato</button></div></div>
    </div>
    <div style="margin-top:22px;padding-top:18px;border-top:1px solid var(--line);display:flex;align-items:center;gap:12px"><div class="grow"><b>Quer ver o sistema funcionando primeiro?</b><div class="hint">Carregamos 6 meses de dados fictícios. Você remove tudo com um clique em Configurações → Dados.</div></div><button class="btn" id="demoBtn" onclick="loadDemo()">Carregar demonstração</button></div>
  </div></div>`;
}
const alertHTML = a => `<div class="alert ${a.sev}"><div class="ic">${a.sev === 'danger' ? '!' : a.sev === 'warning' ? '•' : 'i'}</div><div class="grow"><div style="font-weight:500">${esc(a.t)}</div><div class="hint">${esc(a.s)}</div></div>${a.go ? `<a class="btn sm ghost" href="#${a.go}">→</a>` : ''}</div>`;

// ---------- LANÇAMENTOS ----------
const LF = { q: '', type: '', status: '', src: '', cat: '', all: false };
VIEWS.lancamentos = {
  html() {
    return `<div class="toolbar">
      <input class="ctl" id="lfq" placeholder="Buscar descrição, fornecedor, centro de custo…" style="width:280px" value="${esc(LF.q)}">
      <select class="ctl" id="lft">${optsHTML([['', 'Todos os tipos'], ['R', 'Receitas'], ['D', 'Despesas'], ['T', 'Transferências']], LF.type)}</select>
      <select class="ctl" id="lfs">${optsHTML([['', 'Qualquer situação'], ['pago', 'Efetivados'], ['pendente', 'Pendentes']], LF.status)}</select>
      <select class="ctl" id="lfa">${optsHTML([['', 'Todas as contas/cartões'], ...accounts().map(a => ['acc:' + a.id, '🏦 ' + a.name]), ...cards().map(c => ['card:' + c.id, '💳 ' + c.name])], LF.src)}</select>
      <select class="ctl" id="lfc">${optsHTML([['', 'Todas as categorias'], ...cfg().categories.map(c => c.name)], LF.cat)}</select>
      <label class="mut" style="display:flex;gap:6px;align-items:center"><input type="checkbox" id="lfall" ${LF.all ? 'checked' : ''}> todos os meses</label>
      <div class="sp"></div><button class="btn" data-act="import">Importar OFX/CSV</button><button class="btn" id="expCsv">Exportar CSV</button></div>
    <div class="card"><div class="bd p0" id="ltab"></div></div>`;
  },
  after() {
    const upd = () => { LF.q = $('#lfq').value; LF.type = $('#lft').value; LF.status = $('#lfs').value; LF.src = $('#lfa').value; LF.cat = $('#lfc').value; LF.all = $('#lfall').checked; $('#ltab').innerHTML = txTable(); };
    ['#lft', '#lfs', '#lfa', '#lfc', '#lfall'].forEach(s => $(s).onchange = upd); $('#lfq').oninput = upd;
    $('#expCsv').onclick = () => saveFile(`lancamentos_${todayStr()}.csv`, '﻿' + txCSV(), 'text/csv');
    $('#ltab').innerHTML = txTable();
  },
};
function txTable() {
  const q = LF.q.toLowerCase();
  let list = txs().filter(t => txInScope(t) && (LF.all || ymOf(t.date) === P.ym || (t.status === 'pago' && ymOf(t.paidDate) === P.ym && !t.card)));
  if (LF.type) list = list.filter(t => t.type === LF.type);
  if (LF.status) list = list.filter(t => t.card ? LF.status === 'pago' : t.status === LF.status);
  if (LF.src) { const [k, id] = LF.src.split(':'); list = list.filter(t => k === 'card' ? t.card === id : (t.account === id || t.toAccount === id) && !t.card); }
  if (LF.cat) list = list.filter(t => t.cat === LF.cat);
  if (q) list = list.filter(t => [t.desc, t.party, t.cc, t.cat, t.sub, t.notes].join(' ').toLowerCase().includes(q));
  list.sort((a, b) => (b.date + b.createdAt).localeCompare(a.date + a.createdAt));
  const R = sum(list.filter(t => t.type === 'R' && isOperational(t)), t => t.amount), D = sum(list.filter(t => t.type === 'D' && isOperational(t)), t => t.amount);
  if (!list.length) return empty('Nenhum lançamento encontrado para os filtros.', `<button class="btn pri" data-act="newTx">+ Novo lançamento</button>`);
  const shown = list.slice(0, 600);
  return `<div class="tw"><table class="t"><thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th>Conta / cartão</th><th>Situação</th><th class="n">Valor</th><th></th></tr></thead><tbody>
    ${shown.map(t => `<tr><td class="num">${fmtDate(t.date)}${t.status === 'pendente' ? `<div class="hint">venc. ${fmtDate(t.due || t.date)}</div>` : ''}</td>
      <td><div>${esc(t.desc)}</div><div class="hint">${[t.party, t.cc].filter(Boolean).map(esc).join(' · ')}</div></td>
      <td>${t.type === 'T' ? chip('Transferência', 'acc') : `<span class="dot" style="background:${catColor(t.cat)}"></span> ${esc(t.cat || '—')}${t.sub ? `<div class="hint">${esc(t.sub)}</div>` : ''}`}</td>
      <td>${t.card ? `💳 ${esc(cardName(t.card))}<div class="hint">fatura ${ymLabel(t.invoice || '')}</div>` : t.type === 'T' ? `${esc(accName(t.account))} → ${esc(accName(t.toAccount))}` : '🏦 ' + esc(accName(t.account))}</td>
      <td>${t.card ? chip('No cartão', 'info') : statusChip(t)}</td>
      <td class="n"><b class="${t.type === 'R' ? 'pos' : t.type === 'D' ? 'neg' : ''}">${t.type === 'D' ? '−' : t.type === 'R' ? '+' : ''}${fmt(t.amount)}</b></td>
      <td class="act">${t.status === 'pendente' && !t.card ? `<button class="btn sm" data-act="payTx" data-id="${t.id}">Baixar</button>` : ''}${t.kind === 'fatura' ? '' : `<button class="btn sm ghost" data-act="editTx" data-id="${t.id}">Editar</button>`}<button class="btn sm ghost danger" data-act="delTx" data-id="${t.id}">✕</button></td></tr>`).join('')}
    </tbody><tfoot><tr class="tot"><td colspan="5">${list.length} lançamento(s)${list.length > 600 ? ' · exibindo 600' : ''} · Receitas <span class="pos">${fmt(R)}</span> · Despesas <span class="neg">${fmt(D)}</span></td><td class="n">${money(R - D, true)}</td><td></td></tr></tfoot></table></div>`;
}

// ---------- CONTAS A PAGAR / RECEBER ----------
function payView(type) {
  const td = todayStr(); const items = payables(type, UI.payH);
  const over = items.filter(p => p.due < td), wk = items.filter(p => p.due >= td && p.due <= addDays(td, 7)), m30 = items.filter(p => p.due <= addDays(td, 30));
  const sec = (title, arr) => arr.length ? `<tr class="grp"><td colspan="6">${title} · ${fmt(sum(arr, p => p.amount))}</td></tr>` + arr.map(p => {
    const dd = diffDays(td, p.due);
    return `<tr><td class="num">${fmtDate(p.due)}</td><td>${esc(p.desc)}${p.virtual ? `<div class="hint">${p.status === 'aberta' ? 'fatura em aberto (parcial)' : 'fatura fechada'}</div>` : `<div class="hint">${esc(p.t.party || '')}</div>`}</td>
    <td>${p.virtual ? chip('Cartão', 'info') : esc(p.t.cat || '')}</td><td>${p.virtual ? esc(p.card.name) : esc(accName(p.t.account))}</td>
    <td>${dd < 0 ? chip(`${-dd}d em atraso`, 'neg') : dd === 0 ? chip('hoje', 'warn') : dd <= 7 ? chip(`em ${dd}d`, 'warn') : chip(`em ${dd}d`)}</td>
    <td class="n"><b>${fmt(p.amount)}</b></td><td class="act">${p.virtual ? `<button class="btn sm pri" data-act="payInv" data-card="${p.card.id}" data-ref="${p.inv.ref}">Pagar fatura</button>` : `<button class="btn sm pri" data-act="payTx" data-id="${p.t.id}">${type === 'R' ? 'Receber' : 'Pagar'}</button><button class="btn sm ghost" data-act="editTx" data-id="${p.t.id}">Editar</button>`}</td></tr>`;
  }).join('') : '';
  const rest = items.filter(p => p.due > addDays(td, 7));
  return `<div class="grid g4">${kpi(type === 'R' ? 'Atrasados' : 'Vencidas', fmt(sum(over, p => p.amount)), `${over.length} título(s)`, over.length ? 'neg' : '')}${kpi('Próximos 7 dias', fmt(sum(wk, p => p.amount)), `${wk.length} título(s)`)}${kpi('Próximos 30 dias', fmt(sum(m30, p => p.amount)), `${m30.length} título(s)`)}${kpi(`Total em ${UI.payH} dias`, fmt(sum(items, p => p.amount)), `${items.length} título(s)`, type === 'R' ? 'pos' : '')}</div>
  <div class="toolbar" style="margin-top:16px"><select class="ctl" onchange="UI.payH=+this.value;render()">${optsHTML([[30, 'Horizonte: 30 dias'], [60, '60 dias'], [90, '90 dias'], [180, '180 dias'], [365, '12 meses']], UI.payH)}</select><div class="sp"></div><button class="btn pri" data-act="newTx" data-type="${type}" data-status="pendente">+ Nova conta a ${type === 'R' ? 'receber' : 'pagar'}</button></div>
  <div class="card"><div class="bd p0">${items.length ? `<div class="tw"><table class="t"><thead><tr><th>Vencimento</th><th>Descrição</th><th>Categoria</th><th>Conta</th><th>Prazo</th><th class="n">Valor</th><th></th></tr></thead><tbody>${sec(type === 'R' ? 'Em atraso' : 'Vencidas', over)}${sec('Próximos 7 dias', wk)}${sec('Demais', rest)}</tbody></table></div>` : empty(`Nenhuma conta a ${type === 'R' ? 'receber' : 'pagar'} no período.`)}</div></div>`;
}
VIEWS.pagar = { html: () => payView('D') };
VIEWS.receber = { html: () => payView('R') };

// ---------- CARTÕES ----------
VIEWS.cartoes = {
  html() {
    const cs = scopeCards();
    if (!cs.length) return `<div class="card">${empty('Nenhum cartão cadastrado.', '<button class="btn pri" data-act="newCard">+ Cadastrar cartão</button>')}</div>`;
    if (!UI.card || !S.cards.has(UI.card)) UI.card = cs[0].id;
    const c = S.cards.get(UI.card); const invs = cardInvoices(c.id); const curRef = currentInvoiceRef(c);
    const ref = UI.ref || curRef; const inv = invs[ref] || { total: 0, paid: 0, open: 0, items: [], payments: [], due: invoiceDue(c, ref), close: invoiceClose(c, ref), status: 'zerada' };
    const refs = []; for (let i = -6; i <= 6; i++) refs.push(addMonths(curRef, i));
    const stc = { aberta: 'acc', fechada: 'warn', vencida: 'neg', paga: 'pos', zerada: '' };
    return `<div class="toolbar"><div class="sp"></div><button class="btn" data-act="import">Importar fatura CSV</button><button class="btn pri" data-act="newCard">+ Cartão</button></div>
    <div class="grid g4">${cs.map(k => { const u = cardUsed(k.id); return `<div class="ccard" data-act="selCard" data-id="${k.id}" style="cursor:pointer;background:linear-gradient(135deg,${k.color || '#334155'},#0b1220);${k.id === c.id ? 'outline:3px solid var(--acc);outline-offset:2px' : ''}"><div style="display:flex;justify-content:space-between"><span class="nm">${esc(k.name)}</span><span style="opacity:.8;font-size:12px">${esc(k.brand || '')}</span></div><div><div style="opacity:.75;font-size:11.5px">Disponível</div><div class="lim">${fmt((+k.limit || 0) - u)}</div><div style="opacity:.75;font-size:11.5px;margin-top:4px">Usado ${fmt(u)} de ${fmt(k.limit)} · fecha dia ${k.closeDay}, vence dia ${k.dueDay}</div></div></div>`; }).join('')}</div>
    <div class="grid g3" style="margin-top:16px">
      <div class="card s2"><div class="hd"><h3>Fatura ${esc(c.name)}</h3><select class="ctl" onchange="UI.ref=this.value;render()">${optsHTML(refs.map(r => [r, `${ymLong(r)}${r === curRef ? ' (atual)' : ''}`]), ref)}</select><button class="btn sm ghost" data-act="editCard" data-id="${c.id}">Editar cartão</button></div>
        <div class="bd" style="display:flex;gap:28px;flex-wrap:wrap;border-bottom:1px solid var(--line2)"><div><div class="hint">Situação</div>${chip(inv.status, stc[inv.status])}</div><div><div class="hint">Fechamento</div><b>${fmtDate(inv.close)}</b></div><div><div class="hint">Vencimento</div><b>${fmtDate(inv.due)}</b></div><div><div class="hint">Total</div><b class="num">${fmt(inv.total)}</b></div><div><div class="hint">Pago</div><b class="num pos">${fmt(inv.paid)}</b></div><div><div class="hint">Em aberto</div><b class="num neg">${fmt(inv.open)}</b></div>
          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">${inv.open > 0 ? `<button class="btn pri" data-act="payInv" data-card="${c.id}" data-ref="${ref}">Pagar fatura</button>` : ''}<button class="btn" onclick="txForm({}, {type:'D', src:'card:${c.id}'})">+ Compra</button></div></div>
        <div class="bd p0"><div class="tw" style="max-height:420px">${inv.items.length ? `<table class="t"><thead><tr><th>Data</th><th>Descrição</th><th>Categoria</th><th class="n">Valor</th><th></th></tr></thead><tbody>${inv.items.sort((a, b) => a.date.localeCompare(b.date)).map(t => `<tr><td class="num">${fmtDate(t.date)}</td><td>${esc(t.desc)}</td><td>${esc(t.cat || '')}</td><td class="n ${t.type === 'R' ? 'pos' : ''}">${t.type === 'R' ? '−' : ''}${fmt(t.amount)}</td><td class="act"><button class="btn sm ghost" data-act="editTx" data-id="${t.id}">Editar</button><button class="btn sm ghost danger" data-act="delTx" data-id="${t.id}">✕</button></td></tr>`).join('')}${inv.payments.map(t => `<tr><td class="num">${fmtDate(t.paidDate)}</td><td colspan="2" class="pos">Pagamento recebido · ${esc(accName(t.account))}</td><td class="n pos">${fmt(t.amount)}</td><td class="act"><button class="btn sm ghost danger" data-act="delTx" data-id="${t.id}">✕</button></td></tr>`).join('')}</tbody></table>` : empty('Nenhuma compra nesta fatura.')}</div></div></div>
      <div class="card"><div class="hd"><h3>Faturas por mês</h3></div><div class="bd"><div class="chart"><canvas id="cc1"></canvas></div><div class="hint" style="margin-top:8px">Inclui parcelas futuras já contratadas — o limite comprometido é a soma das faturas em aberto.</div></div></div>
    </div>`;
  },
  after() {
    const c = S.cards.get(UI.card); if (!c) return; const invs = cardInvoices(c.id); const cur = currentInvoiceRef(c);
    const refs = []; for (let i = -5; i <= 6; i++) refs.push(addMonths(cur, i));
    mkChart('cc1', { type: 'bar', data: { labels: refs.map(ymLabel), datasets: [{ label: 'Fatura', data: refs.map(r => r2((invs[r] || {}).total || 0)), backgroundColor: refs.map(r => r < cur ? cssv('--faint') : r === cur ? cssv('--acc') : cssv('--warn')), borderRadius: 4 }] }, options: { plugins: { legend: { display: false } }, scales: { y: yMoney, x: noGrid } } });
  },
};
function cardForm(c = {}) {
  openForm({
    title: c.id ? 'Editar cartão' : 'Novo cartão de crédito', data: Object.assign({ closeDay: 1, dueDay: 10, color: '#6d28d9', entity: cfg().entities[0], limit: '' }, c, { limit: c.limit ? String(c.limit).replace('.', ',') : '' }),
    fields: [
      { k: 'name', label: 'Nome do cartão', w: 4, req: true, ph: 'Ex.: Nubank Ultravioleta' },
      { k: 'brand', label: 'Bandeira', type: 'select', w: 2, options: ['Visa', 'Mastercard', 'Elo', 'Amex', 'Hipercard', 'Outra'] },
      { k: 'limit', label: 'Limite total (R$)', type: 'money', w: 2, req: true },
      { k: 'closeDay', label: 'Dia de fechamento', type: 'number', w: 2, req: true },
      { k: 'dueDay', label: 'Dia de vencimento', type: 'number', w: 2, req: true },
      { k: 'payAccount', label: 'Conta para débito da fatura', type: 'select', w: 3, options: [['', '—'], ...accounts().map(a => [a.id, a.name])] },
      { k: 'entity', label: 'Entidade', type: 'select', w: 2, options: cfg().entities },
      { k: 'color', label: 'Cor', type: 'color', w: 1 },
    ],
    onDelete: c.id ? async () => { const n = txs().filter(t => t.card === c.id).length; if (n) { if (await confirmBox('Arquivar cartão', `O cartão tem ${n} lançamento(s). Ele será arquivado (histórico preservado).`, 'Arquivar')) { await Store.put('cards', Object.assign({}, c, { archived: true })); closeModal(); } } else if (await confirmBox('Excluir cartão', 'Excluir este cartão?', 'Excluir', 'danger')) { await Store.del('cards', c.id); } } : null,
    async onSave(d) {
      const o = Object.assign({}, c, d, { limit: r2(parseNum(d.limit)), closeDay: Math.min(31, Math.max(1, +d.closeDay)), dueDay: Math.min(31, Math.max(1, +d.dueDay)) });
      await Store.put('cards', o); UI.card = o.id; toast('Cartão salvo');
    },
  });
}

// ---------- BANCOS ----------
VIEWS.bancos = {
  html() {
    const accs = scopeAccounts(); const byType = {};
    accs.forEach(a => byType[a.type] = (byType[a.type] || 0) + accBalance(a.id));
    return `<div class="grid g4">${kpi('Saldo consolidado', fmt(totalBalance(accs)), `${accs.length} conta(s) ativas`)}${Object.entries(byType).slice(0, 3).map(([k, v]) => kpi(ACC_TYPES[k] || k, fmt(v), '', v < 0 ? 'neg' : '')).join('')}</div>
    <div class="toolbar" style="margin-top:16px"><div class="sp"></div><button class="btn" data-act="import">Importar extrato OFX/CSV</button><button class="btn" data-act="newTx" data-type="T">Transferência</button><button class="btn pri" data-act="newAcc">+ Conta</button></div>
    <div class="grid g3"><div class="card s2"><div class="bd p0">${accs.length ? `<table class="t"><thead><tr><th>Conta</th><th>Tipo</th><th>Entidade</th><th class="n">Saldo atual</th><th class="n">Previsto fim do mês</th><th></th></tr></thead><tbody>${accs.map((a, i) => {
      const end = dateIn(ymOf(todayStr()), 31); const pend = sum(txs().filter(t => t.status === 'pendente' && !t.card && (t.due || t.date) <= end), t => t.type === 'R' && t.account === a.id ? +t.amount : t.type === 'D' && t.account === a.id ? -t.amount : t.type === 'T' ? (t.toAccount === a.id ? +t.amount : t.account === a.id ? -t.amount : 0) : 0);
      return `<tr><td><div style="display:flex;gap:10px;align-items:center">${avatar(a.bank || a.name, i)}<div><b>${esc(a.name)}</b><div class="hint">${esc(a.bank || '')} ${a.agency ? '· ag. ' + esc(a.agency) : ''}</div></div></div></td><td>${ACC_TYPES[a.type] || ''}</td><td>${esc(a.entity || 'Pessoal')}</td><td class="n">${money(accBalance(a.id))}</td><td class="n mut">${fmt(accBalance(a.id) + pend)}</td>
      <td class="act"><button class="btn sm" data-act="stmt" data-id="${a.id}">Extrato</button><button class="btn sm ghost" data-act="adjust" data-id="${a.id}">Conciliar</button><button class="btn sm ghost" data-act="editAcc" data-id="${a.id}">Editar</button></td></tr>`;
    }).join('')}<tr class="tot"><td colspan="3">Total</td><td class="n">${fmt(totalBalance(accs))}</td><td></td><td></td></tr></tbody></table>` : empty('Nenhuma conta cadastrada.', '<button class="btn pri" data-act="newAcc">+ Conta bancária</button>')}</div></div>
    <div class="card"><div class="hd"><h3>Evolução do saldo consolidado</h3></div><div class="bd"><div class="chart"><canvas id="b1"></canvas></div></div></div></div>`;
  },
  after() {
    const ms = []; for (let i = 11; i >= 0; i--) ms.push(addMonths(ymOf(todayStr()), -i));
    mkChart('b1', { type: 'line', data: { labels: ms.map(ymLabel), datasets: [{ label: 'Saldo fim do mês', data: ms.map(m => totalBalance(scopeAccounts(), dateIn(m, 31))), borderColor: cssv('--acc'), backgroundColor: cssv('--acc2'), fill: true, tension: .3 }] }, options: { plugins: { legend: { display: false } }, scales: { y: yMoney, x: noGrid } } });
  },
};
function accForm(a = {}) {
  openForm({
    title: a.id ? 'Editar conta' : 'Nova conta', data: Object.assign({ type: 'corrente', entity: cfg().entities[0], openingDate: todayStr() }, a, { opening: a.opening != null ? String(a.opening).replace('.', ',') : '' }),
    fields: [
      { k: 'name', label: 'Nome da conta', w: 4, req: true, ph: 'Ex.: Itaú Corrente' },
      { k: 'type', label: 'Tipo', type: 'select', w: 2, options: Object.entries(ACC_TYPES) },
      { k: 'bank', label: 'Instituição', w: 2, list: ['Itaú', 'Bradesco', 'Banco do Brasil', 'Caixa', 'Santander', 'Nubank', 'Inter', 'C6 Bank', 'BTG Pactual', 'XP', 'Sicoob', 'Sicredi', 'Mercado Pago', 'PicPay'] },
      { k: 'agency', label: 'Agência / conta', w: 2, ph: 'opcional' },
      { k: 'entity', label: 'Entidade', type: 'select', w: 2, options: cfg().entities, hint: 'Pessoal, família, empresa…' },
      { k: 'opening', label: 'Saldo inicial (R$)', type: 'money', w: 3, hint: 'Saldo na data de início do controle' },
      { k: 'openingDate', label: 'Data do saldo inicial', type: 'date', w: 3 },
    ],
    onDelete: a.id ? async () => { const n = txs().filter(t => t.account === a.id || t.toAccount === a.id).length; if (n) { if (await confirmBox('Arquivar conta', `A conta tem ${n} lançamento(s); será arquivada e sairá dos saldos.`, 'Arquivar')) await Store.put('accounts', Object.assign({}, a, { archived: true })); } else if (await confirmBox('Excluir conta', 'Excluir esta conta?', 'Excluir', 'danger')) await Store.del('accounts', a.id); } : null,
    async onSave(d) { await Store.put('accounts', Object.assign({}, a, d, { opening: r2(parseNum(d.opening)) })); toast('Conta salva'); },
  });
}
function statementModal(id) {
  const a = S.accounts.get(id); const ym = P.ym; const start = dateIn(ym, 1);
  const prev = accBalance(id, addDays(start, -1));
  const list = txs().filter(t => t.status === 'pago' && !t.card && (t.account === id || t.toAccount === id) && ymOf(t.paidDate || t.date) === ym).sort((x, y) => (x.paidDate || x.date).localeCompare(y.paidDate || y.date));
  let run = prev;
  const rows = list.map(t => { const v = t.type === 'R' ? +t.amount : t.type === 'D' ? -t.amount : (t.toAccount === id ? +t.amount : -t.amount); run += v; return `<tr><td class="num">${fmtDate(t.paidDate || t.date)}</td><td>${esc(t.desc)}<div class="hint">${esc(t.cat || '')}</div></td><td class="n ${v < 0 ? 'neg' : 'pos'}">${fmt(v)}</td><td class="n">${fmt(run)}</td></tr>`; }).join('');
  modal(`<div class="mdl wide"><div class="mh"><h2>Extrato · ${esc(a.name)} · ${ymLong(ym)}</h2><button class="btn ghost ib" onclick="closeModal()">✕</button></div><div class="mb" style="padding:0"><div class="tw" style="max-height:520px"><table class="t"><thead><tr><th>Data</th><th>Histórico</th><th class="n">Valor</th><th class="n">Saldo</th></tr></thead><tbody><tr class="sub"><td></td><td>Saldo anterior</td><td></td><td class="n">${fmt(prev)}</td></tr>${rows}<tr class="tot"><td></td><td>Saldo final</td><td></td><td class="n">${fmt(run)}</td></tr></tbody></table></div></div></div>`);
}
function adjustForm(id) {
  const a = S.accounts.get(id); const cur = accBalance(id);
  openForm({
    title: `Conciliar saldo · ${a.name}`, okLabel: 'Conciliar', data: { real: String(cur).replace('.', ','), date: todayStr() },
    fields: [
      { k: 'html', type: 'html', html: `<div class="hint">Saldo no sistema: <b>${fmt(cur)}</b>. Informe o saldo real que aparece no app do banco. A diferença será lançada como "Ajuste de saldo" (fora da DRE).</div>` },
      { k: 'real', label: 'Saldo real no banco (R$)', type: 'money', w: 3, req: true },
      { k: 'date', label: 'Data', type: 'date', w: 3 },
    ],
    async onSave(d) {
      const diff = r2(parseNum(d.real) - cur); if (Math.abs(diff) < 0.01) { toast('Saldo já conferido ✓'); return; }
      await Store.put('tx', { type: diff > 0 ? 'R' : 'D', amount: Math.abs(diff), account: id, date: d.date, paidDate: d.date, status: 'pago', cat: 'Ajuste de saldo', desc: 'Ajuste de conciliação bancária' });
      toast(`Ajuste de ${fmt(diff)} lançado`);
    },
  });
}

// ---------- IMPORTAÇÃO ----------
function importModal() {
  if (!accounts().length && !cards().length) { toast('Cadastre uma conta ou cartão antes.'); return; }
  modal(`<div class="mdl wide"><div class="mh"><h2>Importar extrato (OFX / CSV)</h2><button class="btn ghost ib" onclick="closeModal()">✕</button></div><div class="mb">
    <div class="fg"><div class="f w3"><label>Destino</label><select class="ctl" id="imTarget">${optsHTML([...accounts().map(a => ['acc:' + a.id, '🏦 ' + a.name]), ...cards().map(c => ['card:' + c.id, '💳 ' + c.name + ' (fatura CSV)'])])}</select></div>
    <div class="f w3"><label>Arquivo</label><input type="file" class="ctl" id="imFile" accept=".ofx,.csv,.txt" style="padding-top:6px"></div>
    <div class="f"><label style="display:flex;gap:6px;align-items:center;color:var(--text)"><input type="checkbox" id="imInv"> Inverter sinais (use se as despesas vierem positivas)</label><div class="hint">OFX: exportado pelo internet banking (Itaú, BB, Bradesco, Santander, Inter…). CSV: colunas data; descrição; valor — também serve para respostas de Google Forms exportadas do Planilhas.</div></div></div>
    <div id="imPrev" style="margin-top:14px"></div></div><div class="mf"><button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" id="imGo" disabled>Importar selecionados</button></div></div>`);
  let rows = [];
  const build = async () => {
    const f = $('#imFile').files[0]; if (!f) return; const txt = await f.text();
    const target = $('#imTarget').value; const isCard = target.startsWith('card:'); const inv = $('#imInv').checked;
    let parsed = /<OFX>|<STMTTRN>/i.test(txt) ? parseOFX(txt) : parseCSV(txt);
    const sign = (isCard && !/<STMTTRN>/i.test(txt) ? -1 : 1) * (inv ? -1 : 1); // faturas CSV: positivo = compra
    parsed = parsed.map(p => ({ ...p, amount: sign * p.amount }));
    const id = target.split(':')[1];
    rows = parsed.filter(p => p.amount).map(p => {
      const type = p.amount < 0 ? 'D' : 'R'; const g = learnCategory(p.desc);
      const dup = txs().some(t => (p.fitid && t.fitid === p.fitid) || (t.date === p.date && Math.abs(+t.amount - Math.abs(p.amount)) < 0.01 && (isCard ? t.card === id : t.account === id)));
      return { ...p, type, amount: Math.abs(p.amount), cat: g && catInfo(g.cat)?.type === type ? g.cat : (type === 'R' ? 'Outras receitas' : 'Outras despesas'), sub: g ? g.sub : '', dup, sel: !dup };
    });
    $('#imPrev').innerHTML = rows.length ? `<div class="hint" style="margin-bottom:8px">${rows.length} lançamento(s) encontrados · ${rows.filter(r => r.dup).length} possível(is) duplicado(s) desmarcado(s). Categorias sugeridas pelo seu histórico.</div><div class="tw" style="max-height:360px;border:1px solid var(--line);border-radius:8px"><table class="t"><thead><tr><th><input type="checkbox" id="imAll" checked></th><th>Data</th><th>Descrição</th><th>Categoria</th><th class="n">Valor</th></tr></thead><tbody>${rows.map((r, i) => `<tr><td><input type="checkbox" data-i="${i}" ${r.sel ? 'checked' : ''}></td><td class="num">${fmtDate(r.date)}</td><td>${esc(r.desc)} ${r.dup ? chip('duplicado?', 'warn') : ''}</td><td><select class="ctl" data-c="${i}" style="height:28px">${optsHTML(catsOf(r.type).map(c => c.name), r.cat)}</select></td><td class="n ${r.type === 'R' ? 'pos' : 'neg'}">${r.type === 'D' ? '−' : '+'}${fmt(r.amount)}</td></tr>`).join('')}</tbody></table></div>` : '<div class="mut">Nenhum lançamento reconhecido no arquivo.</div>';
    $$('#imPrev [data-i]').forEach(c => c.onchange = () => rows[+c.dataset.i].sel = c.checked);
    $$('#imPrev [data-c]').forEach(c => c.onchange = () => { rows[+c.dataset.c].cat = c.value; rows[+c.dataset.c].sub = ''; });
    const all = $('#imAll'); if (all) all.onchange = () => { rows.forEach(r => r.sel = all.checked); $$('#imPrev [data-i]').forEach(c => c.checked = all.checked); };
    $('#imGo').disabled = !rows.length;
  };
  $('#imFile').onchange = build; $('#imTarget').onchange = build; $('#imInv').onchange = build;
  $('#imGo').onclick = async () => {
    if (!roCheck()) return; const target = $('#imTarget').value; const [k, id] = target.split(':'); const sel = rows.filter(r => r.sel);
    const card = k === 'card' ? S.cards.get(id) : null;
    const out = sel.map(r => k === 'card' ? { type: r.type, desc: r.desc, amount: r2(r.amount), date: r.date, card: id, account: '', invoice: invoiceRefFor(card, r.date), status: 'pago', cat: r.cat, sub: r.sub, fitid: r.fitid || '', imported: true }
      : { type: r.type, desc: r.desc, amount: r2(r.amount), date: r.date, paidDate: r.date, due: r.date, account: id, card: '', status: 'pago', cat: r.cat, sub: r.sub, fitid: r.fitid || '', imported: true });
    $('#imGo').disabled = true; $('#imGo').textContent = 'Importando…';
    try { await Store.putMany('tx', out); closeModal(); toast(`${out.length} lançamento(s) importados`); } catch (e) { $('#imGo').disabled = false; $('#imGo').textContent = 'Importar selecionados'; }
  };
}

// ---------- FLUXO DE CAIXA (realizado) ----------
VIEWS.fluxo = {
  html() {
    const y = P.ym.slice(0, 4); const ms = Array.from({ length: 12 }, (_, i) => `${y}-${pad(i + 1)}`);
    const data = ms.map(m => cashMonth(m)); const keys = { in: new Set(), out: new Set() };
    data.forEach(d => Object.keys(d.byCat).forEach(k => { const [t, c] = k.split('|'); keys[t].add(c); }));
    const open = ms.map(m => totalBalance(scopeAccounts(), addDays(dateIn(m, 1), -1)));
    const row = (lbl, vals, cls = '') => `<tr class="${cls}"><td>${lbl}</td>${vals.map(v => `<td class="n">${Math.abs(v) < 0.005 ? '<span class="fnt">—</span>' : fmt(v)}</td>`).join('')}</tr>`;
    const catRows = t => [...keys[t]].sort().map(c => row('&nbsp;&nbsp;&nbsp;' + esc(c), [...data.map(d => d.byCat[t + '|' + c] || 0), sum(data, d => d.byCat[t + '|' + c] || 0)])).join('');
    const totIn = sum(data, d => d.in), totOut = sum(data, d => d.out);
    return `<div class="grid g4">${kpi('Entradas no ano', fmt(totIn), 'regime de caixa (efetivado)', 'pos')}${kpi('Saídas no ano', fmt(totOut), 'inclui pagamento de faturas', 'neg')}${kpi('Geração de caixa', fmt(totIn - totOut), '', totIn - totOut < 0 ? 'neg' : 'pos')}${kpi('Saldo atual', fmt(totalBalance()), '')}</div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Entradas, saídas e saldo · ${y}</h3></div><div class="bd"><div class="chart"><canvas id="f1"></canvas></div></div></div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Demonstrativo de fluxo de caixa · ${y}</h3><small>Mude o ano pelo seletor de mês no topo</small></div><div class="bd p0"><div class="tw"><table class="t"><thead><tr><th>Conta</th>${ms.map(m => `<th class="n">${ymLabel(m)}</th>`).join('')}<th class="n">Total</th></tr></thead><tbody>
      ${row('Saldo inicial', [...open, open[0]], 'sub')}
      <tr class="grp"><td colspan="14">Entradas</td></tr>${catRows('in')}${row('Total de entradas', [...data.map(d => d.in), totIn], 'sub pos')}
      <tr class="grp"><td colspan="14">Saídas</td></tr>${catRows('out')}${row('Total de saídas', [...data.map(d => d.out), totOut], 'sub')}
      ${row('Geração de caixa do mês', [...data.map(d => d.net), totIn - totOut], 'tot')}
      ${row('Saldo final', [...data.map((d, i) => open[i] + d.net), open[0] + totIn - totOut], 'tot')}
    </tbody></table></div></div></div>`;
  },
  after() {
    const y = P.ym.slice(0, 4); const ms = Array.from({ length: 12 }, (_, i) => `${y}-${pad(i + 1)}`); const data = ms.map(m => cashMonth(m));
    mkChart('f1', { type: 'bar', data: { labels: ms.map(ymLabel), datasets: [{ label: 'Entradas', data: data.map(d => r2(d.in)), backgroundColor: cssv('--pos'), borderRadius: 4, order: 2 }, { label: 'Saídas', data: data.map(d => -r2(d.out)), backgroundColor: cssv('--neg'), borderRadius: 4, order: 2 }, { type: 'line', label: 'Saldo final', data: ms.map(m => totalBalance(scopeAccounts(), dateIn(m, 31))), borderColor: cssv('--acc'), tension: .3, order: 1, yAxisID: 'y' }] }, options: { scales: { x: { stacked: true, grid: { display: false } }, y: Object.assign({ stacked: false }, yMoney) } } });
  },
};

// ---------- FLUXO PROJETADO ----------
VIEWS.projetado = {
  html() {
    const pj = projectedDaily(UI.horizon, { variable: UI.variable });
    const ins = sum(pj.series, s => sum(s.events.filter(e => e.v > 0), e => e.v)), outs = sum(pj.series, s => sum(s.events.filter(e => e.v < 0), e => -e.v));
    const last = pj.series[pj.series.length - 1].bal;
    const evRows = pj.series.filter(s => s.events.length).map(s => s.events.map((e, i) => `<tr><td class="num">${i ? '' : fmtDate(s.d)}</td><td>${esc(e.lbl)}</td><td class="n ${e.v < 0 ? 'neg' : 'pos'}">${fmt(e.v)}</td><td class="n">${i === s.events.length - 1 ? money(s.bal) : ''}</td></tr>`).join('')).join('');
    return `<div class="toolbar"><select class="ctl" onchange="UI.horizon=+this.value;render()">${optsHTML([[30, '30 dias'], [60, '60 dias'], [90, '90 dias'], [180, '180 dias'], [365, '12 meses']], UI.horizon)}</select>
      <label class="mut" style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${UI.variable ? 'checked' : ''} onchange="UI.variable=this.checked;render()"> Incluir estimativa de gastos variáveis (média 3 meses: ${fmt((avgComp(3).groups.desp_var || 0))}/mês)</label></div>
    <div class="grid g5">${kpi('Saldo atual', fmt(pj.start))}${kpi('Entradas previstas', fmt(ins), 'contas a receber', 'pos')}${kpi('Saídas previstas', fmt(outs + pj.varDaily * UI.horizon), 'contas a pagar + faturas' + (UI.variable ? ' + variáveis' : ''), 'neg')}${kpi('Saldo projetado final', fmt(last), fmtDate(addDays(todayStr(), UI.horizon)), last < 0 ? 'neg' : '')}${kpi('Saldo mínimo', fmt(pj.min.v), `em ${fmtDate(pj.min.d)}`, pj.min.v < 0 ? 'neg' : 'warn')}</div>
    ${pj.firstNeg ? `<div class="alert danger" style="margin-top:16px"><div class="ic">!</div><div><b>Atenção: o caixa fica negativo em ${fmtDate(pj.firstNeg)}.</b><div class="hint">Antecipe recebimentos, renegocie vencimentos ou transfira recursos de investimentos antes desta data.</div></div></div>` : ''}
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Saldo diário projetado</h3></div><div class="bd"><div class="chart lg"><canvas id="p1"></canvas></div></div></div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Agenda financeira</h3></div><div class="bd p0"><div class="tw">${evRows ? `<table class="t"><thead><tr><th>Data</th><th>Evento</th><th class="n">Valor</th><th class="n">Saldo</th></tr></thead><tbody>${evRows}</tbody></table>` : empty('Nenhum evento futuro. Lance contas a pagar/receber para projetar.')}</div></div></div>`;
  },
  after() {
    const pj = projectedDaily(UI.horizon, { variable: UI.variable });
    mkChart('p1', { type: 'line', data: { labels: pj.series.map(s => fmtDate(s.d).slice(0, 5)), datasets: [{ label: 'Saldo', data: pj.series.map(s => s.bal), borderColor: cssv('--acc'), backgroundColor: cssv('--acc2'), fill: true, stepped: true, pointRadius: 0, segment: { borderColor: c => c.p1.parsed.y < 0 ? cssv('--neg') : cssv('--acc') } }] }, options: { plugins: { legend: { display: false } }, scales: { y: yMoney, x: { grid: { display: false }, ticks: { maxTicksLimit: 14 } } } } });
  },
};

// ---------- DRE ----------
VIEWS.dre = {
  html() {
    const y = P.ym.slice(0, 4); const ms = Array.from({ length: 12 }, (_, i) => `${y}-${pad(i + 1)}`); const C = ms.map(m => compTotals(m));
    const g = (k) => C.map(c => c.byGroup[k] || 0); const tot = a => sum(a);
    const catsIn = k => cfg().categories.filter(c => c.dre === k).map(c => c.name).filter(n => C.some(c => c.byCat[n]));
    const recOp = g('rec_op'), ded = g('deducao'), recLiq = recOp.map((v, i) => v - ded[i]), fix = g('desp_fixa'), vari = g('desp_var');
    const resOp = recLiq.map((v, i) => v - fix[i] - vari[i]), rf = g('rec_fin'), df = g('desp_fin'), resLiq = resOp.map((v, i) => v + rf[i] - df[i]);
    const base = tot(recLiq) || 1;
    const line = (lbl, arr, cls = '', sign = 1) => `<tr class="${cls}"><td>${lbl}</td>${arr.map(v => `<td class="n">${Math.abs(v) < .005 ? '<span class="fnt">—</span>' : fmt(sign * v)}</td>`).join('')}<td class="n">${fmt(sign * tot(arr))}</td><td class="n mut">${pct(tot(arr) / base)}</td></tr>`;
    const cats = (k, sign) => UI.dreCats ? catsIn(k).map(n => line('&nbsp;&nbsp;&nbsp;&nbsp;' + esc(n), C.map(c => c.byCat[n] || 0), 'mut', sign)).join('') : '';
    return `<div class="grid g4">${kpi('Receita líquida ' + y, fmt(tot(recLiq)), '', 'pos')}${kpi('Resultado operacional', fmt(tot(resOp)), `margem ${pct(tot(resOp) / base)}`)}${kpi('Resultado líquido', fmt(tot(resLiq)), `margem ${pct(tot(resLiq) / base)}`, tot(resLiq) < 0 ? 'neg' : 'pos')}${kpi('Despesas fixas / receita', pct(tot(fix) / base), 'referência saudável: até 50%')}</div>
    <div class="toolbar" style="margin-top:16px"><label class="mut" style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${UI.dreCats ? 'checked' : ''} onchange="UI.dreCats=this.checked;render()"> Abrir por categoria</label><div class="sp"></div><span class="hint">Regime de competência · compras no cartão contam na data da compra/parcela · transferências e pagamento de faturas não entram</span></div>
    <div class="card"><div class="hd"><h3>Demonstração do Resultado · ${y}</h3></div><div class="bd p0"><div class="tw"><table class="t"><thead><tr><th style="min-width:230px">Linha</th>${ms.map(m => `<th class="n">${ymLabel(m)}</th>`).join('')}<th class="n">Total</th><th class="n">AV%</th></tr></thead><tbody>
      ${line('Receita operacional bruta', recOp, 'sub')}${cats('rec_op', 1)}
      ${line('(−) Deduções e impostos', ded, '', -1)}${cats('deducao', -1)}
      ${line('(=) Receita líquida', recLiq, 'tot')}
      ${line('(−) Despesas fixas', fix, 'sub', -1)}${cats('desp_fixa', -1)}
      ${line('(−) Despesas variáveis', vari, 'sub', -1)}${cats('desp_var', -1)}
      ${line('(=) Resultado operacional', resOp, 'tot')}
      ${line('(+) Receitas financeiras', rf, 'sub')}${cats('rec_fin', 1)}
      ${line('(−) Despesas financeiras', df, 'sub', -1)}${cats('desp_fin', -1)}
      ${line('(=) Resultado líquido do período', resLiq, 'tot')}
      <tr class="sub"><td>Margem líquida</td>${resLiq.map((v, i) => `<td class="n">${recLiq[i] ? pct(v / recLiq[i]) : '—'}</td>`).join('')}<td class="n">${pct(tot(resLiq) / base)}</td><td></td></tr>
    </tbody></table></div></div></div>`;
  },
};

// ---------- ORÇAMENTO ----------
VIEWS.orcamento = {
  html() {
    const rows = budgetRows(P.ym); const dRows = rows.filter(r => r.type === 'D');
    const plan = sum(dRows, r => r.plan), real = sum(dRows, r => r.real); const cur = compTotals(P.ym);
    const unb = Object.entries(cur.byCat).filter(([k]) => (catInfo(k) || {}).type === 'D' && !rows.some(r => r.b.cat === k));
    return `<div class="grid g4">${kpi('Orçado (despesas)', fmt(plan))}${kpi('Realizado', fmt(real), pct(plan ? real / plan : 0) + ' do orçado', real > plan ? 'neg' : '')}${kpi('Disponível', fmt(plan - real), '', plan - real < 0 ? 'neg' : 'pos')}${kpi('Gasto fora do orçamento', fmt(sum(unb, x => x[1])), `${unb.length} categoria(s) sem orçamento`, unb.length ? 'warn' : '')}</div>
    <div class="toolbar" style="margin-top:16px"><div class="mut">Orçamento mensal recorrente · comparando com <b>${ymLong(P.ym)}</b></div><div class="sp"></div><button class="btn" data-act="suggestBudget">Sugerir pela média de 3 meses</button><button class="btn pri" data-act="newBudget">+ Orçamento</button></div>
    <div class="grid g3"><div class="card s2"><div class="bd p0">${rows.length ? `<table class="t"><thead><tr><th>Categoria</th><th class="n">Orçado</th><th class="n">Realizado</th><th class="n">Diferença</th><th style="width:28%">Consumo</th><th></th></tr></thead><tbody>${rows.map(r => `<tr><td><span class="dot" style="background:${catColor(r.b.cat)}"></span> ${esc(r.b.cat)} ${r.type === 'R' ? chip('receita', 'pos') : ''}</td><td class="n">${fmt(r.plan)}</td><td class="n">${fmt(r.real)}</td><td class="n">${money(r.type === 'R' ? r.real - r.plan : r.plan - r.real, true)}</td><td>${bar(r.pct, r.type === 'R' ? 'pos' : null)}<div class="hint">${pct(r.pct, 0)}</div></td><td class="act"><button class="btn sm ghost" data-act="editBudget" data-id="${r.b.id}">Editar</button></td></tr>`).join('')}</tbody></table>` : empty('Nenhum orçamento definido.', '<button class="btn pri" data-act="suggestBudget">Criar a partir da média dos últimos meses</button>')}</div></div>
    <div class="card"><div class="hd"><h3>Orçado × realizado</h3></div><div class="bd"><div class="chart lg"><canvas id="o1"></canvas></div></div></div></div>
    ${unb.length ? `<div class="card" style="margin-top:16px"><div class="hd"><h3>Gastos sem orçamento em ${ymLabel(P.ym)}</h3></div><div class="bd p0 list">${unb.sort((a, b) => b[1] - a[1]).map(([k, v]) => `<div class="it"><span class="dot" style="background:${catColor(k)}"></span><div class="grow">${esc(k)}</div><b class="num">${fmt(v)}</b><button class="btn sm" data-act="budgetCat" data-cat="${esc(k)}" data-amt="${Math.ceil(v / 50) * 50}">Orçar</button></div>`).join('')}</div></div>` : ''}`;
  },
  after() {
    const rows = budgetRows(P.ym).filter(r => r.type === 'D').slice(0, 10);
    mkChart('o1', { type: 'bar', data: { labels: rows.map(r => r.b.cat), datasets: [{ label: 'Orçado', data: rows.map(r => r.plan), backgroundColor: cssv('--line'), borderRadius: 3 }, { label: 'Realizado', data: rows.map(r => r.real), backgroundColor: rows.map(r => r.pct >= 1 ? cssv('--neg') : r.pct >= .8 ? cssv('--warn') : cssv('--pos')), borderRadius: 3 }] }, options: { indexAxis: 'y', scales: { x: yMoney, y: noGrid } } });
  },
};
function budgetForm(b = {}) {
  openForm({
    title: b.id ? 'Editar orçamento' : 'Novo orçamento mensal', data: Object.assign({ entity: P.ent === '*' ? cfg().entities[0] : P.ent }, b, { amount: b.amount ? String(b.amount).replace('.', ',') : '' }),
    fields: [
      { k: 'cat', label: 'Categoria', type: 'select', w: 4, req: true, options: [['', 'Selecione…'], ...cfg().categories.map(c => [c.name, c.name + (c.type === 'R' ? ' (receita)' : '')])] },
      { k: 'amount', label: 'Valor mensal (R$)', type: 'money', w: 2, req: true },
      { k: 'entity', label: 'Entidade', type: 'select', w: 3, options: cfg().entities },
    ],
    onDelete: b.id ? async () => { await Store.del('budgets', b.id); closeModal(); } : null,
    async onSave(d) {
      const ex = [...S.budgets.values()].find(x => x.cat === d.cat && x.entity === d.entity && x.id !== b.id);
      await Store.put('budgets', Object.assign({}, ex || b, d, { amount: r2(parseNum(d.amount)) })); toast('Orçamento salvo');
    },
  });
}
async function suggestBudgets() {
  if (!roCheck()) return; const end = addMonths(ymOf(todayStr()), -1); const acc = {};
  for (let i = 0; i < 3; i++) Object.entries(compTotals(addMonths(end, -i)).byCat).forEach(([k, v]) => { if ((catInfo(k) || {}).type === 'D') acc[k] = (acc[k] || 0) + v; });
  const ent = P.ent === '*' ? cfg().entities[0] : P.ent;
  const out = Object.entries(acc).filter(([k]) => ![...S.budgets.values()].some(b => b.cat === k && b.entity === ent)).map(([k, v]) => ({ cat: k, amount: Math.ceil(v / 3 / 50) * 50, entity: ent }));
  if (!out.length) { toast('Sem histórico suficiente ou todas as categorias já têm orçamento.'); return; }
  if (!(await confirmBox('Sugerir orçamentos', `Criar ${out.length} orçamento(s) com base na média dos últimos 3 meses (arredondado para cima)?`, 'Criar'))) return;
  await Store.putMany('budgets', out); toast(`${out.length} orçamento(s) criados`);
}

// ---------- PROJEÇÕES ----------
VIEWS.projecoes = {
  html() {
    const o = UI.proj; const base = projectMonths({ ...o, scenario: 0 });
    const last = base.rows[base.rows.length - 1];
    const inp = (k, l, suf) => `<div class="f w1" style="grid-column:span 1"><label>${l}</label><input class="ctl num" type="number" step="0.1" value="${o[k]}" onchange="UI.proj.${k}=+this.value;render()"><div class="hint">${suf}</div></div>`;
    return `<div class="card"><div class="hd"><h3>Premissas</h3><small>base: média dos últimos ${o.base} meses (${base.avg.n} com dados)</small></div><div class="bd"><div class="fg">
      <div class="f" style="grid-column:span 1"><label>Horizonte</label><select class="ctl" onchange="UI.proj.months=+this.value;render()">${optsHTML([[12, '12 meses'], [24, '24 meses'], [36, '36 meses'], [60, '5 anos'], [120, '10 anos']], o.months)}</select></div>
      <div class="f" style="grid-column:span 1"><label>Base histórica</label><select class="ctl" onchange="UI.proj.base=+this.value;render()">${optsHTML([[3, '3 meses'], [6, '6 meses'], [12, '12 meses']], o.base)}</select></div>
      ${inp('incomeGrowth', 'Crescimento renda', '% ao ano')}${inp('inflation', 'Inflação despesas', '% ao ano (IPCA)')}${inp('yield', 'Rentabilidade', '% ao ano (aplicações)')}${inp('extra', 'Aporte extra', 'R$ por mês')}
    </div></div></div>
    <div class="grid g4" style="margin-top:16px">${kpi('Receita média mensal', fmt(base.avg.R), 'base histórica', 'pos')}${kpi('Despesa média mensal', fmt(base.avg.D), 'base histórica', 'neg')}${kpi('Patrimônio hoje', fmt(base.nw.nw))}${kpi(`Patrimônio em ${ymLabel(last.ym)}`, fmt(last.pl), `cenário base · ${last.pl >= base.nw.nw ? '+' : ''}${fmt(last.pl - base.nw.nw)}`, last.pl < base.nw.nw ? 'neg' : 'pos')}</div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Evolução patrimonial projetada · 3 cenários</h3><small>pessimista: receita −10% · otimista: receita +10%</small></div><div class="bd"><div class="chart lg"><canvas id="pr1"></canvas></div></div></div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Projeção mensal · cenário base</h3></div><div class="bd p0"><div class="tw" style="max-height:420px"><table class="t"><thead><tr><th>Mês</th><th class="n">Receitas</th><th class="n">Despesas</th><th class="n">Poupança</th><th class="n">Rendimentos</th><th class="n">Ativos líquidos</th><th class="n">Patrimônio líquido</th></tr></thead><tbody>${base.rows.map(r => `<tr><td>${ymLabel(r.ym)}</td><td class="n">${fmt(r.R)}</td><td class="n">${fmt(r.D)}</td><td class="n">${money(r.sav, true)}</td><td class="n pos">${fmt(r.yieldv)}</td><td class="n">${fmt(r.inv)}</td><td class="n"><b>${fmt(r.pl)}</b></td></tr>`).join('')}</tbody></table></div></div></div>`;
  },
  after() {
    const o = UI.proj; const sc = [[-0.1, 'Pessimista', '--neg'], [0, 'Base', '--acc'], [0.1, 'Otimista', '--pos']].map(([s, l, c]) => ({ l, c, r: projectMonths({ ...o, scenario: s }).rows }));
    mkChart('pr1', { type: 'line', data: { labels: sc[1].r.map(r => ymLabel(r.ym)), datasets: sc.map(s => ({ label: s.l, data: s.r.map(r => r.pl), borderColor: cssv(s.c), backgroundColor: cssv(s.c), tension: .3, pointRadius: 0, borderDash: s.l === 'Base' ? [] : [5, 4] })) }, options: { scales: { y: yMoney, x: { grid: { display: false }, ticks: { maxTicksLimit: 12 } } } } });
  },
};

// ---------- PATRIMÔNIO ----------
VIEWS.patrimonio = {
  html() {
    const nw = netWorth(); const at = assetsList('ativo'), ps = assetsList('passivo');
    const liq = nw.cash + sum(at.filter(a => LIQUID_ASSETS.includes(a.cls)), a => a.value);
    const snaps = [...S.snap.values()].sort((a, b) => a.id.localeCompare(b.id));
    const tbl = (list, kind) => `<table class="t"><thead><tr><th>Item</th><th>Classe</th><th class="n">Valor</th><th class="n">% ${kind === 'ativo' ? 'ativos' : 'passivos'}</th><th></th></tr></thead><tbody>
      ${kind === 'ativo' ? `<tr><td><b>Saldos em contas</b><div class="hint">${scopeAccounts().length} conta(s) · automático</div></td><td>Liquidez imediata</td><td class="n">${fmt(nw.cash)}</td><td class="n mut">${pct(nw.cash / (nw.totalAssets || 1))}</td><td></td></tr>` : `<tr><td><b>Cartões de crédito</b><div class="hint">faturas em aberto + parcelas futuras · automático</div></td><td>Curto prazo</td><td class="n">${fmt(nw.cardsDebt)}</td><td class="n mut">${pct(nw.cardsDebt / (nw.totalLiab || 1))}</td><td></td></tr>`}
      ${list.map(a => `<tr><td><b>${esc(a.name)}</b><div class="hint">${esc(a.notes || '')}${a.rate ? ` · ${String(a.rate).replace('.', ',')}% a.a.` : ''}${a.date ? ' · atualizado ' + fmtDate(a.date) : ''}</div></td><td>${esc(a.cls || '')}</td><td class="n">${fmt(a.value)}</td><td class="n mut">${pct(a.value / ((kind === 'ativo' ? nw.totalAssets : nw.totalLiab) || 1))}</td><td class="act"><button class="btn sm ghost" data-act="editAsset" data-id="${a.id}">Editar</button></td></tr>`).join('')}
      <tr class="tot"><td colspan="2">Total</td><td class="n">${fmt(kind === 'ativo' ? nw.totalAssets : nw.totalLiab)}</td><td></td><td></td></tr></tbody></table>`;
    return `<div class="grid g4">${kpi('Ativos totais', fmt(nw.totalAssets), '', 'pos')}${kpi('Passivos totais', fmt(nw.totalLiab), '', 'neg')}${kpi('Patrimônio líquido', fmt(nw.nw), snaps.length ? `último fechamento: ${fmt(snaps[snaps.length - 1].nw)}` : 'registre fechamentos mensais', nw.nw < 0 ? 'neg' : '')}${kpi('Liquidez do patrimônio', pct(liq / (nw.totalAssets || 1)), `${fmt(liq)} em ativos líquidos`)}</div>
    <div class="toolbar" style="margin-top:16px"><div class="sp"></div><button class="btn" data-act="snap">Registrar fechamento de ${ymLabel(ymOf(todayStr()))}</button><button class="btn" data-act="newAsset" data-kind="passivo">+ Passivo</button><button class="btn pri" data-act="newAsset" data-kind="ativo">+ Ativo</button></div>
    <div class="grid g3"><div class="card s2"><div class="hd"><h3>Ativos</h3></div><div class="bd p0">${tbl(at, 'ativo')}</div></div><div class="card"><div class="hd"><h3>Composição dos ativos</h3></div><div class="bd"><div class="chart"><canvas id="pt1"></canvas></div></div></div></div>
    <div class="grid g3" style="margin-top:16px"><div class="card s2"><div class="hd"><h3>Passivos (dívidas)</h3></div><div class="bd p0">${tbl(ps, 'passivo')}</div></div><div class="card"><div class="hd"><h3>Evolução do patrimônio líquido</h3></div><div class="bd">${snaps.length ? '<div class="chart"><canvas id="pt2"></canvas></div>' : '<div class="mut">Registre o fechamento ao fim de cada mês para formar o histórico patrimonial.</div>'}</div></div></div>`;
  },
  after() {
    const nw = netWorth(); const g = { 'Contas bancárias': nw.cash }; assetsList('ativo').forEach(a => g[a.cls || 'Outros'] = (g[a.cls || 'Outros'] || 0) + +a.value);
    const e = Object.entries(g).filter(x => x[1] > 0);
    mkChart('pt1', { type: 'doughnut', data: { labels: e.map(x => x[0]), datasets: [{ data: e.map(x => r2(x[1])), backgroundColor: e.map((_, i) => PALETTE[i % PALETTE.length]), borderWidth: 0 }] }, options: { cutout: '62%', interaction: { mode: 'nearest' }, plugins: { legend: { position: 'bottom' } } } });
    const snaps = [...S.snap.values()].sort((a, b) => a.id.localeCompare(b.id));
    if (snaps.length) mkChart('pt2', { type: 'line', data: { labels: snaps.map(s => ymLabel(s.id)), datasets: [{ label: 'PL', data: snaps.map(s => s.nw), borderColor: cssv('--pos'), backgroundColor: cssv('--pos2'), fill: true, tension: .3 }, { label: 'Ativos', data: snaps.map(s => s.totalAssets), borderColor: cssv('--acc'), tension: .3 }, { label: 'Passivos', data: snaps.map(s => s.totalLiab), borderColor: cssv('--neg'), tension: .3 }] }, options: { scales: { y: yMoney, x: noGrid } } });
  },
};
function assetForm(a = {}) {
  const kind = a.kind || 'ativo';
  openForm({
    title: (a.id ? 'Editar ' : 'Novo ') + (kind === 'ativo' ? 'ativo' : 'passivo'), data: Object.assign({ date: todayStr(), entity: P.ent === '*' ? cfg().entities[0] : P.ent }, a, { value: a.value ? String(a.value).replace('.', ',') : '' }),
    fields: [
      { k: 'name', label: 'Descrição', w: 4, req: true, ph: kind === 'ativo' ? 'Ex.: Apartamento Moema' : 'Ex.: Financiamento Caixa' },
      { k: 'cls', label: 'Classe', type: 'select', w: 2, options: kind === 'ativo' ? ASSET_CLASSES : LIAB_CLASSES },
      { k: 'value', label: kind === 'ativo' ? 'Valor de mercado (R$)' : 'Saldo devedor (R$)', type: 'money', w: 2, req: true },
      { k: 'date', label: 'Data da avaliação', type: 'date', w: 2 },
      { k: 'rate', label: kind === 'ativo' ? 'Rentab. esperada % a.a.' : 'Juros % a.a.', type: 'number', step: '0.01', w: 2 },
      { k: 'entity', label: 'Entidade', type: 'select', w: 3, options: cfg().entities },
      { k: 'notes', label: 'Observações', w: 3 },
    ],
    onDelete: a.id ? async () => { if (await confirmBox('Excluir', `Excluir "${esc(a.name)}"?`, 'Excluir', 'danger')) await Store.del('assets', a.id); } : null,
    async onSave(d) { await Store.put('assets', Object.assign({}, a, d, { kind, value: r2(parseNum(d.value)), rate: d.rate ? +d.rate : '' })); toast('Salvo'); },
  });
}
async function recordSnapshot() {
  if (!roCheck()) return; const ym = ymOf(todayStr()); const nw = netWorth();
  await Store.put('snap', Object.assign({ id: ym }, S.snap.get(ym) || {}, nw, { entity: P.ent })); toast(`Fechamento de ${ymLabel(ym)} registrado: ${fmt(nw.nw)}`);
}

// ---------- METAS ----------
VIEWS.metas = {
  html() {
    const gs = [...S.goals.values()].sort(byName); const avg = avgComp(6); const sav = avg.R - avg.D;
    return `<div class="toolbar"><div class="mut">Capacidade média de poupança: <b class="${sav < 0 ? 'neg' : 'pos'}">${fmt(sav)}/mês</b></div><div class="sp"></div><button class="btn pri" data-act="newGoal">+ Meta</button></div>
    ${gs.length ? `<div class="grid g3">${gs.map((g, i) => { const st = goalStatus(g); return `<div class="card"><div class="bd">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">${avatar(g.name, i)}<div class="grow"><b>${esc(g.name)}</b><div class="hint">${g.deadline ? 'prazo ' + fmtDate(g.deadline) : 'sem prazo'}${g.account ? ' · vinculada a ' + esc(accName(g.account)) : ''}</div></div>${st.pct >= 1 ? chip('Concluída', 'pos') : st.monthly && st.monthly > Math.max(0, sav) ? chip('Em risco', 'warn') : chip('No caminho', 'acc')}</div>
      <div style="display:flex;justify-content:space-between;align-items:baseline"><span class="num" style="font-size:20px;font-weight:650">${fmt(st.cur)}</span><span class="mut num">de ${fmt(g.target)}</span></div>
      <div style="margin:8px 0">${bar(st.pct, 'pos')}</div>
      <div class="kv"><span>Progresso</span><span>${pct(st.pct)}</span><span>Faltam</span><span>${fmt(st.remain)}</span>${st.monthly ? `<span>Aporte necessário</span><b>${fmt(st.monthly)}/mês por ${st.months} mês(es)</b>` : ''}</div>
      <div style="display:flex;gap:6px;margin-top:12px">${g.account ? '' : `<button class="btn sm" data-act="contrib" data-id="${g.id}">+ Aporte</button>`}<button class="btn sm ghost" data-act="editGoal" data-id="${g.id}">Editar</button></div></div></div>`; }).join('')}</div>` : `<div class="card">${empty('Defina metas: reserva de emergência, viagem, troca de carro, aposentadoria…', '<button class="btn pri" data-act="newGoal">+ Criar meta</button>')}</div>`}`;
  },
};
function goalForm(g = {}) {
  openForm({
    title: g.id ? 'Editar meta' : 'Nova meta', data: Object.assign({}, g, { target: g.target ? String(g.target).replace('.', ',') : '', current: g.current ? String(g.current).replace('.', ',') : '' }),
    fields: [
      { k: 'name', label: 'Nome da meta', w: 4, req: true, list: ['Reserva de emergência', 'Viagem', 'Troca de carro', 'Entrada do imóvel', 'Aposentadoria', 'Educação dos filhos'] },
      { k: 'target', label: 'Valor alvo (R$)', type: 'money', w: 2, req: true },
      { k: 'deadline', label: 'Prazo', type: 'date', w: 2 },
      { k: 'account', label: 'Vincular a uma conta', type: 'select', w: 4, options: [['', 'Não — controlar aportes manualmente'], ...accounts().map(a => [a.id, a.name])], hint: 'Se vinculada, o progresso é o saldo da conta' },
      { k: 'current', label: 'Valor já acumulado (R$)', type: 'money', w: 2, when: d => !d.account },
    ],
    onDelete: g.id ? async () => { if (await confirmBox('Excluir meta', `Excluir "${esc(g.name)}"?`, 'Excluir', 'danger')) await Store.del('goals', g.id); } : null,
    async onSave(d) { await Store.put('goals', Object.assign({}, g, d, { target: r2(parseNum(d.target)), current: r2(parseNum(d.current)) })); toast('Meta salva'); },
  });
}
function contribForm(id) {
  const g = S.goals.get(id);
  openForm({ title: `Aporte · ${g.name}`, data: {}, fields: [{ k: 'v', label: 'Valor do aporte (R$)', type: 'money', req: true }], async onSave(d) { await Store.put('goals', Object.assign({}, g, { current: r2((+g.current || 0) + parseNum(d.v)) })); toast('Aporte registrado'); } });
}

// ---------- INDICADORES ----------
VIEWS.indicadores = {
  html() {
    const I = indicators(); const rt = cfg().reserveTarget;
    const card = (t, v, st, ref, desc) => `<div class="card ind"><div class="top"><b>${t}</b>${chip(st[1], st[0])}</div><div class="v num">${v}</div><div class="hint">Referência: ${ref}</div><p>${desc}</p></div>`;
    const lv = (v, good, bad, inv = false) => v === null || !isFinite(v) ? ['', 'sem dados'] : (!inv ? (v >= good ? ['pos', 'saudável'] : v >= bad ? ['warn', 'atenção'] : ['neg', 'crítico']) : (v <= good ? ['pos', 'saudável'] : v <= bad ? ['warn', 'atenção'] : ['neg', 'crítico']));
    return `<div class="grid g4">
      ${card('Taxa de poupança (6m)', pct(I.savings6), lv(I.savings6, .2, .1), '≥ 20% da renda', 'Quanto da receita média sobra após todas as despesas. É o principal motor de construção de patrimônio.')}
      ${card('Taxa de poupança (mês)', pct(I.savingsMonth), lv(I.savingsMonth, .2, .1), '≥ 20%', `Resultado de ${ymLong(P.ym)} sobre a receita líquida do mês.`)}
      ${card('Reserva de emergência', I.reserveMonths === null ? '—' : I.reserveMonths.toFixed(1).replace('.', ',') + ' meses', lv(I.reserveMonths, rt, 3), `≥ ${rt} meses de despesas`, `Ativos líquidos (${fmt(I.liquid)}) divididos pela despesa média mensal (${fmt(I.avg.D)}).`)}
      ${card('Liquidez 30 dias', I.liquidity === null ? '—' : I.liquidity.toFixed(2).replace('.', ','), lv(I.liquidity, 1.5, 1), '≥ 1,5', `(Saldo + a receber em 30d) ÷ a pagar em 30d. Abaixo de 1 indica falta de caixa para honrar compromissos.`)}
      ${card('Endividamento', pct(I.debtRatio), lv(I.debtRatio, .3, .5, true), '≤ 30% dos ativos', 'Passivos totais (financiamentos, empréstimos, cartões) sobre ativos totais.')}
      ${card('Comprometimento com dívidas', pct(I.debtService), lv(I.debtService, .3, .4, true), '≤ 30% da renda', 'Parcelas de financiamentos + juros e tarifas sobre a receita média. Bancos usam ~30% como teto.')}
      ${card('Despesas fixas / renda', pct(I.fixedRatio), lv(I.fixedRatio, .5, .65, true), '≤ 50% (regra 50/30/20)', 'Peso dos custos recorrentes (moradia, educação, planos, assinaturas). Quanto menor, mais flexibilidade.')}
      ${card('Uso do limite dos cartões', pct(I.cardUse), lv(I.cardUse, .3, .7, true), '≤ 30% do limite', `${fmt(I.cardUseAmt)} comprometidos de ${fmt(I.cardLim)}. Uso alto pressiona o score de crédito.`)}
      ${card('Variação das despesas', I.expGrowth === null ? '—' : (I.expGrowth >= 0 ? '+' : '') + pct(I.expGrowth), lv(I.expGrowth, 0.05, 0.15, true), '≤ inflação', `${ymLabel(P.ym)} vs ${ymLabel(addMonths(P.ym, -1))}.`)}
      ${card('Patrimônio líquido', fmt(I.nw), I.nw >= 0 ? ['pos', 'positivo'] : ['neg', 'negativo'], 'crescente', 'Ativos menos passivos. Acompanhe a evolução registrando o fechamento mensal.')}
      ${card('Receita média mensal', fmt(I.avg.R), ['', '6 meses'], '—', 'Média das receitas por competência nos últimos 6 meses com movimento.')}
      ${card('Despesa média mensal', fmt(I.avg.D), ['', '6 meses'], '—', 'Média das despesas por competência (inclui cartões) nos últimos 6 meses.')}
    </div>
    <div class="card" style="margin-top:16px"><div class="hd"><h3>Taxa de poupança · 12 meses</h3></div><div class="bd"><div class="chart"><canvas id="i1"></canvas></div></div></div>`;
  },
  after() {
    const ms = []; for (let i = 11; i >= 0; i--) ms.push(addMonths(P.ym, -i));
    const v = ms.map(m => { const c = compTotals(m); return c.R ? r2((c.R - c.D) / c.R * 100) : null; });
    mkChart('i1', { type: 'bar', data: { labels: ms.map(ymLabel), datasets: [{ label: 'Taxa de poupança %', data: v, backgroundColor: v.map(x => x === null ? cssv('--line') : x >= 20 ? cssv('--pos') : x >= 0 ? cssv('--warn') : cssv('--neg')), borderRadius: 4 }] }, options: { plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => (c.raw ?? 0).toFixed(1).replace('.', ',') + '%' } } }, scales: { y: { ticks: { callback: v => v + '%' } }, x: noGrid } } });
  },
};

// ---------- ALERTAS ----------
VIEWS.alertas = {
  html() {
    const al = alerts(); const g = s => al.filter(a => a.sev === s);
    return `<div class="grid g3">${kpi('Críticos', g('danger').length, 'exigem ação', g('danger').length ? 'neg' : '')}${kpi('Atenção', g('warning').length, 'acompanhar', g('warning').length ? 'warn' : '')}${kpi('Informativos', g('info').length, '')}</div>
    <div class="toolbar" style="margin-top:16px"><div class="mut">Antecedência dos avisos de vencimento:</div><select class="ctl" onchange="saveCfg({alertDays:+this.value})">${optsHTML([[1, '1 dia'], [3, '3 dias'], [5, '5 dias'], [7, '7 dias'], [10, '10 dias']], cfg().alertDays)}</select><div class="sp"></div><button class="btn" id="icsBtn">Enviar vencimentos para a Agenda (.ics)</button></div>
    <div style="display:flex;flex-direction:column;gap:8px">${al.length ? al.map(alertHTML).join('') : `<div class="card">${empty('Nenhum alerta ativo. Suas finanças estão em ordem ✓')}</div>`}</div>`;
  },
  after() { $('#icsBtn').onclick = () => saveFile('vencimentos.ics', icsExport(), 'text/calendar'); },
};

// ---------- INTEGRAÇÕES & IA ----------
let chatLog = [];
VIEWS.integracoes = {
  html() {
    const st = (on, lbl) => chip(lbl, on === true ? 'pos' : on === 'file' ? 'acc' : 'warn');
    const integ = (lg, color, name, status, desc, actions) => `<div class="integ"><div class="lg" style="background:${color}">${lg}</div><div class="grow"><div style="display:flex;gap:8px;align-items:center"><b>${name}</b>${status}</div><div class="hint" style="margin:4px 0 8px;line-height:1.5">${desc}</div><div style="display:flex;gap:6px;flex-wrap:wrap">${actions}</div></div></div>`;
    return `<div class="grid g2">
    <div class="card"><div class="hd"><h3>✨ Analista financeiro com IA</h3>${AI ? chip('ativo', 'pos') : chip('indisponível nesta visualização', 'warn')}</div><div class="bd">
      ${AI ? `<div class="chat" id="chat">${chatLog.length ? chatLog.map(m => `<div class="msg ${m.role === 'user' ? 'u' : 'a'}">${esc(m.content)}</div>`).join('') : '<div class="mut">Pergunte sobre suas finanças. A IA recebe um resumo dos seus números (saldos, DRE, orçamento, indicadores e alertas) — nunca números de contas.</div>'}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin:12px 0">${['Faça um diagnóstico do mês', 'Onde posso cortar gastos?', 'Estou no caminho das minhas metas?', 'Monte um plano para minha reserva de emergência', 'Analise meu endividamento'].map(q => `<button class="btn sm" onclick="askAI(this.textContent)">${q}</button>`).join('')}</div>
      <div style="display:flex;gap:8px"><input class="ctl grow" id="aiq" placeholder="Ex.: Quanto gastei com alimentação e como reduzir?" onkeydown="if(event.key==='Enter')askAI(this.value)"><button class="btn pri" onclick="askAI($('#aiq').value)">Enviar</button></div>` : '<div class="mut">Abra o app pelo Claude para ativar a IA (classificação automática de lançamentos e análises).</div>'}
    </div></div>
    <div class="card"><div class="hd"><h3>Integrações</h3></div><div class="bd p0">
      ${integ('D', '#1a73e8', 'Google Drive', MCP ? st(true, 'conectado') : st(false, 'indisponível'), 'Backup completo do sistema em JSON e exportação dos lançamentos como Planilha Google, direto para o seu Drive.', MCP ? `<button class="btn sm" onclick="driveBackup()">Backup no Drive</button><button class="btn sm" onclick="driveSheet()">Exportar para Planilhas</button>` : '')}
      ${integ('A', '#0f9d58', 'Google Agenda', st('file', 'via arquivo'), 'Gera um calendário (.ics) com todos os vencimentos de contas a pagar, a receber e faturas, com lembrete 1 dia antes. Importe em Agenda → Configurações → Importar.', `<button class="btn sm" onclick="saveFile('vencimentos.ics', icsExport(), 'text/calendar')">Baixar .ics</button>`)}
      ${integ('F', '#7248b9', 'Google Forms', st('file', 'via CSV'), 'Crie um formulário (Data, Descrição, Valor) para lançar gastos pelo celular; exporte as respostas do Planilhas em CSV e importe aqui com categorização automática.', `<button class="btn sm" data-act="import">Importar respostas</button>`)}
      ${integ('W', '#25d366', 'WhatsApp', st('file', 'compartilhamento'), 'Envie o resumo financeiro do mês para você ou para a família. A API oficial (WhatsApp Business) para alertas automáticos exige um servidor intermediário — prevista na fase 2.', `<a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(waSummary())}">Enviar resumo</a>`)}
      ${integ('B', '#ec7000', 'Bancos / Open Finance', st('file', 'OFX / CSV'), 'Importe extratos OFX ou CSV de qualquer banco, com detecção de duplicados e categorização pelo histórico. A sincronização automática via Open Finance Brasil exige um agregador certificado (ex.: Pluggy, Belvo) e servidor próprio — fase 2.', `<button class="btn sm" data-act="import">Importar extrato</button>`)}
      ${integ('G', '#ea4335', 'Gmail', st(false, 'conectar'), 'Leitura automática de faturas, boletos e comprovantes recebidos por e-mail. Conecte o Gmail nas configurações de conectores do Claude para ativar.', '')}
    </div></div></div>`;
  },
};
async function askAI(q) {
  q = (q || '').trim(); if (!q || !AI) return; const inp = $('#aiq'); if (inp) inp.value = '';
  chatLog.push({ role: 'user', content: q }); render();
  await new Promise(r => setTimeout(r, 50));
  const chat = $('#chat'); const el = document.createElement('div'); el.className = 'msg a'; el.textContent = 'Analisando seus números…'; chat && chat.appendChild(el); chat && (chat.scrollTop = 1e6);
  const sys = `Você é um planejador financeiro (CFP) e controller brasileiro. Responda em português, de forma objetiva e profissional, com números em R$, usando os dados abaixo (JSON do sistema do usuário). Não invente dados ausentes; diga quando faltar informação. Use tópicos curtos e termine com ações práticas. Não use markdown pesado (sem tabelas).\n\nDADOS:\n${JSON.stringify(aiContext())}`;
  const msgs = chatLog.slice(-8).map((m, i, a) => ({ role: m.role, content: i === a.length - 1 && m.role === 'user' ? sys + '\n\nPERGUNTA: ' + m.content : m.content }));
  try {
    const r = await AI(msgs, { cache: false, modelTier: 'default', onText: ({ text }) => { el.textContent = text; chat && (chat.scrollTop = 1e6); } });
    chatLog.push({ role: 'assistant', content: r.text });
  } catch (e) {
    el.textContent = e.code === 'rate_limited' ? 'Muitas perguntas seguidas — aguarde um pouco.' : e.code === 'not_granted' ? 'A IA não foi autorizada nesta visualização.' : 'Não foi possível consultar a IA agora.';
    chatLog.pop();
  }
}
function waSummary() {
  const c = compTotals(P.ym); const nw = netWorth(); const pay = payables('D', 7);
  return `📊 Resumo financeiro · ${ymLong(P.ym)}\n\nReceitas: ${fmt(c.R)}\nDespesas: ${fmt(c.D)}\nResultado: ${fmt(c.R - c.D)}\nSaldo em contas: ${fmt(nw.cash)}\nPatrimônio líquido: ${fmt(nw.nw)}\n\n⏰ Próximos 7 dias: ${pay.length} conta(s) · ${fmt(sum(pay, p => p.amount))}`;
}
async function saveFile(filename, data, type) {
  if (DL) { try { await DL.save({ filename, data: new Blob([data], { type }) }); toast('Arquivo pronto: ' + filename); return; } catch (e) { if (e && /declin|cancel/i.test(e.code || e.message || '')) return; } }
  modal(`<div class="mdl wide"><div class="mh"><h2>${esc(filename)}</h2><button class="btn ghost ib" onclick="closeModal()">✕</button></div><div class="mb"><p class="hint" style="margin-top:0">O download direto não está disponível nesta visualização. Copie o conteúdo abaixo e salve como <b>${esc(filename)}</b>.</p><textarea class="ctl mono" style="width:100%;height:340px;padding:10px" readonly>${esc(data)}</textarea></div><div class="mf"><button class="btn pri" onclick="navigator.clipboard.writeText(this.closest('.mdl').querySelector('textarea').value).then(()=>toast('Copiado')).catch(()=>toast('Selecione e copie manualmente'))">Copiar</button></div></div>`);
}
async function driveCall(input, okMsg) {
  if (!MCP) { toast('Google Drive indisponível nesta visualização.'); return; }
  toast('Enviando para o Google Drive…');
  try { const r = await MCP.callTool('Google Drive', 'create_file', input); const p = r.payload || {}; toast(okMsg + (p.title ? ': ' + p.title : '')); }
  catch (e) {
    const m = { needs_reauth: 'Reconecte o Google Drive em claude.ai → Configurações → Conectores.', server_not_connected: 'Adicione o conector Google Drive em claude.ai → Configurações → Conectores.', not_in_manifest: 'Acesso ao Drive não autorizado para esta página.', approval_required: 'O envio ao Drive precisa da sua aprovação no claude.ai.', server_unavailable: 'Drive indisponível no momento. Tente de novo.' };
    toast(m[e.code] || ('Falha ao enviar ao Drive: ' + (e.message || e.code)));
  }
}
const driveBackup = () => driveCall({ title: `Backup Gestor Financeiro ${todayStr()}.json`, textContent: backupJSON(), contentMimeType: 'application/json', disableConversionToGoogleType: true }, 'Backup salvo no Drive');
const driveSheet = () => { const rows = txCSV().split('\n').map(l => l.split(';')); driveCall({ title: `Lançamentos ${todayStr()}`, textContent: rows.map(r => r.map(v => /[,"]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v).join(',')).join('\n'), contentMimeType: 'text/csv' }, 'Planilha criada no Drive'); };

// ---------- CONFIGURAÇÕES ----------
VIEWS.config = {
  html() {
    const c = cfg(); const tab = UI.cfgTab;
    const tabs = [['geral', 'Geral'], ['categorias', 'Plano de contas'], ['membros', 'Usuários'], ['dados', 'Dados e backup']];
    let body = '';
    if (tab === 'geral') body = `<div class="grid g2"><div class="card"><div class="hd"><h3>Entidades (consolidação)</h3></div><div class="bd"><p class="hint" style="margin-top:0">Separe Pessoal, Família, Empresa/MEI, Imóvel de aluguel… Cada conta e cartão pertence a uma entidade, e o seletor no topo consolida todas ou filtra uma.</p>${c.entities.map((e, i) => `<div style="display:flex;gap:8px;margin-bottom:6px"><input class="ctl grow" value="${esc(e)}" onchange="renameEntity(${i}, this.value)">${c.entities.length > 1 ? `<button class="btn ib danger" onclick="removeEntity(${i})">✕</button>` : ''}</div>`).join('')}<button class="btn sm" onclick="saveCfg({entities:[...cfg().entities,'Nova entidade']})">+ Entidade</button></div></div>
      <div class="card"><div class="hd"><h3>Preferências</h3></div><div class="bd"><div class="fg">
        <div class="f w3"><label>Meta de reserva (meses de despesa)</label><input class="ctl" type="number" value="${c.reserveTarget}" onchange="saveCfg({reserveTarget:+this.value})"></div>
        <div class="f w3"><label>Aviso de vencimento (dias antes)</label><input class="ctl" type="number" value="${c.alertDays}" onchange="saveCfg({alertDays:+this.value})"></div>
        <div class="f"><label>Centros de custo (separados por vírgula)</label><input class="ctl" value="${esc(c.costCenters.join(', '))}" onchange="saveCfg({costCenters:this.value.split(',').map(s=>s.trim()).filter(Boolean)})"></div>
      </div></div></div></div>`;
    else if (tab === 'categorias') body = `<div class="toolbar"><div class="hint">Cada categoria tem um grupo da DRE, que define onde ela aparece no demonstrativo.</div><div class="sp"></div><button class="btn" onclick="resetCats()">Restaurar padrão</button><button class="btn pri" onclick="catForm()">+ Categoria</button></div><div class="card"><div class="bd p0"><table class="t"><thead><tr><th>Categoria</th><th>Tipo</th><th>Grupo DRE</th><th>Subcategorias</th><th></th></tr></thead><tbody>${c.categories.map((k, i) => `<tr><td><span class="dot" style="background:${catColor(k.name)}"></span> <b>${esc(k.name)}</b></td><td>${k.type === 'R' ? chip('Receita', 'pos') : chip('Despesa', 'neg')}</td><td>${DRE_GROUPS[k.dre]}</td><td class="hint">${esc((k.subs || []).join(', '))}</td><td class="act"><button class="btn sm ghost" onclick="catForm(${i})">Editar</button></td></tr>`).join('')}</tbody></table></div></div>`;
    else if (tab === 'membros') body = `<div class="card"><div class="hd"><h3>Usuários com acesso</h3>${Store.mode === 'cloud' ? chip('multiusuário ativo', 'pos') : chip('modo local', 'warn')}</div><div class="bd p0 list" id="memList"><div class="empty">Carregando…</div></div></div>
      <div class="card" style="margin-top:16px"><div class="bd"><b>Como adicionar pessoas</b><p class="hint" style="line-height:1.6">Use o botão <b>Compartilhar</b> desta página no Claude. <b>Colaborador</b> pode lançar e editar; <b>Leitor</b> apenas visualiza. Todos veem os mesmos dados em tempo real, e cada lançamento registra quem o criou. Use as <b>Entidades</b> para separar as finanças de cada pessoa ou empresa dentro do mesmo espaço.</p></div></div>`;
    else body = `<div class="grid g2"><div class="card"><div class="hd"><h3>Backup e restauração</h3></div><div class="bd"><p class="hint" style="margin-top:0">${Store.mode === 'cloud' ? 'Seus dados ficam no banco em nuvem desta página e sincronizam entre dispositivos e usuários.' : 'Modo local: os dados ficam apenas neste navegador. Faça backups regulares.'}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="saveFile('backup_gestor_${todayStr()}.json', backupJSON(), 'application/json')">Baixar backup (JSON)</button>${MCP ? '<button class="btn" onclick="driveBackup()">Backup no Google Drive</button>' : ''}<label class="btn">Restaurar backup<input type="file" accept=".json" style="display:none" onchange="restoreBackup(this.files[0])"></label></div>
      <div class="kv" style="margin-top:16px">${COLS.filter(k => k !== 'config').map(k => `<span>${{ accounts: 'Contas', cards: 'Cartões', tx: 'Lançamentos', budgets: 'Orçamentos', goals: 'Metas', assets: 'Bens e dívidas', snap: 'Fechamentos', members: 'Usuários' }[k]}</span><span>${S[k].size}</span>`).join('')}</div></div></div>
      <div class="card"><div class="hd"><h3>Demonstração e limpeza</h3></div><div class="bd"><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="demoBtn" onclick="loadDemo()">Carregar dados de demonstração</button><button class="btn" onclick="clearDemo()">Remover demonstração</button><button class="btn danger" onclick="clearAll()">Apagar todos os dados</button></div><p class="hint">Os dados de demonstração são marcados e podem ser removidos sem afetar seus lançamentos reais.</p></div></div></div>`;
    return `<div class="tabs">${tabs.map(([k, l]) => `<button class="${tab === k ? 'on' : ''}" data-act="tab" data-k="cfgTab" data-v="${k}">${l}</button>`).join('')}</div>${body}`;
  },
  after() {
    if (UI.cfgTab !== 'membros') return;
    const ids = [...S.members.keys()]; const el = $('#memList');
    if (!ids.length) { el.innerHTML = '<div class="empty">Nenhum usuário registrado ainda.</div>'; return; }
    const cnt = id => txs().filter(t => t.createdBy === id).length;
    const draw = ps => { el.innerHTML = ids.map((id, i) => { const m = S.members.get(id); const n = (ps[id] || {}).name || 'Usuário'; return `<div class="it">${avatar(n, i)}<div class="grow"><b>${esc(n)}</b>${id === Store.uid ? ' ' + chip('você', 'acc') : ''}<div class="hint">${esc(m.role || 'Membro')} · desde ${fmtDate(m.since)}</div></div><span class="mut">${cnt(id)} lançamento(s)</span></div>`; }).join(''); };
    draw({}); if (USER) USER.profiles(ids).then(draw).catch(() => { });
  },
};
async function renameEntity(i, v) {
  v = v.trim(); if (!v) return render(); const ents = [...cfg().entities]; const old = ents[i]; ents[i] = v;
  await saveCfg({ entities: ents });
  const upd = [...accounts(true).filter(a => (a.entity || 'Pessoal') === old).map(a => ['accounts', a]), ...cards(true).filter(a => (a.entity || 'Pessoal') === old).map(a => ['cards', a]), ...[...S.assets.values()].filter(a => (a.entity || 'Pessoal') === old).map(a => ['assets', a]), ...[...S.budgets.values()].filter(a => (a.entity || 'Pessoal') === old).map(a => ['budgets', a])];
  for (const [c, o] of upd) await Store.put(c, Object.assign({}, o, { entity: v }));
  if (P.ent === old) P.ent = v;
}
async function removeEntity(i) {
  const e = cfg().entities[i]; if (accounts(true).some(a => (a.entity || 'Pessoal') === e) || cards(true).some(a => (a.entity || 'Pessoal') === e)) { toast('Mova as contas e cartões desta entidade antes de removê-la.'); return; }
  await saveCfg({ entities: cfg().entities.filter((_, j) => j !== i) });
}
function catForm(i) {
  const cats = [...cfg().categories]; const c = i != null ? cats[i] : { type: 'D', dre: 'desp_var', subs: [] };
  openForm({
    title: i != null ? 'Editar categoria' : 'Nova categoria', data: Object.assign({}, c, { subs: (c.subs || []).join(', ') }),
    fields: [
      { k: 'name', label: 'Nome', w: 4, req: true }, { k: 'type', label: 'Tipo', type: 'select', w: 2, options: [['D', 'Despesa'], ['R', 'Receita']] },
      { k: 'dre', label: 'Grupo da DRE', type: 'select', options: d => Object.entries(DRE_GROUPS).filter(([k]) => k !== 'neutro' && (d.type === 'R' ? ['rec_op', 'rec_fin'] : ['deducao', 'desp_fixa', 'desp_var', 'desp_fin']).includes(k)) },
      { k: 'subs', label: 'Subcategorias (separadas por vírgula)', type: 'textarea' },
    ],
    onDelete: i != null ? async () => { if (txs().some(t => t.cat === c.name)) { toast('Categoria em uso por lançamentos — renomeie em vez de excluir.'); return; } cats.splice(i, 1); await saveCfg({ categories: cats }); closeModal(); } : null,
    async onSave(d) {
      const n = { name: d.name.trim(), type: d.type, dre: d.dre, subs: d.subs.split(',').map(s => s.trim()).filter(Boolean) };
      if (cats.some((x, j) => x.name === n.name && j !== i)) throw new Error('Já existe uma categoria com esse nome.');
      if (i != null) {
        const old = cats[i].name; cats[i] = n;
        if (old !== n.name) { const list = txs().filter(t => t.cat === old); for (const t of list) await Store.put('tx', Object.assign({}, t, { cat: n.name })); }
      } else cats.push(n);
      await saveCfg({ categories: cats }); toast('Plano de contas atualizado');
    },
  });
}
async function resetCats() { if (await confirmBox('Restaurar plano de contas', 'Voltar às categorias padrão? Categorias personalizadas serão removidas da lista (lançamentos são mantidos).', 'Restaurar')) await saveCfg({ categories: null }); }
async function restoreBackup(file) {
  if (!file || !roCheck()) return;
  try {
    const j = JSON.parse(await file.text()); if (!j.data) throw new Error('Arquivo inválido');
    const n = sum(COLS, c => (j.data[c] || []).length);
    if (!(await confirmBox('Restaurar backup', `Importar ${n} registro(s) de ${fmtDate((j.exportedAt || '').slice(0, 10))}? Registros com o mesmo identificador serão substituídos.`, 'Restaurar'))) return;
    toast('Restaurando…'); for (const c of COLS) if (j.data[c]) await Store.putMany(c, j.data[c].filter(o => o && o.id));
    toast('Backup restaurado');
  } catch (e) { toast('Falha ao restaurar: ' + e.message); }
}
async function clearAll() {
  if (!roCheck()) return;
  if (!(await confirmBox('Apagar todos os dados', 'Isso remove permanentemente TODOS os lançamentos, contas, cartões, metas e configurações deste espaço, para todos os usuários. Faça um backup antes.', 'Apagar tudo', 'danger'))) return;
  toast('Apagando…'); for (const c of COLS) if (c !== 'members') await Store.delMany(c, [...S[c].keys()]); toast('Dados apagados');
}
async function clearDemo() {
  if (!roCheck()) return; const items = []; COLS.forEach(c => S[c].forEach(o => { if (o.demo) items.push([c, o.id]); }));
  if (!items.length) { toast('Não há dados de demonstração.'); return; }
  if (!(await confirmBox('Remover demonstração', `Remover ${items.length} registro(s) de demonstração?`, 'Remover', 'danger'))) return;
  for (const c of COLS) await Store.delMany(c, items.filter(x => x[0] === c).map(x => x[1])); toast('Demonstração removida');
}

// ---------- DADOS DE DEMONSTRAÇÃO ----------
async function loadDemo() {
  if (!roCheck()) return;
  if (txs().some(t => t.demo)) { toast('A demonstração já está carregada.'); return; }
  const b = $('#demoBtn'); if (b) { b.disabled = true; b.textContent = 'Gerando…'; }
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647; const rv = (a, z) => r2(a + rnd() * (z - a));
  const td = todayStr(); const cur = ymOf(td); const D = { demo: true };
  const ents = cfg().entities.includes('Empresa (MEI)') ? cfg().entities : [...cfg().entities, 'Empresa (MEI)'];
  await saveCfg({ entities: ents });
  const pe = cfg().entities[0];
  const acc = {
    itau: { id: 'demo-itau', name: 'Itaú Corrente', bank: 'Itaú', type: 'corrente', entity: pe, opening: 4200, openingDate: dateIn(addMonths(cur, -6), 1), ...D },
    nu: { id: 'demo-nu', name: 'Nubank Conta', bank: 'Nubank', type: 'digital', entity: pe, opening: 1500, openingDate: dateIn(addMonths(cur, -6), 1), ...D },
    xp: { id: 'demo-xp', name: 'XP Investimentos', bank: 'XP', type: 'investimento', entity: pe, opening: 28000, openingDate: dateIn(addMonths(cur, -6), 1), ...D },
    pj: { id: 'demo-pj', name: 'Inter PJ', bank: 'Inter', type: 'pj', entity: 'Empresa (MEI)', opening: 3000, openingDate: dateIn(addMonths(cur, -6), 1), ...D },
  };
  const cc = {
    nu: { id: 'demo-cnu', name: 'Nubank Ultravioleta', brand: 'Mastercard', limit: 12000, closeDay: 3, dueDay: 10, payAccount: 'demo-nu', entity: pe, color: '#7c3aed', ...D },
    it: { id: 'demo-cit', name: 'Itaú Personnalité', brand: 'Visa', limit: 8000, closeDay: 25, dueDay: 5, payAccount: 'demo-itau', entity: pe, color: '#ea580c', ...D },
  };
  await Store.putMany('accounts', Object.values(acc)); await Store.putMany('cards', Object.values(cc));
  const T = [];
  const add = o => T.push(Object.assign({ cc: '', party: '', notes: '' }, o, D));
  for (let i = -5; i <= 1; i++) {
    const ym = addMonths(cur, i); const past = d => d <= td;
    const bill = (day, desc, cat, sub, amount, accId = 'demo-itau', party = '') => { const d = dateIn(ym, day); add({ type: 'D', desc, cat, sub, amount, account: accId, date: d, due: d, status: past(d) ? 'pago' : 'pendente', paidDate: past(d) ? d : '', party }); };
    const inc = (day, desc, cat, sub, amount, accId) => { const d = dateIn(ym, day); add({ type: 'R', desc, cat, sub, amount, account: accId, date: d, due: d, status: past(d) ? 'pago' : 'pendente', paidDate: past(d) ? d : '' }); };
    inc(5, 'Salário', 'Salário', 'Salário líquido', 11400, 'demo-itau');
    inc(15, 'Serviços de consultoria', 'Vendas e Serviços', 'Serviços prestados', rv(2800, 4600), 'demo-pj');
    if (i % 3 === 0) inc(20, 'Comissão trimestral', 'Comissões e Bônus', 'Comissão', rv(1200, 2200), 'demo-itau');
    bill(10, 'Aluguel apartamento', 'Moradia', 'Aluguel', 2200, 'demo-itau', 'Imobiliária Lar');
    bill(10, 'Condomínio', 'Moradia', 'Condomínio', 650);
    bill(12, 'Energia elétrica', 'Moradia', 'Energia', rv(180, 290), 'demo-itau', 'Enel');
    bill(14, 'Internet fibra', 'Moradia', 'Internet / TV', 119.9, 'demo-nu', 'Vivo');
    bill(8, 'Plano de saúde', 'Saúde (planos)', 'Plano de saúde', 680, 'demo-itau', 'Unimed');
    bill(7, 'Mensalidade escola', 'Educação', 'Escola / Faculdade', 1250, 'demo-itau', 'Colégio Integral');
    bill(20, 'DAS MEI', 'Impostos e contribuições', 'DAS / Simples', 75.6, 'demo-pj');
    bill(15, 'Parcela financiamento imobiliário', 'Parcelas e financiamentos', 'Financiamento imobiliário', 2900, 'demo-itau', 'Caixa');
    bill(22, 'Tarifa pacote de serviços', 'Tarifas bancárias', 'Tarifa de conta', 39.9);
    // transferência para investimentos + rendimento
    const d6 = dateIn(ym, 6); if (d6 <= td) { add({ type: 'T', desc: 'Aplicação mensal', amount: 1000, account: 'demo-itau', toAccount: 'demo-xp', cat: 'Transferência', date: d6, due: d6, status: 'pago', paidDate: d6 }); }
    const d16 = dateIn(ym, 16); if (d16 <= td) add({ type: 'T', desc: 'Distribuição de lucros MEI', amount: 3000, account: 'demo-pj', toAccount: 'demo-nu', cat: 'Transferência', date: d16, due: d16, status: 'pago', paidDate: d16 });
    const dl = dateIn(ym, 28); if (dl <= td) add({ type: 'R', desc: 'Rendimento CDB', cat: 'Rendimentos financeiros', sub: 'Juros CDB/LCI', amount: rv(240, 300), account: 'demo-xp', date: dl, due: dl, status: 'pago', paidDate: dl });
    if (i > 0) continue;
    // compras no cartão
    const shop = (desc, cat, sub, a, z, card, times) => { for (let k = 0; k < times; k++) { const d = dateIn(ym, 1 + Math.floor(rnd() * 27)); if (d > td) continue; const c = card === 'nu' ? cc.nu : cc.it; add({ type: 'D', desc, cat, sub, amount: rv(a, z), card: c.id, account: '', date: d, invoice: invoiceRefFor(c, d), status: 'pago' }); } };
    shop('Supermercado Pão de Açúcar', 'Alimentação', 'Supermercado', 280, 520, 'nu', 4);
    shop('iFood', 'Alimentação', 'Delivery', 45, 120, 'nu', 5);
    shop('Restaurante Outback', 'Alimentação', 'Restaurante', 160, 340, 'it', 2);
    shop('Posto Shell', 'Transporte', 'Combustível', 180, 290, 'it', 3);
    shop('Uber', 'Transporte', 'App / Táxi', 18, 55, 'nu', 4);
    shop('Drogasil', 'Saúde', 'Farmácia', 40, 160, 'nu', 2);
    shop('Netflix', 'Assinaturas e serviços', 'Streaming', 55.9, 55.9, 'nu', 1);
    shop('Spotify Família', 'Assinaturas e serviços', 'Streaming', 34.9, 34.9, 'nu', 1);
    shop('Smart Fit', 'Assinaturas e serviços', 'Academia', 119.9, 119.9, 'it', 1);
    shop('Renner', 'Compras', 'Vestuário', 150, 420, 'it', 1);
    shop('Cinema Cinemark', 'Lazer e viagens', 'Passeios', 60, 140, 'nu', 1);
    shop('Petz', 'Pets', 'Ração', 140, 230, 'nu', 1);
  }
  // compra parcelada
  const pd = dateIn(addMonths(cur, -3), 18); const ref0 = invoiceRefFor(cc.it, pd); const g = 'demo-grp-tv';
  for (let k = 0; k < 10; k++) add({ type: 'D', desc: `Smart TV Samsung 65" (${k + 1}/10)`, cat: 'Compras', sub: 'Eletrônicos', amount: 389.9, card: cc.it.id, account: '', date: k ? addMonthsDate(pd, k) : pd, invoice: addMonths(ref0, k), status: 'pago', group: g, inst: [k + 1, 10], total: 3899 });
  await Store.putMany('tx', T);
  // pagamentos de faturas vencidas
  const pays = [];
  Object.values(cc).forEach(c => Object.values(cardInvoices(c.id)).forEach(e => { if (e.due <= td && e.open > 0) pays.push({ type: 'D', kind: 'fatura', payCard: c.id, invoice: e.ref, account: c.payAccount, amount: e.open, date: e.due, paidDate: e.due, due: e.due, status: 'pago', cat: 'Pagamento de fatura', desc: `Pagamento fatura ${c.name} ${ymLabel(e.ref)}`, ...D }); }));
  await Store.putMany('tx', pays);
  await Store.putMany('assets', [
    { kind: 'ativo', name: 'Apartamento — Vila Mariana', cls: 'Imóvel', value: 620000, date: td, entity: pe, ...D },
    { kind: 'ativo', name: 'Honda HR-V 2022', cls: 'Veículo', value: 118000, date: td, entity: pe, ...D },
    { kind: 'ativo', name: 'Previdência PGBL', cls: 'Previdência', value: 46000, date: td, entity: pe, rate: 9.5, ...D },
    { kind: 'ativo', name: 'Carteira de ações', cls: 'Renda variável', value: 32500, date: td, entity: pe, ...D },
    { kind: 'passivo', name: 'Financiamento imobiliário Caixa', cls: 'Financiamento imobiliário', value: 352000, date: td, entity: pe, rate: 10.4, ...D },
  ]);
  await Store.putMany('goals', [
    { name: 'Reserva de emergência', target: 72000, account: 'demo-xp', deadline: addMonthsDate(td, 18), ...D },
    { name: 'Viagem Europa', target: 25000, current: 6200, deadline: addMonthsDate(td, 10), ...D },
  ]);
  await Store.putMany('budgets', [['Alimentação', 2600], ['Transporte', 1100], ['Lazer e viagens', 600], ['Compras', 900], ['Moradia', 3400], ['Saúde', 300]].map(([cat, amount]) => ({ cat, amount, entity: pe, ...D })));
  for (let i = -5; i <= 0; i++) { const ym = addMonths(cur, i); const nw = netWorth(); const f = 1 - (0 - i) * 0.012; await Store.put('snap', { id: ym, nw: r2(nw.nw * f), totalAssets: r2(nw.totalAssets * (1 - (0 - i) * 0.006)), totalLiab: r2(nw.totalLiab * (1 + (0 - i) * 0.004)), demo: true }); }
  toast('Demonstração carregada — explore os módulos!'); location.hash = 'dashboard'; render();
}

// =========================================================
// INICIALIZAÇÃO
// =========================================================
(function boot() {
  try { const th = localStorage.getItem('gfp_theme'); if (th) document.documentElement.dataset.theme = th; } catch (e) { }
  $('#mPrev').onclick = () => { P.ym = addMonths(P.ym, -1); render(); };
  $('#mNext').onclick = () => { P.ym = addMonths(P.ym, 1); render(); };
  $('#entSel').onchange = e => { P.ent = e.target.value; try { localStorage.setItem('gfp_ent', P.ent); } catch (x) { } render(); };
  $('#themeBtn').onclick = () => { const d = document.documentElement; d.dataset.theme = d.dataset.theme === 'dark' ? '' : 'dark'; try { localStorage.setItem('gfp_theme', d.dataset.theme); } catch (e) { } render(); };
  $('#quickAdd').onclick = () => txForm();
  $('#menuBtn').onclick = () => $('#side').classList.toggle('open');
  $('#side').addEventListener('click', e => { if (e.target.closest('.nav')) $('#side').classList.remove('open'); });
  $('#modal').addEventListener('mousedown', e => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'n' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !$('#modal').classList.contains('on')) { e.preventDefault(); txForm(); }
  });
  window.addEventListener('hashchange', render);
  Store.on(render);
  Store.init().then(async () => {
    $('#loading').remove(); render();
    if (window.claude && window.claude.use) {
      window.claude.use('user').then(u => { USER = u; render(); }).catch(() => { });
      window.claude.use('sample').then(s => { AI = s; if (s) render(); }).catch(() => { });
      window.claude.use('mcp').then(m => { MCP = m; if (m) render(); }).catch(() => { });
      window.claude.use('downloads').then(d => { DL = d; }).catch(() => { });
    }
  });
})();
