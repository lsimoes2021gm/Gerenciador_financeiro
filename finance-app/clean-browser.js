// clean-browser.js
// clean-browser-simple.js
console.log(`
╔═══════════════════════════════════════════╗
║         LIMPEZA DE CACHE DO NAVEGADOR     ║
╚═══════════════════════════════════════════╝

📋 PASSO A PASSO PARA LIMPAR CACHE:

1. CHROME / EDGE:
   • Pressione Ctrl+Shift+Delete
   • Selecione "Todo o período" ou "Desde o início"
   • MARQUE TODAS AS CAIXAS:
     ✓ Histórico de navegação
     ✓ Cookies e outros dados do site
     ✓ Imagens e arquivos em cache
   • Clique em "Limpar dados"

2. APÓS LIMPAR:
   • Feche TODAS as janelas do navegador
   • Abra novamente o navegador
   • Acesse: http://localhost:5173

3. SE PERSISTIR:
   • Tente em modo anônimo (Ctrl+Shift+N)
   • Verifique o console (F12) por erros

🎯 COMANDOS PARA EXECUTAR:

npm run dev:clean     # Limpa tudo e inicia
npm run module:2      # Vai para o módulo 2
npm run dev           # Inicia servidor

⚠️  IMPORTANTE:
Execute esses comandos no terminal do projeto!
`)