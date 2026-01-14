import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TransactionFilters from './components/TransactionFilters'
import TransactionTable from './components/TransactionTable'
import TransactionForm from './components/TransactionForm'
import type { Transaction, TransactionFormData, FilterState } from './types/transaction'

// Dados iniciais mockados
const initialTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 2500.00,
    description: 'Salário Empresa X',
    category: 'Salário',
    date: '2024-01-25',
    account: 'NuBank',
    tags: ['fixo', 'trabalho'],
    notes: 'Salário mensal',
    recurring: true,
  },
  {
    id: '2',
    type: 'expense',
    amount: 189.90,
    description: 'Supermercado Extra',
    category: 'Alimentação',
    date: '2024-01-24',
    account: 'Inter',
    tags: ['compras', 'semanal'],
    notes: 'Compra semanal do mercado',
    recurring: false,
  },
  {
    id: '3',
    type: 'income',
    amount: 450.00,
    description: 'Freelance Site',
    category: 'Freelance',
    date: '2024-01-23',
    account: 'NuBank',
    tags: ['extra', 'trabalho'],
    notes: 'Desenvolvimento de site',
    recurring: false,
  },
  {
    id: '4',
    type: 'expense',
    amount: 89.90,
    description: 'Spotify Premium',
    category: 'Lazer',
    date: '2024-01-22',
    account: 'NuBank',
    tags: ['assinatura', 'música'],
    recurring: true,
  },
  {
    id: '5',
    type: 'expense',
    amount: 350.00,
    description: 'Academia',
    category: 'Saúde',
    date: '2024-01-21',
    account: 'Inter',
    tags: ['mensalidade', 'saúde'],
    recurring: true,
  },
  {
    id: '6',
    type: 'transfer',
    amount: 1000.00,
    description: 'Transferência para poupança',
    category: 'Transferência entre contas',
    date: '2024-01-20',
    account: 'Itaú',
    tags: ['poupança', 'investimento'],
    recurring: false,
  },
  {
    id: '7',
    type: 'expense',
    amount: 120.00,
    description: 'Combustível',
    category: 'Transporte',
    date: '2024-01-19',
    account: 'Carteira',
    tags: ['carro', 'gasolina'],
    recurring: false,
  },
  {
    id: '8',
    type: 'income',
    amount: 150.00,
    description: 'Venda de livros',
    category: 'Outros',
    date: '2024-01-18',
    account: 'Carteira',
    tags: ['venda', 'livros'],
    recurring: false,
  },
]

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(initialTransactions)
  const [showForm, setShowForm] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    console.log('✅ Módulo 3 (Transações) carregado!')
    console.log('💸 Sistema CRUD com CSS puro funcionando')
    
    // Configurar botão do header
    const newTransactionBtn = document.getElementById('new-transaction-button')
    if (newTransactionBtn) {
      newTransactionBtn.onclick = () => setShowForm(true)
    }
  }, [])

  // Aplicar filtros
  const handleFilterChange = (filters: FilterState) => {
    const filtered = transactions.filter(transaction => {
      // Filtro por tipo
      if (!filters.types.includes(transaction.type)) return false

      // Filtro por data
      if (filters.dateFrom && transaction.date < filters.dateFrom) return false
      if (filters.dateTo && transaction.date > filters.dateTo) return false

      // Filtro por categoria
      if (filters.categories.length > 0 && !filters.categories.includes(transaction.category)) return false

      // Filtro por valor
      if (filters.minAmount !== null && transaction.amount < filters.minAmount) return false
      if (filters.maxAmount !== null && transaction.amount > filters.maxAmount) return false

      return true
    })

    setFilteredTransactions(filtered)
  }

  // CRUD Operations
  const handleCreateTransaction = (formData: TransactionFormData) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      ...formData,
    }
    setTransactions(prev => [newTransaction, ...prev])
    setFilteredTransactions(prev => [newTransaction, ...prev])
    setShowForm(false)
  }

  const handleUpdateTransaction = (formData: TransactionFormData) => {
    if (!editingTransaction) return

    const updatedTransaction: Transaction = {
      ...editingTransaction,
      ...formData,
    }

    setTransactions(prev => prev.map(t => 
      t.id === editingTransaction.id ? updatedTransaction : t
    ))
    setFilteredTransactions(prev => prev.map(t => 
      t.id === editingTransaction.id ? updatedTransaction : t
    ))
    setEditingTransaction(null)
    setShowForm(false)
  }

  const handleDeleteTransactions = (ids: string[]) => {
    setTransactions(prev => prev.filter(t => !ids.includes(t.id)))
    setFilteredTransactions(prev => prev.filter(t => !ids.includes(t.id)))
    setSelectedIds(prev => prev.filter(id => !ids.includes(id)))
  }

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction)
    setShowForm(true)
  }

  // Seleção de itens
  const handleSelectTransaction = (id: string, checked: boolean) => {
    setSelectedIds(prev => 
      checked ? [...prev, id] : prev.filter(selectedId => selectedId !== id)
    )
  }

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? filteredTransactions.map(t => t.id) : [])
  }

  // Calcular totais
  const totals = {
    income: filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0),
    expense: filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0),
    transfer: filteredTransactions
      .filter(t => t.type === 'transfer')
      .reduce((sum, t) => sum + t.amount, 0),
  }

  const balance = totals.income - totals.expense

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <main className="transactions-content">
          {/* Cabeçalho */}
          <div className="transactions-header">
            <h1>💸 Gestão de Transações</h1>
            <p>Sistema completo de CRUD (Create, Read, Update, Delete) para suas transações financeiras</p>
            
            {/* Totais */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem', 
              marginTop: '1.5rem' 
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #10b981'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#065f46' }}>Receitas</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46' }}>
                  R$ {totals.income.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, #fee2e2, #fecaca)', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #ef4444'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#991b1b' }}>Despesas</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>
                  R$ {totals.expense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #3b82f6'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#1e40af' }}>Saldo</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>
                  R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>

          {/* Container Principal */}
          <div className="transactions-container">
            {/* Painel de Filtros */}
            <TransactionFilters onFilterChange={handleFilterChange} />

            {/* Painel de Transações */}
            <div className="transactions-panel">
              <div className="panel-header">
                <h2>Transações</h2>
                <button 
                  className="primary-button"
                  onClick={() => {
                    setEditingTransaction(null)
                    setShowForm(true)
                  }}
                >
                  + Nova Transação
                </button>
              </div>

              <TransactionTable
                transactions={filteredTransactions}
                onEdit={handleEditTransaction}
                onDelete={handleDeleteTransactions}
                selectedIds={selectedIds}
                onSelect={handleSelectTransaction}
                onSelectAll={handleSelectAll}
              />
            </div>
          </div>

          {/* Informações */}
          <div className="filters-panel" style={{ marginTop: '2rem' }}>
            <h2>📋 Funcionalidades do Módulo 3</h2>
            <div style={{ color: '#4b5563', lineHeight: '1.6' }}>
              <p><strong>✅ CRUD Completo:</strong></p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li><strong>C</strong>reate: Adicionar novas transações</li>
                <li><strong>R</strong>ead: Visualizar e filtrar transações</li>
                <li><strong>U</strong>pdate: Editar transações existentes</li>
                <li><strong>D</strong>elete: Excluir transações (individual ou em lote)</li>
              </ul>
              
              <p style={{ marginTop: '1rem' }}><strong>🎯 Filtros Avançados:</strong></p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Por tipo (receita, despesa, transferência)</li>
                <li>Por período (data inicial e final)</li>
                <li>Por categoria</li>
                <li>Por valor (mínimo e máximo)</li>
              </ul>
              
              <p style={{ marginTop: '1rem' }}><strong>📊 Totais Automáticos:</strong></p>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Soma das receitas</li>
                <li>Soma das despesas</li>
                <li>Saldo (receitas - despesas)</li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      {/* Modal do Formulário */}
      {showForm && (
        <TransactionForm
          initialData={editingTransaction || undefined}
          onSubmit={editingTransaction ? handleUpdateTransaction : handleCreateTransaction}
          onCancel={() => {
            setShowForm(false)
            setEditingTransaction(null)
          }}
        />
      )}
    </div>
  )
}

export default App