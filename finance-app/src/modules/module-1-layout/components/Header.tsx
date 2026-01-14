// src/modules/module-1-layout/components/Header.tsx
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
              placeholder="Buscar transações, categorias..."
            />
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="action-button" 
            title="Filtrar"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ⚙️
          </button>
          <button 
            className="action-button" 
            title="Download"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ⬇️
          </button>
          <button className="primary-button">
            <span>+</span>
            <span>Nova Transação</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header