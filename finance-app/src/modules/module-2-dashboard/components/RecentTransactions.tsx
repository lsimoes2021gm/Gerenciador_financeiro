import React from 'react'

interface Transaction {
  id: string
  type: 'income' | 'expense'
  amount: number
  description: string
  category: string
  date: string
  account: string
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'income',
      amount: 2500.00,
      description: 'Salário Empresa X',
      category: 'Salário',
      date: '2024-01-25',
      account: 'NuBank'
    },
    {
      id: '2',
      type: 'expense',
      amount: 189.90,
      description: 'Supermercado Extra',
      category: 'Alimentação',
      date: '2024-01-24',
      account: 'Inter'
    },
    {
      id: '3',
      type: 'income',
      amount: 450.00,
      description: 'Freelance Site',
      category: 'Freelance',
      date: '2024-01-23',
      account: 'NuBank'
    },
    {
      id: '4',
      type: 'expense',
      amount: 89.90,
      description: 'Spotify Premium',
      category: 'Entretenimento',
      date: '2024-01-22',
      account: 'NuBank'
    },
    {
      id: '5',
      type: 'expense',
      amount: 350.00,
      description: 'Academia',
      category: 'Saúde',
      date: '2024-01-21',
      account: 'Inter'
    }
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short'
    })
  }

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2>Transações Recentes</h2>
        <a href="#" className="view-all-button">
          Ver todas →
        </a>
      </div>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Conta</th>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={`transaction-icon ${transaction.type}`}>
                    {transaction.type === 'income' ? '↑' : '↓'}
                  </div>
                  <div>
                    <div className="transaction-description">
                      {transaction.description}
                    </div>
                    <div className="transaction-details">
                      <span className="transaction-category">
                        {transaction.category}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.account}</td>
              <td>{formatDate(transaction.date)}</td>
              <td>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentTransactions