import React from 'react'
import Sidebar from './components/Sidebar'    // ← Agora importa dos arquivos
import Header from './components/Header'      // ← Agora importa dos arquivos
import MetricCard from './components/MetricCard'
import BalanceChart from './components/BalanceChart'
import RecentTransactions from './components/RecentTransactions'

function App() {
  React.useEffect(() => {
    console.log('✅ Módulo 2 (Dashboard) carregado!')
    console.log('📊 Dashboard com CSS puro funcionando')
  }, [])

  const accounts = [
    { name: 'NuBank', type: 'checking', balance: 5240.75 },
    { name: 'Inter', type: 'savings', balance: 10180.00 },
    { name: 'Carteira', type: 'cash', balance: 200.00 }
  ]

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <main className="dashboard-content">
          {/* Cabeçalho */}
          <div className="dashboard-header">
            <h1>📊 Dashboard Financeiro</h1>
            <p>Visão geral das suas finanças - Dados atualizados em tempo real</p>
          </div>

          {/* Grid de Métricas */}
          <div className="metrics-grid">
            <MetricCard
              title="Saldo Total"
              value={15420.75}
              icon="💰"
              type="balance"
            />
            <MetricCard
              title="Receita Mensal"
              value={5200.00}
              change={4.2}
              icon="📈"
              type="income"
            />
            <MetricCard
              title="Despesa Mensal"
              value={3420.50}
              change={-2.8}
              icon="📉"
              type="expense"
            />
            <MetricCard
              title="Saldo do Mês"
              value={1779.50}
              icon="💸"
              type="savings"
            />
          </div>

          {/* Gráficos e Contas */}
          <div className="charts-layout">
            <BalanceChart />
            
            <div className="accounts-container">
              <div className="accounts-header">
                <h2>Contas</h2>
              </div>
              <div className="accounts-list">
                {accounts.map((account, index) => (
                  <div key={index} className="account-item">
                    <div className="account-info">
                      <div className={`account-icon ${account.type}`}>
                        {account.type === 'checking' ? '🏦' : 
                         account.type === 'savings' ? '💰' : '💵'}
                      </div>
                      <div className="account-details">
                        <div className="account-name">{account.name}</div>
                        <div className="account-type">{account.type}</div>
                      </div>
                    </div>
                    <div className="account-balance">
                      R$ {account.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transações Recentes */}
          <RecentTransactions />

          {/* Status */}
          <div className="balance-chart-container" style={{ background: '#f0f9ff', borderColor: '#bae6fd' }}>
            <h2 style={{ color: '#0369a1' }}>✅ Dashboard Funcional com CSS Puro</h2>
            <p style={{ color: '#0c4a6e', marginTop: '0.5rem' }}>
              Este dashboard foi construído com:
            </p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', color: '#0c4a6e' }}>
              <li>CSS puro (sem Tailwind, Bootstrap, etc.)</li>
              <li>SVG para gráficos (sem bibliotecas externas)</li>
              <li>Layout responsivo completo</li>
              <li>Animações e transições CSS</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App