import React, { useState } from 'react'
import type { Transaction, TransactionType } from '../types/transaction'

interface TransactionTableProps {
  transactions: Transaction[]
  onEdit: (transaction: Transaction) => void
  onDelete: (ids: string[]) => void
  selectedIds: string[]
  onSelect: (id: string, checked: boolean) => void
  onSelectAll: (checked: boolean) => void
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  onEdit,
  onDelete,
  selectedIds,
  onSelect,
  onSelectAll,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Paginação
  const totalPages = Math.ceil(transactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTransactions = transactions.slice(startIndex, endIndex)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR')
  }

  const getTypeIcon = (type: TransactionType) => {
    switch (type) {
      case 'income': return '↑'
      case 'expense': return '↓'
      case 'transfer': return '↔'
      default: return '?'
    }
  }

  const getAmountClass = (type: TransactionType) => {
    switch (type) {
      case 'income': return 'amount-income'
      case 'expense': return 'amount-expense'
      case 'transfer': return 'amount-transfer'
      default: return ''
    }
  }

  const handleDeleteSelected = () => {
    if (selectedIds.length > 0 && window.confirm(`Deseja excluir ${selectedIds.length} transação(ões)?`)) {
      onDelete(selectedIds)
    }
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <>
      {/* Controles da Tabela */}
      <div className="table-controls">
        <div className="transaction-count">
          {transactions.length} transação{transactions.length !== 1 ? 'es' : ''} encontrada{transactions.length !== 1 ? 's' : ''}
        </div>
        <div className="table-actions">
          <button 
            className="table-button delete"
            onClick={handleDeleteSelected}
            disabled={selectedIds.length === 0}
          >
            🗑️ Excluir Selecionadas ({selectedIds.length})
          </button>
          <button className="table-button">
            📤 Exportar CSV
          </button>
        </div>
      </div>

      {/* Tabela */}
      <table className="transactions-table">
        <thead>
          <tr>
            <th className="select-cell">
              <input
                type="checkbox"
                className="select-checkbox"
                checked={selectedIds.length === transactions.length && transactions.length > 0}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </th>
            <th className="type-cell">Tipo</th>
            <th className="description-cell">Descrição</th>
            <th>Categoria</th>
            <th>Conta</th>
            <th>Data</th>
            <th className="amount-cell">Valor</th>
            <th className="actions-cell">Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="select-cell">
                <input
                  type="checkbox"
                  className="select-checkbox"
                  checked={selectedIds.includes(transaction.id)}
                  onChange={(e) => onSelect(transaction.id, e.target.checked)}
                />
              </td>
              <td className="type-cell">
                <div className={`type-icon ${transaction.type}`}>
                  {getTypeIcon(transaction.type)}
                </div>
              </td>
              <td className="description-cell">
                <div className="transaction-description">
                  {transaction.description}
                </div>
                {transaction.tags.length > 0 && (
                  <div className="transaction-tags">
                    {transaction.tags.map(tag => (
                      <span key={tag} className="transaction-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {transaction.recurring && (
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: '#8b5cf6',
                    fontWeight: '500'
                  }}>
                    🔄 Recorrente
                  </span>
                )}
              </td>
              <td>
                <span className="category-badge" style={{ 
                  backgroundColor: transaction.type === 'income' ? '#d1fae5' : 
                                 transaction.type === 'expense' ? '#fee2e2' : '#e0e7ff',
                  color: transaction.type === 'income' ? '#065f46' : 
                        transaction.type === 'expense' ? '#991b1b' : '#3730a3'
                }}>
                  {transaction.category}
                </span>
              </td>
              <td>{transaction.account}</td>
              <td>{formatDate(transaction.date)}</td>
              <td className={`amount-cell ${getAmountClass(transaction.type)}`}>
                {transaction.type === 'income' ? '+' : 
                 transaction.type === 'expense' ? '-' : ''}
                {formatCurrency(transaction.amount)}
              </td>
              <td className="actions-cell">
                <div className="action-icons">
                  <button 
                    className="action-icon edit"
                    onClick={() => onEdit(transaction)}
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button 
                    className="action-icon delete"
                    onClick={() => onDelete([transaction.id])}
                    title="Excluir"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum
            if (totalPages <= 5) {
              pageNum = i + 1
            } else if (currentPage <= 3) {
              pageNum = i + 1
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i
            } else {
              pageNum = currentPage - 2 + i
            }
            
            return (
              <button
                key={pageNum}
                className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            )
          })}
          
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            →
          </button>
          
          <span className="pagination-info">
            Página {currentPage} de {totalPages}
          </span>
        </div>
      )}
    </>
  )
}

export default TransactionTable