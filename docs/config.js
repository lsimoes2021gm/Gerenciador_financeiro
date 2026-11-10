// =====================================================================
// CONFIGURAÇÃO DO SUPABASE
// Supabase → Project Settings → API (ou "Connect"):
//   supabaseUrl  = Project URL          (ex.: https://abcdefgh.supabase.co)
//   supabaseKey  = anon public key  OU  Publishable key (sb_publishable_...)
// Essas duas informações são PÚBLICAS por natureza: a proteção dos dados
// é feita pelo login + regras de segurança (RLS) do arquivo supabase/schema.sql.
// NUNCA coloque aqui a "service_role" / "secret key".
// =====================================================================
window.GFP_CONFIG = {
  supabaseUrl: 'https://ewuxkeebclcieceirwsr.supabase.co',
  supabaseKey: 'sb_publishable_VdYPbKHSGOSOL9npqSVVVw_ne_jo-Ca',
  appName: 'Gestor Financeiro',
};
