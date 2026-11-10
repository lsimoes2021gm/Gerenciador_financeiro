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
  supabaseUrl: 'https://SEU-PROJETO.supabase.co',
  supabaseKey: 'COLE_AQUI_A_CHAVE_ANON_OU_PUBLISHABLE',
  appName: 'Gestor Financeiro',
};
