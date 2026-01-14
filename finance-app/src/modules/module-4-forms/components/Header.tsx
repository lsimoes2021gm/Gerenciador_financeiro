import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="search-container">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar exemplos de formulários..."
              aria-label="Buscar exemplos de formulários"
              title="Digite para buscar exemplos de formulários"
            />
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="action-button" 
            title="Configurações"
            aria-label="Configurações"
          >
            ⚙️
          </button>
          <button 
            className="action-button" 
            title="Ajuda"
            aria-label="Ajuda"
          >
            ❓
          </button>
          <button 
            className="primary-button"
            onClick={() => alert('Novo formulário criado!')}
            aria-label="Criar novo formulário"
          >
            <span>+</span>
            <span>Novo Formulário</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header