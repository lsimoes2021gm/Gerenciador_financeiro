import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  React.useEffect(() => {
    console.log('✅ Módulo 1 (Layout) carregado!')
    console.log('🎨 Layout com CSS puro funcionando')
  }, [])

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">
          <div className="mb-4">
            <h1 className="text-lg font-bold">🎨 Módulo 1: Layout Completo!</h1>
            <p className="text-sm">Sidebar e Header implementados com CSS puro.</p>
          </div>

          <div className="content-grid">
            <div className="content-card">
              <h3>✅ Sidebar Fixa</h3>
              <p>
                Menu lateral com gradiente e navegação. Posição fixa à esquerda.
              </p>
              <div className="mt-2 status-good">
                Funcionalidade: Navegação entre módulos
              </div>
            </div>

            <div className="content-card">
              <h3>✅ Header Responsivo</h3>
              <p>
                Cabeçalho com busca, ações e botão principal. Posição sticky.
              </p>
              <div className="mt-2 status-good">
                Funcionalidade: Busca e ações rápidas
              </div>
            </div>

            <div className="content-card">
              <h3>✅ Layout Flexível</h3>
              <p>
                Estrutura que se adapta a diferentes tamanhos de tela.
              </p>
              <div className="mt-2 status-info">
                Teste redimensionando a janela
              </div>
            </div>
          </div>

          <div className="content-card mt-4">
            <h2>Próximos Módulos</h2>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>📊 <strong>Módulo 2:</strong> Dashboard com gráficos</li>
              <li style={{ marginBottom: '0.5rem' }}>💸 <strong>Módulo 3:</strong> Lista de transações</li>
              <li style={{ marginBottom: '0.5rem' }}>📝 <strong>Módulo 4:</strong> Formulários</li>
              <li>🔗 <strong>Módulo 5:</strong> Backend e API</li>
            </ul>
          </div>

          <div className="content-card mt-4" style={{ background: '#f0f9ff', borderColor: '#bae6fd' }}>
            <h3 style={{ color: '#0369a1' }}>✅ Base Sólida Estabelecida</h3>
            <p style={{ color: '#0c4a6e' }}>
              Agora temos uma base funcional com CSS puro. Podemos:
            </p>
            <div className="mt-2">
              <ol style={{ paddingLeft: '1.5rem', color: '#0c4a6e' }}>
                <li>Continuar com CSS puro para manter simplicidade</li>
                <li>Adicionar Tailwind posteriormente se necessário</li>
                <li>Focar na funcionalidade, não no framework CSS</li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App