// src/modules/module-0-base/App.tsx
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('✅ Módulo 0 carregado com CSS puro!')
    console.log('🎨 Estilos customizados aplicados')
  }, [])

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <h1 className="title">🚀 Módulo 0: CSS Puro</h1>
        <p className="subtitle">Projeto React + TypeScript funcionando com CSS customizado</p>
      </header>

      {/* Grid de Cards */}
      <div className="grid">
        {/* Card 1 - React */}
        <div className="card">
          <div className="card-header">
            <div className="icon icon-react">R</div>
            <div>
              <h3 className="card-title">React 18</h3>
              <p className="card-subtitle">Funcional</p>
            </div>
          </div>
          <p>Versão {React.version}</p>
        </div>

        {/* Card 2 - TypeScript */}
        <div className="card">
          <div className="card-header">
            <div className="icon icon-typescript">TS</div>
            <div>
              <h3 className="card-title">TypeScript</h3>
              <p className="card-subtitle">Tipagem ativa</p>
            </div>
          </div>
          <p>Tipagem estática configurada</p>
        </div>

        {/* Card 3 - CSS */}
        <div className="card">
          <div className="card-header">
            <div className="icon icon-css">CSS</div>
            <div>
              <h3 className="card-title">CSS Customizado</h3>
              <p className="card-subtitle">Estilos próprios</p>
            </div>
          </div>
          <p>Sem Tailwind, apenas CSS vanilla</p>
        </div>
      </div>

      {/* Teste de Cores */}
      <div className="buttons-section">
        <h2 className="section-title">Teste de Cores CSS</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="test-red p-6 rounded text-center">
            🔴 .test-red
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>background: #ef4444</div>
          </div>
          <div className="test-green p-6 rounded text-center">
            🟢 .test-green
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>background: #10b981</div>
          </div>
          <div className="test-blue p-6 rounded text-center">
            🔵 .test-blue
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>background: #3b82f6</div>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="buttons-section">
        <h2 className="section-title">Teste de Botões</h2>
        <div className="button-group">
          <button className="button button-primary">
            Botão Primário
          </button>
          <button className="button button-secondary">
            Botão Secundário
          </button>
          <button className="button button-outline">
            Botão Outline
          </button>
        </div>
      </div>

      {/* Diagnóstico */}
      <div className="diagnostic">
        <h2 className="diagnostic-title">🔍 Status do Sistema</h2>
        <p className="diagnostic-text mb-2">
          Se você está vendo esta página com estilos aplicados, o CSS está funcionando corretamente!
        </p>
        
        <ul className="diagnostic-list">
          <li className="diagnostic-item">
            <span className="status-good">✅ React funcionando</span> - A página carregou
          </li>
          <li className="diagnostic-item">
            <span className="status-good">✅ TypeScript ativo</span> - Sem erros de compilação
          </li>
          <li className="diagnostic-item">
            <span className="status-good">✅ CSS carregado</span> - Estilos visíveis
          </li>
          <li className="diagnostic-item">
            <span className="status-good">✅ Módulo 0 operacional</span> - Base configurada
          </li>
        </ul>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'white', borderRadius: '8px' }}>
          <h3 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>Próximos passos:</h3>
          <p style={{ color: '#4b5563' }}>
            1. Verifique se todas as cores e estilos estão visíveis<br/>
            2. Teste os botões (hover effect)<br/>
            3. Confirme no console que não há erros<br/>
            4. Prossiga para o Módulo 1 quando estiver tudo OK
          </p>
        </div>
      </div>

      {/* Mensagem final */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#dbeafe', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#1e40af', fontWeight: '500' }}>
          🎉 Base do projeto configurada com sucesso! Agora podemos adicionar Tailwind posteriormente.
        </p>
      </div>
    </div>
  )
}

export default App