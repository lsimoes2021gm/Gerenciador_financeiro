# Gestor Financeiro & Patrimonial (web)

Sistema de gestão financeira e patrimonial que roda 100% no navegador (HTML + JavaScript puro, Chart.js via CDN).

## Módulos
Dashboard · Lançamentos · Contas a pagar · Contas a receber · Cartões de crédito · Bancos e contas · Fluxo de caixa · Fluxo projetado · DRE gerencial · Orçamento · Projeções · Patrimônio · Metas · Indicadores · Alertas · Integrações & IA · Configurações

## Arquivos
- `index.html` — layout e estilos
- `core.js` — camada de dados e motor financeiro (saldos, faturas, DRE, fluxo, indicadores, alertas, importação OFX/CSV)
- `views.js` — telas, formulários e gráficos

## Modos de armazenamento
- **Dentro do Claude (artifact):** banco em nuvem compartilhado, multiusuário, sincronizado entre PC e celular, com IA e integração ao Google Drive.
- **Fora do Claude (GitHub Pages ou arquivo local):** modo local — os dados ficam no `localStorage` do navegador em uso. Use *Configurações → Dados → Baixar backup / Restaurar* para mover os dados entre aparelhos.

## Publicar no GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → selecione a branch e a pasta. Como o app fica em `/gestor-web`, acesse `https://<usuario>.github.io/<repo>/gestor-web/` (requer repositório público ou plano pago para Pages em repo privado).
