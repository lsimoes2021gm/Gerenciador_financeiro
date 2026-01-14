// switch-module.js
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const modules = [
  { name: 'module-0-base', path: 'src/modules/module-0-base/main.tsx' },
  { name: 'module-1-layout', path: 'src/modules/module-1-layout/main.tsx' },
  { name: 'module-2-dashboard', path: 'src/modules/module-2-dashboard/main.tsx' },
  { name: 'module-3-transactions', path: 'src/modules/module-3-transactions/main.tsx' },
  { name: 'module-4-forms', path: 'src/modules/module-4-forms/main.tsx' },
]

const moduleName = process.argv[2]

if (!moduleName) {
  console.log('📦 Módulos disponíveis:')
  modules.forEach(mod => console.log(`  → ${mod.name}`))
  console.log('\nUso: node switch-module.js <nome-do-modulo>')
  process.exit(1)
}

const module = modules.find(m => m.name === moduleName)

if (!module) {
  console.error(`❌ Módulo "${moduleName}" não encontrado!`)
  process.exit(1)
}

// Ler index.html
const indexPath = join(__dirname, 'index.html')
let htmlContent = readFileSync(indexPath, 'utf8')

// Atualizar script source
htmlContent = htmlContent.replace(
  /src="\/src\/modules\/[^"]+"/,
  `src="${module.path}"`
)

// Atualizar título
htmlContent = htmlContent.replace(
  /<title>[^<]+<\/title>/,
  `<title>Finance App - ${module.name}</title>`
)

// Escrever de volta
writeFileSync(indexPath, htmlContent, 'utf8')

console.log(`✅ Alterado para módulo: ${module.name}`)
console.log(`   Página: http://localhost:5173/`)

