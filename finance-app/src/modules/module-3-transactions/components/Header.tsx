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
              placeholder="Buscar transações, descrições, tags..."
            />
          </div>
        </div>

        <div className="header-actions">
          <button className="action-button" title="Filtrar">
            ⚙️
          </button>
          <button className="action-button" title="Download">
            ⬇️
          </button>
          <button className="primary-button" id="new-transaction-button">
            <span>+</span>
            <span>Nova Transação</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header