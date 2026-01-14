import React, { useState } from 'react'
import type { TransactionType, FilterState } from '../types/transaction'

interface TransactionFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({ onFilterChange }) => {
  // Definir explicitamente os tipos para evitar inferência incorreta
  const [filters, setFilters] = useState<FilterState>({
    types: ['income', 'expense', 'transfer'] as TransactionType[], // ← CAST explícito
    dateFrom: '',
    dateTo: '',
    categories: [],
    minAmount: null,
    maxAmount: null,
  })

  const categories = [
    { name: 'Alimentação', color: '#10b981', count: 12 },
    { name: 'Moradia', color: '#3b82f6', count: 8 },
    { name: 'Transporte', color: '#8b5cf6', count: 15 },
    { name: 'Lazer', color: '#f59e0b', count: 7 },
    { name: 'Saúde', color: '#ef4444', count: 5 },
    { name: 'Educação', color: '#06b6d4', count: 3 },
    { name: 'Salário', color: '#84cc16', count: 4 },
    { name: 'Investimentos', color: '#f97316', count: 9 },
  ]

  const handleTypeToggle = (type: TransactionType) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type]
    
    const newFilters: FilterState = { ...filters, types: newTypes }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleDateChange = (field: 'dateFrom' | 'dateTo', value: string) => {
    const newFilters: FilterState = { ...filters, [field]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category]
    
    const newFilters: FilterState = { ...filters, categories: newCategories }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleAmountChange = (field: 'minAmount' | 'maxAmount', value: string) => {
    const numValue = value === '' ? null : parseFloat(value)
    const newFilters: FilterState = { ...filters, [field]: numValue }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleClearFilters = () => {
    const clearedFilters: FilterState = {
      types: ['income', 'expense', 'transfer'] as TransactionType[], // ← CAST explícito
      dateFrom: '',
      dateTo: '',
      categories: [],
      minAmount: null,
      maxAmount: null,
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  return (
    <div className="filters-panel">
      <h2>🔍 Filtros</h2>

      {/* Filtro por Tipo */}
      <div className="filter-group">
        <h3>Tipo</h3>
        <div className="type-buttons">
          <button
            className={`type-button ${filters.types.includes('income') ? 'income active' : ''}`}
            onClick={() => handleTypeToggle('income')}
          >
            Receitas
          </button>
          <button
            className={`type-button ${filters.types.includes('expense') ? 'expense active' : ''}`}
            onClick={() => handleTypeToggle('expense')}
          >
            Despesas
          </button>
          <button
            className={`type-button ${filters.types.includes('transfer') ? 'transfer active' : ''}`}
            onClick={() => handleTypeToggle('transfer')}
          >
            Transferências
          </button>
        </div>
      </div>

      {/* Filtro por Data */}
      <div className="filter-group">
        <h3>Período</h3>
        <div className="date-filters">
          <input
            type="date"
            className="date-input"
            value={filters.dateFrom}
            onChange={(e) => handleDateChange('dateFrom', e.target.value)}
            placeholder="Data inicial"
          />
          <input
            type="date"
            className="date-input"
            value={filters.dateTo}
            onChange={(e) => handleDateChange('dateTo', e.target.value)}
            placeholder="Data final"
          />
        </div>
      </div>

      {/* Filtro por Valor */}
      <div className="filter-group">
        <h3>Valor (R$)</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="number"
            className="date-input"
            placeholder="Mín"
            value={filters.minAmount || ''}
            onChange={(e) => handleAmountChange('minAmount', e.target.value)}
            step="0.01"
            min="0"
          />
          <input
            type="number"
            className="date-input"
            placeholder="Máx"
            value={filters.maxAmount || ''}
            onChange={(e) => handleAmountChange('maxAmount', e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
      </div>

      {/* Filtro por Categoria */}
      <div className="filter-group">
        <h3>Categorias</h3>
        <div className="categories-list">
          {categories.map(category => (
            <div
              key={category.name}
              className="category-item"
              onClick={() => handleCategoryToggle(category.name)}
              style={{ cursor: 'pointer' }}
            >
              <div 
                className="category-color"
                style={{ backgroundColor: category.color }}
              />
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Limpar Filtros */}
      <button className="clear-filters" onClick={handleClearFilters}>
        Limpar Todos os Filtros
      </button>
    </div>
  )
}

export default TransactionFilters