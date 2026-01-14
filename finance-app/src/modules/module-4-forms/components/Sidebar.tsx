import React from 'react'

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', active: false },
    { icon: '📊', label: 'Transações', active: false },
    { icon: '📝', label: 'Formulários', active: true },
    { icon: '💰', label: 'Contas', active: false },
    { icon: '💳', label: 'Cartões', active: false },
    { icon: '📈', label: 'Orçamentos', active: false },
    { icon: '📋', label: 'Relatórios', active: false },
    { icon: '🎯', label: 'Metas', active: false },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">📝 FinForms</div>
        <div className="sidebar-subtitle">Módulo 4 - Formulários</div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            aria-label={`Ir para ${item.label}`}
            onClick={() => alert(`Navegando para ${item.label}`)}
            onKeyPress={(e) => e.key === 'Enter' && alert(`Navegando para ${item.label}`)}
          >
            <span className="menu-icon" aria-hidden="true">{item.icon}</span>
            <span className="menu-text">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar" aria-hidden="true">FF</div>
          <div className="user-details">
            <div className="user-name">Formulários Avançados</div>
            <div className="user-email">Módulo 4 - Validação</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar