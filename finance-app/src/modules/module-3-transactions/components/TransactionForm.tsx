import React, { useState } from 'react'
import type { TransactionFormData, TransactionType, defaultCategories } from '../types/transaction'

interface TransactionFormProps {
  initialData?: Partial<TransactionFormData>
  onSubmit: (data: TransactionFormData) => void
  onCancel: () => void
}

const TransactionForm: React.FC<TransactionFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel 
}) => {
  const [formData, setFormData] = useState<TransactionFormData>({
    type: initialData?.type || 'expense',
    amount: initialData?.amount || 0,
    description: initialData?.description || '',
    category: initialData?.category || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    account: initialData?.account || '',
    tags: initialData?.tags || [],
    notes: initialData?.notes || '',
    recurring: initialData?.recurring || false,
  })

  const [newTag, setNewTag] = useState('')

  const categories = {
    income: ['Salário', 'Freelance', 'Investimentos', 'Presente', 'Outros'],
    expense: ['Alimentação', 'Moradia', 'Transporte', 'Lazer', 'Saúde', 'Educação', 'Compras', 'Outros'],
    transfer: ['Transferência entre contas', 'Pagamento', 'Outros']
  }

  const accounts = [
    { id: 'nubank', name: 'NuBank', type: 'checking' },
    { id: 'inter', name: 'Inter', type: 'savings' },
    { id: 'carteira', name: 'Carteira', type: 'cash' },
    { id: 'itau', name: 'Itaú', type: 'checking' },
    { id: 'bradesco', name: 'Bradesco', type: 'credit' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault()
      handleAddTag()
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{initialData ? 'Editar Transação' : 'Nova Transação'}</h2>
          <button 
            className="close-button" 
            onClick={onCancel}
            aria-label="Fechar formulário"
          >
        
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Tipo de Transação */}
            <div className="form-group">
              <label htmlFor="transaction-type">Tipo de Transação</label>
              <div className="type-buttons" role="group" aria-labelledby="transaction-type">
                <button
                  type="button"
                  className={`type-button ${formData.type === 'income' ? 'income active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
                  aria-pressed={formData.type === 'income'}
                  aria-label="Receita"
                >
                  Receita
                </button>
                <button
                  type="button"
                  className={`type-button ${formData.type === 'expense' ? 'expense active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
                  aria-pressed={formData.type === 'expense'}
                  aria-label="Despesa"
                >
                  Despesa
                </button>
                <button
                  type="button"
                  className={`type-button ${formData.type === 'transfer' ? 'transfer active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'transfer' }))}
                  aria-pressed={formData.type === 'transfer'}
                  aria-label="Transferência"
                >
                  Transferência
                </button>
              </div>
            </div>

            <div className="form-row">
              {/* Valor */}
              <div className="form-group">
                <label htmlFor="transaction-amount">Valor (R$)</label>
                <input
                  id="transaction-amount"
                  type="number"
                  className="form-input"
                  step="0.01"
                  min="0"
                  value={formData.amount || ''}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    amount: parseFloat(e.target.value) || 0 
                  }))}
                  required
                  aria-required="true"
                  placeholder="0,00"
                  title="Digite o valor da transação"
                />
              </div>

              {/* Data */}
              <div className="form-group">
                <label htmlFor="transaction-date">Data</label>
                <input
                  id="transaction-date"
                  type="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  required
                  aria-required="true"
                  title="Selecione a data da transação"
                />
              </div>
            </div>

            {/* Descrição */}
            <div className="form-group">
              <label htmlFor="transaction-description">Descrição</label>
              <input
                id="transaction-description"
                type="text"
                className="form-input"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Ex: Supermercado Extra, Salário Empresa X..."
                required
                aria-required="true"
                title="Digite a descrição da transação"
              />
            </div>

            <div className="form-row">
              {/* Categoria */}
              <div className="form-group">
                <label htmlFor="transaction-category">Categoria</label>
                <select
                  id="transaction-category"
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  required
                  aria-required="true"
                  aria-label="Selecione uma categoria"
                  title="Selecione a categoria da transação"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories[formData.type].map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Conta */}
              <div className="form-group">
                <label htmlFor="transaction-account">Conta</label>
                <select
                  id="transaction-account"
                  className="form-select"
                  value={formData.account}
                  onChange={(e) => setFormData(prev => ({ ...prev, account: e.target.value }))}
                  required
                  aria-required="true"
                  aria-label="Selecione uma conta"
                  title="Selecione a conta da transação"
                >
                  <option value="">Selecione uma conta</option>
                  {accounts.map(account => (
                    <option key={account.id} value={account.name}>
                      {account.name} ({account.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div className="form-group">
              <label htmlFor="transaction-tags">Tags</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  id="transaction-tags"
                  type="text"
                  className="form-input"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite uma tag e pressione Enter"
                  title="Adicione tags para categorizar a transação"
                  aria-label="Campo para adicionar tags"
                />
                <button
                  type="button"
                  className="primary-button"
                  onClick={handleAddTag}
                  style={{ whiteSpace: 'nowrap' }}
                  aria-label="Adicionar tag"
                >
                  Adicionar
                </button>
              </div>
              <div className="tags-container" aria-label="Tags adicionadas">
                {formData.tags.map(tag => (
                  <span key={tag} className="tag" aria-label={`Tag: ${tag}`}>
                    {tag}
                    <button
                      type="button"
                      className="remove-tag"
                      onClick={() => handleRemoveTag(tag)}
                      aria-label={`Remover tag ${tag}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Notas */}
            <div className="form-group">
              <label htmlFor="transaction-notes">Notas (Opcional)</label>
              <textarea
                id="transaction-notes"
                className="form-textarea"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Observações adicionais sobre esta transação..."
                rows={3}
                title="Adicione observações sobre a transação"
                aria-label="Campo para observações adicionais"
              />
            </div>

            {/* Recorrente */}
            <div className="form-group">
              <label htmlFor="transaction-recurring" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  id="transaction-recurring"
                  type="checkbox"
                  checked={formData.recurring}
                  onChange={(e) => setFormData(prev => ({ ...prev, recurring: e.target.checked }))}
                  style={{ width: '18px', height: '18px' }}
                  aria-label="Transação recorrente"
                  title="Marque se a transação é recorrente"
                />
                <span>Transação recorrente (mensal)</span>
              </label>
            </div>
          </div>

          {/* Ações do Formulário */}
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onCancel}
              aria-label="Cancelar e fechar formulário"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="submit-button"
              aria-label={initialData ? 'Atualizar transação' : 'Criar transação'}
            >
              {initialData ? 'Atualizar' : 'Criar'} Transação
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TransactionForm