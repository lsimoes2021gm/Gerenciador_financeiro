import React from 'react'

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', active: true },
    { icon: '📊', label: 'Transações' },
    { icon: '💰', label: 'Contas' },
    { icon: '💳', label: 'Cartões' },
    { icon: '📈', label: 'Orçamentos' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">💰 FinTrack</div>
        <div className="sidebar-subtitle">Módulo 2 - Dashboard</div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">JS</div>
          <div className="user-details">
            <div className="user-name">João Silva</div>
            <div className="user-email">Dashboard</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar