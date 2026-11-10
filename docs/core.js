'use strict';
/* =========================================================
   Gestor Financeiro & Patrimonial — núcleo (dados + motor)
   ========================================================= */

// ---------- utilidades ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const fmt = v => BRL.format(+v || 0);
const fmtK = v => { const a = Math.abs(v); if (a >= 1e6) return (v / 1e6).toFixed(1).replace('.', ',') + ' mi'; if (a >= 1e4) return (v / 1e3).toFixed(0) + ' mil'; return Math.round(v).toLocaleString('pt-BR'); };
const pct = (v, d = 1) => (isFinite(v) && v !== null) ? (v * 100).toFixed(d).replace('.', ',') + '%' : '—';
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const pad = n => String(n).padStart(2, '0');
const todayStr = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const ymOf = s => (s || '').slice(0, 7);
const addMonths = (ym, n) => { let [y, m] = ym.split('-').map(Number); m += n; y += Math.floor((m - 1) / 12); m = ((m - 1) % 12 + 12) % 12 + 1; return `${y}-${pad(m)}`; };
const dim = (y, m) => new Date(y, m, 0).getDate();
const dateIn = (ym, day) => { const [y, m] = ym.split('-').map(Number); return `${ym}-${pad(Math.max(1, Math.min(+day || 1, dim(y, m))))}`; };
const addMonthsDate = (ds, n) => dateIn(addMonths(ymOf(ds), n), +ds.slice(8, 10));
const addDays = (ds, n) => { const d = new Date(ds + 'T12:00:00'); d.setDate(d.getDate() + n); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const diffDays = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const MESESL = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const ymLabel = ym => { const [y, m] = ym.split('-'); return `${MESES[+m - 1]}/${y.slice(2)}`; };
const ymLong = ym => { const [y, m] = ym.split('-'); return `${MESESL[+m - 1]} ${y}`; };
const fmtDate = ds => ds ? `${ds.slice(8, 10)}/${ds.slice(5, 7)}/${ds.slice(0, 4)}` : '';
const sum = (arr, f = x => x) => arr.reduce((a, x) => a + (+f(x) || 0), 0);
const r2 = v => Math.round((+v || 0) * 100) / 100;
const byName = (a, b) => (a.name || '').localeCompare(b.name || '', 'pt-BR');
const parseNum = s => { if (typeof s === 'number') return s; s = String(s || '').trim().replace(/[R$\s]/g, ''); if (/,\d{1,2}$/.test(s)) s = s.replace(/\./g, '').replace(',', '.'); else s = s.replace(/,/g, ''); const v = parseFloat(s); return isNaN(v) ? 0 : v; };
const monthsBetween = (a, b) => { const [y1, m1] = a.split('-').map(Number), [y2, m2] = b.split('-').map(Number); return (y2 - y1) * 12 + (m2 - m1); };
const PALETTE = ['#2f5bea', '#0f9f6e', '#e0453a', '#d48806', '#7c3aed', '#0e7490', '#db2777', '#65a30d', '#ea580c', '#475569', '#0891b2', '#a16207', '#9333ea', '#15803d'];

// ---------- plano de contas (categorias) ----------
// dre: rec_op | deducao | rec_fin | desp_fixa | desp_var | desp_fin | neutro
const DEFAULT_CATS = [
  { name: 'Salário', type: 'R', dre: 'rec_op', subs: ['Salário líquido', 'Adiantamento', 'Horas extras'] },
  { name: 'Pró-labore / Empresa', type: 'R', dre: 'rec_op', subs: ['Pró-labore', 'Distribuição de lucros'] },
  { name: 'Vendas e Serviços', type: 'R', dre: 'rec_op', subs: ['Serviços prestados', 'Vendas', 'Freelance'] },
  { name: 'Comissões e Bônus', type: 'R', dre: 'rec_op', subs: ['Comissão', 'PLR', 'Bônus', '13º salário', 'Férias'] },
  { name: 'Aluguéis recebidos', type: 'R', dre: 'rec_op', subs: ['Imóvel residencial', 'Imóvel comercial'] },
  { name: 'Reembolsos', type: 'R', dre: 'rec_op', subs: ['Reembolso empresa', 'Estorno', 'Cashback'] },
  { name: 'Outras receitas', type: 'R', dre: 'rec_op', subs: ['Presentes', 'Venda de bens', 'Diversos'] },
  { name: 'Rendimentos financeiros', type: 'R', dre: 'rec_fin', subs: ['Juros CDB/LCI', 'Rendimento poupança', 'Tesouro Direto', 'Fundos'] },
  { name: 'Dividendos e JCP', type: 'R', dre: 'rec_fin', subs: ['Dividendos', 'JCP', 'FIIs'] },
  { name: 'Impostos e contribuições', type: 'D', dre: 'deducao', subs: ['IRPF', 'INSS', 'DAS / Simples', 'Carnê-leão'] },
  { name: 'Moradia', type: 'D', dre: 'desp_fixa', subs: ['Aluguel', 'Condomínio', 'IPTU', 'Energia', 'Água', 'Gás', 'Internet / TV', 'Manutenção', 'Diarista'] },
  { name: 'Educação', type: 'D', dre: 'desp_fixa', subs: ['Escola / Faculdade', 'Cursos', 'Livros e material', 'Idiomas'] },
  { name: 'Saúde (planos)', type: 'D', dre: 'desp_fixa', subs: ['Plano de saúde', 'Plano odontológico'] },
  { name: 'Seguros', type: 'D', dre: 'desp_fixa', subs: ['Seguro de vida', 'Seguro auto', 'Seguro residencial'] },
  { name: 'Assinaturas e serviços', type: 'D', dre: 'desp_fixa', subs: ['Streaming', 'Software / Apps', 'Academia', 'Telefonia celular', 'Nuvem'] },
  { name: 'Parcelas e financiamentos', type: 'D', dre: 'desp_fixa', subs: ['Financiamento imobiliário', 'Financiamento veículo', 'Consórcio', 'Empréstimo'] },
  { name: 'Alimentação', type: 'D', dre: 'desp_var', subs: ['Supermercado', 'Restaurante', 'Delivery', 'Padaria / Lanches', 'Feira'] },
  { name: 'Transporte', type: 'D', dre: 'desp_var', subs: ['Combustível', 'App / Táxi', 'Estacionamento', 'Pedágio', 'Manutenção veículo', 'IPVA / Licenciamento', 'Transporte público'] },
  { name: 'Saúde', type: 'D', dre: 'desp_var', subs: ['Farmácia', 'Consultas', 'Exames', 'Odontologia', 'Terapia'] },
  { name: 'Lazer e viagens', type: 'D', dre: 'desp_var', subs: ['Viagens', 'Passeios', 'Eventos / Shows', 'Hobbies', 'Bares'] },
  { name: 'Compras', type: 'D', dre: 'desp_var', subs: ['Vestuário', 'Eletrônicos', 'Casa e decoração', 'Presentes', 'Utilidades'] },
  { name: 'Cuidados pessoais', type: 'D', dre: 'desp_var', subs: ['Salão / Barbearia', 'Cosméticos', 'Estética'] },
  { name: 'Família e filhos', type: 'D', dre: 'desp_var', subs: ['Mesada', 'Atividades', 'Pensão', 'Babá'] },
  { name: 'Pets', type: 'D', dre: 'desp_var', subs: ['Ração', 'Veterinário', 'Banho e tosa'] },
  { name: 'Doações', type: 'D', dre: 'desp_var', subs: ['Dízimo / Igreja', 'ONGs'] },
  { name: 'Outras despesas', type: 'D', dre: 'desp_var', subs: ['Diversos', 'Não identificado'] },
  { name: 'Juros e encargos', type: 'D', dre: 'desp_fin', subs: ['Juros cheque especial', 'Juros rotativo', 'IOF', 'Multas e mora'] },
  { name: 'Tarifas bancárias', type: 'D', dre: 'desp_fin', subs: ['Tarifa de conta', 'Anuidade cartão', 'TED / Saque'] },
];
const SYS_CATS = ['Transferência', 'Pagamento de fatura', 'Ajuste de saldo'];
const DRE_GROUPS = {
  rec_op: 'Receitas operacionais', deducao: 'Deduções (impostos)', desp_fixa: 'Despesas fixas', desp_var: 'Despesas variáveis',
  rec_fin: 'Receitas financeiras', desp_fin: 'Despesas financeiras', neutro: 'Neutro'
};
const ACC_TYPES = { corrente: 'Conta corrente', poupanca: 'Poupança', investimento: 'Investimentos', carteira: 'Carteira / Dinheiro', digital: 'Conta digital', pj: 'Conta PJ' };
const ASSET_CLASSES = ['Imóvel', 'Veículo', 'Renda fixa', 'Renda variável', 'Fundos', 'Previdência', 'Cripto', 'Participação societária', 'Outros bens'];
const LIAB_CLASSES = ['Financiamento imobiliário', 'Financiamento de veículo', 'Empréstimo pessoal', 'Consignado', 'Dívida com terceiros', 'Outros passivos'];
const LIQUID_ASSETS = ['Renda fixa', 'Renda variável', 'Fundos', 'Cripto'];

// ---------- estado ----------
const COLS = ['accounts', 'cards', 'tx', 'budgets', 'goals', 'assets', 'snap', 'members', 'config'];
const S = Object.fromEntries(COLS.map(c => [c, new Map()]));
const P = { ym: ymOf(todayStr()), ent: '*', view: 'dashboard' };
try { const t = localStorage.getItem('gfp_ent'); if (t) P.ent = t; } catch (e) { }

// ---------- camada de armazenamento ----------
const Store = {
  mode: 'loading', db: null, user: null, uid: null, canWrite: true, stale: false, subs: new Set(),
  on(fn) { this.subs.add(fn); },
  emit() { this.subs.forEach(f => { try { f(); } catch (e) { console.error(e); } }); },
  async init() {
    let db = null;
    if (window.claude && typeof window.claude.use === 'function') {
      try { db = await Promise.race([window.claude.use('db'), new Promise(r => setTimeout(() => r(null), 11000))]); } catch (e) { db = null; }
    }
    if (!db) return this.initLocal();
    this.mode = 'cloud'; this.db = db;
    try { this.user = await window.claude.use('user'); } catch (e) { this.user = null; }
    if (this.user) {
      try { this.uid = await this.user.id(); } catch (e) { }
      try { const c = await this.user.can('data.write'); if (c === false) this.canWrite = false; } catch (e) { }
    }
    await new Promise(resolve => {
      const pending = new Set(COLS);
      const timer = setTimeout(() => { this.stale = true; resolve(); }, 10000);
      const done = c => { pending.delete(c); if (!pending.size) { clearTimeout(timer); resolve(); } };
      COLS.forEach(c => {
        db.collection(c).onSnapshot(snap => {
          const m = new Map();
          snap.docs.forEach(d => { const v = d.data(); if (v) m.set(d.id, Object.assign({}, v, { id: d.id })); });
          S[c] = m; if (!snap.metadata.fromCache) this.stale = false;
          done(c); this.emit();
        }, err => { console.warn('db', c, err); done(c); this.emit(); });
      });
    });
    if (this.uid && this.canWrite) {
      try {
        const ref = db.collection('members').doc(this.uid);
        const d = await ref.get();
        if (!d.exists) await ref.set({ since: todayStr(), role: (this.user && this.user.isOwner && await this.user.isOwner()) ? 'Proprietário' : 'Membro' });
      } catch (e) { }
    }
  },
  initLocal() {
    this.mode = 'local';
    try {
      const raw = JSON.parse(localStorage.getItem('gfp_data') || '{}');
      COLS.forEach(c => { S[c] = new Map((raw[c] || []).map(o => [o.id, o])); });
    } catch (e) { }
  },
  persistLocal() {
    try { localStorage.setItem('gfp_data', JSON.stringify(Object.fromEntries(COLS.map(c => [c, [...S[c].values()]])))); }
    catch (e) { toast('Não foi possível salvar no navegador: ' + e.message); }
  },
  clean(o) { const x = JSON.parse(JSON.stringify(o)); delete x.id; return x; },
  handleErr(e) {
    const code = e && e.code;
    if (code === 'invalid_argument') { this.canWrite = false; toast('Sem permissão para gravar. Peça acesso de Colaborador ao proprietário.'); }
    else if (code === 'quota_exceeded') toast('Limite do banco de dados atingido. Arquive ou exclua registros antigos.');
    else if (code === 'resource_exhausted') toast('Muitas gravações seguidas. Aguarde alguns segundos.');
    else toast('Erro ao gravar: ' + (e && e.message || e));
    throw e;
  },
  async put(col, obj) {
    if (!obj.id) obj.id = uid();
    if (!obj.createdAt) { obj.createdAt = new Date().toISOString(); if (this.uid) obj.createdBy = this.uid; }
    obj.updatedAt = new Date().toISOString();
    if (this.uid) obj.updatedBy = this.uid;
    S[col].set(obj.id, obj);
    if (this.mode === 'cloud') {
      this.emit();
      try { await this.db.collection(col).doc(obj.id).set(this.clean(obj)); } catch (e) { this.handleErr(e); }
    } else { this.persistLocal(); this.emit(); }
    return obj;
  },
  async putMany(col, arr) {
    if (this.mode !== 'cloud') { arr.forEach(o => { if (!o.id) o.id = uid(); o.createdAt = o.createdAt || new Date().toISOString(); S[col].set(o.id, o); }); this.persistLocal(); this.emit(); return; }
    for (let i = 0; i < arr.length; i += 6) await Promise.all(arr.slice(i, i + 6).map(o => this.put(col, o)));
  },
  async del(col, id) {
    S[col].delete(id);
    if (this.mode === 'cloud') { this.emit(); try { await this.db.collection(col).doc(id).delete(); } catch (e) { this.handleErr(e); } }
    else { this.persistLocal(); this.emit(); }
  },
  async delMany(col, ids) { for (let i = 0; i < ids.length; i += 6) await Promise.all(ids.slice(i, i + 6).map(id => this.del(col, id))); },
};

// ---------- configuração ----------
function cfg() {
  const c = S.config.get('main') || {};
  return {
    categories: (c.categories && c.categories.length) ? c.categories : DEFAULT_CATS,
    entities: (c.entities && c.entities.length) ? c.entities : ['Pessoal'],
    costCenters: c.costCenters || [],
    alertDays: c.alertDays ?? 5,
    reserveTarget: c.reserveTarget ?? 6,
    company: c.company || '',
  };
}
async function saveCfg(patch) { const cur = Object.assign({}, S.config.get('main') || {}, patch, { id: 'main' }); await Store.put('config', cur); }
const catInfo = name => cfg().categories.find(c => c.name === name);
const catsOf = type => cfg().categories.filter(c => c.type === type);
const catColor = name => { const i = cfg().categories.findIndex(c => c.name === name); return i < 0 ? '#94a3b8' : PALETTE[i % PALETTE.length]; };

// ---------- acessos ----------
const accounts = (all = false) => [...S.accounts.values()].filter(a => all || !a.archived).sort(byName);
const cards = (all = false) => [...S.cards.values()].filter(c => all || !c.archived).sort(byName);
const txs = () => [...S.tx.values()];
const inEnt = e => P.ent === '*' || (e || 'Pessoal') === P.ent;
const scopeAccounts = () => accounts().filter(a => inEnt(a.entity));
const scopeCards = () => cards().filter(c => inEnt(c.entity));
function txEntity(t) {
  if (t.card) { const c = S.cards.get(t.card); return (c && c.entity) || 'Pessoal'; }
  const a = S.accounts.get(t.account); return (a && a.entity) || 'Pessoal';
}
const txInScope = t => P.ent === '*' || txEntity(t) === P.ent;
const isOperational = t => (t.type === 'R' || t.type === 'D') && t.kind !== 'fatura' && !SYS_CATS.includes(t.cat);
const accName = id => (S.accounts.get(id) || {}).name || '—';
const cardName = id => (S.cards.get(id) || {}).name || '—';
const cashDate = t => t.status === 'pago' ? (t.paidDate || t.due || t.date) : (t.due || t.date);

// ---------- saldos ----------
function accBalance(id, until = null) {
  const a = S.accounts.get(id); if (!a) return 0;
  let b = +a.opening || 0;
  for (const t of S.tx.values()) {
    if (t.status !== 'pago' || t.card) continue;
    const d = t.paidDate || t.date; if (until && d > until) continue;
    const v = +t.amount || 0;
    if (t.type === 'R' && t.account === id) b += v;
    else if (t.type === 'D' && t.account === id) b -= v;
    else if (t.type === 'T') { if (t.account === id) b -= v; if (t.toAccount === id) b += v; }
  }
  return r2(b);
}
const totalBalance = (accs = scopeAccounts(), until = null) => r2(sum(accs, a => accBalance(a.id, until)));

// ---------- cartões ----------
function invoiceRefFor(card, ds) {
  const ym = ymOf(ds); const close = dateIn(ym, card.closeDay);
  const closeYm = ds < close ? ym : addMonths(ym, 1);
  return (+card.dueDay > +card.closeDay) ? closeYm : addMonths(closeYm, 1);
}
const invoiceDue = (card, ref) => dateIn(ref, card.dueDay);
const invoiceClose = (card, ref) => dateIn((+card.dueDay > +card.closeDay) ? ref : addMonths(ref, -1), card.closeDay);
function cardInvoices(cardId) {
  const card = S.cards.get(cardId); if (!card) return {};
  const map = {};
  const get = ref => map[ref] || (map[ref] = { ref, total: 0, paid: 0, items: [], payments: [] });
  for (const t of S.tx.values()) {
    if (t.card === cardId && (t.type === 'D' || t.type === 'R')) {
      const ref = t.invoice || invoiceRefFor(card, t.date); const e = get(ref);
      e.total += t.type === 'D' ? +t.amount : -t.amount; e.items.push(t);
    } else if (t.kind === 'fatura' && t.payCard === cardId && t.status === 'pago') {
      const e = get(t.invoice); e.paid += +t.amount; e.payments.push(t);
    }
  }
  const td = todayStr();
  Object.values(map).forEach(e => {
    e.total = r2(e.total); e.paid = r2(e.paid); e.open = r2(Math.max(0, e.total - e.paid));
    e.due = invoiceDue(card, e.ref); e.close = invoiceClose(card, e.ref);
    e.status = e.total <= 0.004 ? 'zerada' : e.open <= 0.004 ? 'paga' : td < e.close ? 'aberta' : td > e.due ? 'vencida' : 'fechada';
  });
  return map;
}
function cardUsed(cardId) { return r2(sum(Object.values(cardInvoices(cardId)), e => e.open)); }
function currentInvoiceRef(card) { return invoiceRefFor(card, todayStr()); }

// ---------- competência (DRE / orçamento) ----------
function compTotals(ym, filter = txInScope) {
  const out = { R: 0, D: 0, byCat: {}, byGroup: {}, bySub: {} };
  for (const t of S.tx.values()) {
    if (!isOperational(t) || ymOf(t.date) !== ym || !filter(t)) continue;
    const v = +t.amount || 0; const ci = catInfo(t.cat); const g = ci ? ci.dre : (t.type === 'R' ? 'rec_op' : 'desp_var');
    out[t.type] += v;
    out.byCat[t.cat || '(sem categoria)'] = (out.byCat[t.cat || '(sem categoria)'] || 0) + v;
    out.byGroup[g] = (out.byGroup[g] || 0) + v;
    const sk = (t.cat || '') + '›' + (t.sub || '');
    out.bySub[sk] = (out.bySub[sk] || 0) + v;
  }
  return out;
}
function avgComp(months = 6, endYm = addMonths(ymOf(todayStr()), -1)) {
  let R = 0, D = 0, n = 0; const groups = {};
  for (let i = 0; i < months; i++) {
    const c = compTotals(addMonths(endYm, -i));
    if (c.R || c.D) { n++; R += c.R; D += c.D; Object.entries(c.byGroup).forEach(([g, v]) => groups[g] = (groups[g] || 0) + v); }
  }
  n = n || 1; Object.keys(groups).forEach(g => groups[g] /= n);
  return { R: R / n, D: D / n, groups, n };
}

// ---------- caixa realizado ----------
function cashMonth(ym, accs = scopeAccounts()) {
  const A = new Set(accs.map(a => a.id)); const o = { in: 0, out: 0, byCat: {} };
  for (const t of S.tx.values()) {
    if (t.status !== 'pago' || t.card) continue;
    const d = t.paidDate || t.date; if (ymOf(d) !== ym) continue;
    const v = +t.amount || 0; let k = null;
    if (t.type === 'R' && A.has(t.account)) { o.in += v; k = ['in', t.cat || 'Outras receitas']; }
    else if (t.type === 'D' && A.has(t.account)) { o.out += v; k = ['out', t.kind === 'fatura' ? 'Faturas de cartão' : (t.cat || 'Outras despesas')]; }
    else if (t.type === 'T') {
      const fi = A.has(t.account), ti = A.has(t.toAccount);
      if (fi && !ti) { o.out += v; k = ['out', 'Transferências enviadas']; } else if (!fi && ti) { o.in += v; k = ['in', 'Transferências recebidas']; }
    }
    if (k) { const key = k[0] + '|' + k[1]; o.byCat[key] = (o.byCat[key] || 0) + v; }
  }
  o.net = r2(o.in - o.out); return o;
}

// ---------- a pagar / a receber ----------
function payables(type, horizonDays = 75) {
  const td = todayStr(); const lim = addDays(td, horizonDays);
  const items = txs().filter(t => t.status === 'pendente' && !t.card && t.type === type && txInScope(t) && (t.due || t.date) <= lim)
    .map(t => ({ t, due: t.due || t.date, amount: +t.amount, desc: t.desc, virtual: false }));
  if (type === 'D') {
    scopeCards().forEach(c => Object.values(cardInvoices(c.id)).forEach(e => {
      if (e.open > 0.004 && e.due <= lim) items.push({ virtual: true, card: c, inv: e, due: e.due, amount: e.open, desc: `Fatura ${c.name} · ${ymLabel(e.ref)}`, status: e.status });
    }));
  }
  return items.sort((a, b) => a.due.localeCompare(b.due));
}

// ---------- fluxo projetado diário ----------
function projectedDaily(days = 90, opts = {}) {
  const td = todayStr(); const accs = scopeAccounts(); let bal = totalBalance(accs);
  const ev = {};
  const add = (d, v, lbl) => { if (d < td) d = td; (ev[d] = ev[d] || []).push({ v, lbl }); };
  payables('R', days).forEach(p => add(p.due, +p.amount, p.desc));
  payables('D', days).forEach(p => add(p.due, -p.amount, p.desc));
  // faturas futuras (parcelas) além do horizonte de payables já estão incluídas até o limite
  const A = new Set(accs.map(a => a.id));
  txs().filter(t => t.status === 'pendente' && t.type === 'T').forEach(t => {
    const fi = A.has(t.account), ti = A.has(t.toAccount); if (fi !== ti) add(t.due || t.date, fi ? -t.amount : +t.amount, t.desc || 'Transferência');
  });
  const varDaily = opts.variable ? (avgComp(3).groups.desp_var || 0) / 30 : 0;
  const series = []; let min = { v: Infinity, d: td }, firstNeg = null;
  for (let i = 0; i <= days; i++) {
    const d = addDays(td, i); const e = ev[d] || [];
    const delta = sum(e, x => x.v) - (i > 0 ? varDaily : 0);
    bal = r2(bal + delta);
    series.push({ d, bal, delta, events: e });
    if (bal < min.v) min = { v: bal, d }; if (bal < 0 && !firstNeg) firstNeg = d;
  }
  return { series, min, firstNeg, start: totalBalance(accs), varDaily };
}

// ---------- patrimônio ----------
function assetsList(kind) { return [...S.assets.values()].filter(a => a.kind === kind && inEnt(a.entity)).sort(byName); }
function netWorth() {
  const cash = totalBalance();
  const assets = sum(assetsList('ativo'), a => a.value);
  const liab = sum(assetsList('passivo'), a => a.value);
  const cardsDebt = sum(scopeCards(), c => cardUsed(c.id));
  return { cash, assets, liab, cardsDebt, totalAssets: r2(cash + assets), totalLiab: r2(liab + cardsDebt), nw: r2(cash + assets - liab - cardsDebt) };
}

// ---------- orçamento ----------
function budgetRows(ym) {
  const comp = compTotals(ym);
  return [...S.budgets.values()].filter(b => inEnt(b.entity)).map(b => {
    const real = comp.byCat[b.cat] || 0; const ci = catInfo(b.cat);
    return { b, real: r2(real), plan: +b.amount, pct: b.amount ? real / b.amount : 0, type: ci ? ci.type : 'D' };
  }).sort((a, b) => b.pct - a.pct);
}

// ---------- metas ----------
function goalStatus(g) {
  const cur = g.account ? accBalance(g.account) : (+g.current || 0);
  const remain = Math.max(0, g.target - cur);
  const months = g.deadline ? Math.max(1, monthsBetween(ymOf(todayStr()), ymOf(g.deadline))) : null;
  const monthly = months ? remain / months : null;
  return { cur: r2(cur), remain: r2(remain), pct: g.target ? Math.min(1, cur / g.target) : 0, months, monthly };
}

// ---------- indicadores ----------
function indicators() {
  const avg = avgComp(6); const nw = netWorth();
  const cur = compTotals(P.ym); const prev = compTotals(addMonths(P.ym, -1));
  const liquid = nw.cash + sum(assetsList('ativo').filter(a => LIQUID_ASSETS.includes(a.cls)), a => a.value);
  const debtService = (avg.groups.desp_fin || 0) + avgCat('Parcelas e financiamentos');
  const recLiq = (cur.byGroup.rec_op || 0) + (cur.byGroup.rec_fin || 0) - (cur.byGroup.deducao || 0);
  const cardLim = sum(scopeCards(), c => +c.limit || 0), cardUse = sum(scopeCards(), c => cardUsed(c.id));
  const td = todayStr(), d30 = addDays(td, 30);
  const rec30 = sum(payables('R', 30).filter(p => p.due <= d30), p => p.amount);
  const pay30 = sum(payables('D', 30).filter(p => p.due <= d30), p => p.amount);
  return {
    savingsMonth: recLiq ? (recLiq - (cur.D - (cur.byGroup.deducao || 0))) / recLiq : null,
    savings6: avg.R ? (avg.R - avg.D) / avg.R : null,
    reserveMonths: avg.D ? liquid / avg.D : null,
    debtRatio: nw.totalAssets ? nw.totalLiab / nw.totalAssets : null,
    debtService: avg.R ? debtService / avg.R : null,
    fixedRatio: avg.R ? (avg.groups.desp_fixa || 0) / avg.R : null,
    cardUse: cardLim ? cardUse / cardLim : null,
    liquidity: (pay30) ? (nw.cash + rec30) / pay30 : null,
    expGrowth: prev.D ? cur.D / prev.D - 1 : null,
    nw: nw.nw, liquid, avg, cur, prev, rec30, pay30, cardLim, cardUseAmt: cardUse,
  };
}
function avgCat(cat, months = 6) { let s = 0; const end = addMonths(ymOf(todayStr()), -1); for (let i = 0; i < months; i++) s += compTotals(addMonths(end, -i)).byCat[cat] || 0; return s / months; }

// ---------- alertas ----------
function alerts() {
  const out = []; const td = todayStr(); const ad = cfg().alertDays;
  payables('D').forEach(p => {
    const dd = diffDays(td, p.due);
    if (dd < 0) out.push({ sev: 'danger', t: `Vencida há ${-dd} dia(s): ${p.desc}`, s: `${fmt(p.amount)} · venc. ${fmtDate(p.due)}`, go: 'pagar' });
    else if (dd <= ad) out.push({ sev: 'warning', t: dd === 0 ? `Vence hoje: ${p.desc}` : `Vence em ${dd} dia(s): ${p.desc}`, s: `${fmt(p.amount)} · ${fmtDate(p.due)}`, go: 'pagar' });
  });
  payables('R').forEach(p => { const dd = diffDays(td, p.due); if (dd < 0) out.push({ sev: 'warning', t: `Recebimento atrasado: ${p.desc}`, s: `${fmt(p.amount)} · previsto ${fmtDate(p.due)}`, go: 'receber' }); });
  scopeAccounts().forEach(a => { const b = accBalance(a.id); if (b < 0) out.push({ sev: 'danger', t: `Saldo negativo em ${a.name}`, s: fmt(b) + ' — risco de juros de cheque especial', go: 'bancos' }); });
  scopeCards().forEach(c => {
    const u = cardUsed(c.id); if (c.limit && u / c.limit >= 0.8) out.push({ sev: u / c.limit >= 0.95 ? 'danger' : 'warning', t: `Limite do cartão ${c.name} em ${pct(u / c.limit, 0)}`, s: `${fmt(u)} de ${fmt(c.limit)}`, go: 'cartoes' });
    const ref = currentInvoiceRef(c); const close = invoiceClose(c, ref); const dd = diffDays(td, close);
    if (dd >= 0 && dd <= 2) out.push({ sev: 'info', t: `Fatura ${c.name} fecha em ${dd === 0 ? 'hoje' : dd + ' dia(s)'}`, s: 'Compras após o fechamento entram na próxima fatura', go: 'cartoes' });
  });
  budgetRows(ymOf(td)).forEach(r => {
    if (r.type !== 'D' || !r.plan) return;
    if (r.pct >= 1) out.push({ sev: 'danger', t: `Orçamento estourado: ${r.b.cat}`, s: `${fmt(r.real)} de ${fmt(r.plan)} (${pct(r.pct, 0)})`, go: 'orcamento' });
    else if (r.pct >= 0.8) out.push({ sev: 'warning', t: `Orçamento em ${pct(r.pct, 0)}: ${r.b.cat}`, s: `Restam ${fmt(r.plan - r.real)}`, go: 'orcamento' });
  });
  const pj = projectedDaily(30);
  if (pj.firstNeg) out.push({ sev: 'danger', t: `Caixa projetado negativo em ${fmtDate(pj.firstNeg)}`, s: `Mínimo de ${fmt(pj.min.v)} em ${fmtDate(pj.min.d)}`, go: 'projetado' });
  const avg = avgComp(6); const sav = avg.R - avg.D;
  [...S.goals.values()].forEach(g => { const st = goalStatus(g); if (st.monthly && st.remain > 0 && st.monthly > Math.max(0, sav)) out.push({ sev: 'warning', t: `Meta "${g.name}" exige ${fmt(st.monthly)}/mês`, s: `Acima da sua poupança média (${fmt(sav)}/mês)`, go: 'metas' }); });
  const ind = indicators();
  if (ind.reserveMonths !== null && ind.reserveMonths < 3 && avg.D > 0) out.push({ sev: 'warning', t: 'Reserva de emergência abaixo de 3 meses', s: `Cobertura atual: ${ind.reserveMonths.toFixed(1).replace('.', ',')} meses de despesas`, go: 'indicadores' });
  const rank = { danger: 0, warning: 1, info: 2 };
  return out.sort((a, b) => rank[a.sev] - rank[b.sev]);
}

// ---------- projeção mensal (cenários) ----------
function projectMonths(o) {
  const avg = avgComp(o.base || 6); const nw = netWorth();
  const rows = []; let pl = nw.nw, inv = nw.cash + sum(assetsList('ativo').filter(a => LIQUID_ASSETS.includes(a.cls)), a => a.value);
  const gR = Math.pow(1 + o.incomeGrowth / 100, 1 / 12) - 1, gD = Math.pow(1 + o.inflation / 100, 1 / 12) - 1, y = Math.pow(1 + o.yield / 100, 1 / 12) - 1;
  let R = avg.R * (1 + o.scenario), D = avg.D * (1 - o.scenario * 0.5);
  let ym = ymOf(todayStr());
  for (let i = 1; i <= o.months; i++) {
    ym = addMonths(ym, 1); R *= 1 + gR; D *= 1 + gD;
    const sav = R - D + (o.extra || 0); const yieldv = Math.max(0, inv) * y;
    inv += sav + yieldv; pl += sav + yieldv;
    rows.push({ ym, R: r2(R), D: r2(D), sav: r2(sav), yieldv: r2(yieldv), inv: r2(inv), pl: r2(pl) });
  }
  return { rows, avg, nw };
}

// ---------- importação OFX / CSV ----------
function parseOFX(text) {
  const out = []; const blocks = text.split(/<STMTTRN>/i).slice(1);
  const tag = (b, n) => { const m = b.match(new RegExp('<' + n + '>([^<\\r\\n]*)', 'i')); return m ? m[1].trim() : ''; };
  blocks.forEach(b => {
    const dt = tag(b, 'DTPOSTED'); const amt = parseFloat(tag(b, 'TRNAMT').replace(',', '.'));
    if (!dt || isNaN(amt)) return;
    out.push({ date: `${dt.slice(0, 4)}-${dt.slice(4, 6)}-${dt.slice(6, 8)}`, amount: amt, desc: tag(b, 'MEMO') || tag(b, 'NAME') || 'Lançamento importado', fitid: tag(b, 'FITID') });
  });
  return out;
}
function parseCSV(text) {
  const lines = text.replace(/\r/g, '').split('\n').filter(l => l.trim());
  if (!lines.length) return [];
  const sep = (lines[0].match(/;/g) || []).length >= (lines[0].match(/,/g) || []).length ? ';' : ',';
  const split = l => { const r = []; let cur = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === sep && !q) { r.push(cur); cur = ''; } else cur += ch; } r.push(cur); return r.map(s => s.trim()); };
  const head = split(lines[0]).map(h => h.toLowerCase());
  const find = re => head.findIndex(h => re.test(h));
  let iD = find(/data|date/), iS = find(/desc|hist|memo|lan[cç]|estabelec|title/), iV = find(/valor|amount|value|montante/);
  let start = 1; if (iD < 0 || iV < 0) { iD = 0; iS = 1; iV = 2; start = /\d/.test(lines[0]) ? 0 : 1; }
  const toDate = s => { s = s.trim(); let m = s.match(/^(\d{2})[\/.-](\d{2})[\/.-](\d{2,4})/); if (m) { const y = m[3].length === 2 ? '20' + m[3] : m[3]; return `${y}-${m[2]}-${m[1]}`; } m = s.match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? m[0] : null; };
  return lines.slice(start).map(l => { const c = split(l); const d = toDate(c[iD] || ''); if (!d) return null; return { date: d, desc: c[iS] || 'Importado', amount: parseNum(c[iV]) }; }).filter(Boolean);
}
// sugestão de categoria por histórico
function learnCategory(desc) {
  const key = (desc || '').toLowerCase().replace(/[0-9*#\/.-]+/g, ' ').split(/\s+/).filter(w => w.length > 2).slice(0, 2).join(' ');
  if (!key) return null; const cnt = {};
  for (const t of S.tx.values()) { if (!t.cat || SYS_CATS.includes(t.cat)) continue; const k2 = (t.desc || '').toLowerCase().replace(/[0-9*#\/.-]+/g, ' ').split(/\s+/).filter(w => w.length > 2).slice(0, 2).join(' '); if (k2 === key) { const k = t.cat + '›' + (t.sub || ''); cnt[k] = (cnt[k] || 0) + 1; } }
  const best = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]; if (!best) return null;
  const [cat, sub] = best[0].split('›'); return { cat, sub };
}

// ---------- exportações ----------
function toCSV(rows) { return rows.map(r => r.map(v => { v = v == null ? '' : String(v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(';')).join('\n'); }
function txCSV() {
  const rows = [['Data', 'Vencimento', 'Pagamento', 'Tipo', 'Descrição', 'Categoria', 'Subcategoria', 'Conta', 'Cartão', 'Fatura', 'Centro de custo', 'Cliente/Fornecedor', 'Status', 'Valor']];
  txs().sort((a, b) => a.date.localeCompare(b.date)).forEach(t => rows.push([t.date, t.due || '', t.paidDate || '', { R: 'Receita', D: 'Despesa', T: 'Transferência' }[t.type], t.desc, t.cat || '', t.sub || '', t.account ? accName(t.account) : '', t.card ? cardName(t.card) : '', t.invoice || '', t.cc || '', t.party || '', t.status, String(t.type === 'D' ? -t.amount : +t.amount).replace('.', ',')]));
  return toCSV(rows);
}
function icsExport() {
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GestorFinanceiro//PT-BR', 'CALSCALE:GREGORIAN'];
  const ev = (id, d, title, desc) => { const ds = d.replace(/-/g, ''); L.push('BEGIN:VEVENT', 'UID:' + id + '@gfp', 'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z', 'DTSTART;VALUE=DATE:' + ds, 'DTEND;VALUE=DATE:' + ds.replace(/\d{8}/, x => addDays(d, 1).replace(/-/g, '')), 'SUMMARY:' + title.replace(/[,;]/g, ' '), 'DESCRIPTION:' + desc.replace(/[,;]/g, ' '), 'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:' + title.replace(/[,;]/g, ' '), 'END:VALARM', 'END:VEVENT'); };
  payables('D', 120).forEach((p, i) => ev(p.virtual ? 'inv' + p.card.id + p.inv.ref : p.t.id, p.due, '💸 Pagar: ' + p.desc, fmt(p.amount)));
  payables('R', 120).forEach(p => ev(p.t.id, p.due, '💰 Receber: ' + p.desc, fmt(p.amount)));
  L.push('END:VCALENDAR'); return L.join('\r\n');
}
function backupJSON() { return JSON.stringify({ app: 'gfp', version: 1, exportedAt: new Date().toISOString(), data: Object.fromEntries(COLS.map(c => [c, [...S[c].values()]])) }, null, 1); }
function aiContext() {
  const ind = indicators(); const nw = netWorth(); const cur = compTotals(P.ym);
  const months = []; for (let i = 5; i >= 0; i--) { const ym = addMonths(P.ym, -i); const c = compTotals(ym); months.push({ mes: ym, receitas: r2(c.R), despesas: r2(c.D), resultado: r2(c.R - c.D) }); }
  return {
    hoje: todayStr(), mes_analisado: P.ym, consolidacao: P.ent === '*' ? 'todas as entidades' : P.ent,
    patrimonio: nw, contas: scopeAccounts().map(a => ({ conta: a.name, tipo: a.type, saldo: accBalance(a.id) })),
    cartoes: scopeCards().map(c => ({ cartao: c.name, limite: +c.limit, usado: cardUsed(c.id) })),
    ultimos_6_meses: months,
    despesas_por_categoria_mes: Object.fromEntries(Object.entries(cur.byCat).filter(([k]) => catInfo(k)?.type !== 'R').sort((a, b) => b[1] - a[1]).map(([k, v]) => [k, r2(v)])),
    orcamento_mes: budgetRows(P.ym).map(r => ({ categoria: r.b.cat, orcado: r.plan, realizado: r.real })),
    indicadores: { taxa_poupanca_6m: ind.savings6, reserva_meses: ind.reserveMonths, endividamento: ind.debtRatio, comprometimento_dividas: ind.debtService, despesas_fixas_sobre_renda: ind.fixedRatio, uso_limite_cartoes: ind.cardUse, liquidez_30d: ind.liquidity },
    a_pagar_30d: r2(ind.pay30), a_receber_30d: r2(ind.rec30),
    metas: [...S.goals.values()].map(g => ({ meta: g.name, alvo: g.target, prazo: g.deadline, ...goalStatus(g) })),
    alertas: alerts().slice(0, 12).map(a => a.t + ' — ' + a.s),
  };
}
