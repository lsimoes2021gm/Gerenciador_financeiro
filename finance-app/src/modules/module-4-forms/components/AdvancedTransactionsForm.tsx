import React, { useState } from 'react'
import { validateAmount, validateDate } from '../utils/validators'
import { applyMask } from '../utils/masks'
import { formatCurrency } from '../utils/formatters'

interface AdvancedTransactionFormData {
  description: string
  amount: string
  date: string
  category: string
  subcategory: string
  paymentMethod: string
  installments: number
  tags: string[]
  notes: string
  receipt: File | null
  isRecurring: boolean
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly'
  recurrenceEndDate: string
}

const AdvancedTransactionForm: React.FC = () => {
  const [formData, setFormData] = useState<AdvancedTransactionFormData>({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    subcategory: '',
    paymentMethod: 'cash',
    installments: 1,
    tags: [],
    notes: '',
    receipt: null,
    isRecurring: false,
    recurrenceType: 'monthly',
    recurrenceEndDate: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [newTag, setNewTag] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = {
    expense: {
      'Alimentação': ['Supermercado', 'Restaurante', 'Lanches', 'Delivery'],
      'Moradia': ['Aluguel', 'Condomínio', 'Energia', 'Água', 'Internet'],
      'Transporte': ['Combustível', 'Ônibus', 'Metrô', 'Uber', 'Manutenção'],
      'Saúde': ['Plano de Saúde', 'Médico', 'Farmácia', 'Academia'],
      'Educação': ['Faculdade', 'Cursos', 'Livros', 'Material'],
      'Lazer': ['Cinema', 'Streaming', 'Viagens', 'Hobbies'],
      'Compras': ['Roupas', 'Eletrônicos', 'Presentes', 'Casa']
    },
    income: {
      'Salário': ['CLT', 'PJ', 'Estágio'],
      'Freelance': ['Desenvolvimento', 'Design', 'Consultoria'],
      'Investimentos': ['Dividendos', 'Juros', 'Renda Fixa'],
      'Presentes': ['Familiares', 'Amigos'],
      'Outros': ['Vendas', 'Reembolsos', 'Prêmios']
    }
  }

  const paymentMethods = [
    { value: 'cash', label: '💵 Dinheiro' },
    { value: 'debit', label: '💳 Débito' },
    { value: 'credit', label: '📈 Crédito' },
    { value: 'pix', label: '📱 PIX' },
    { value: 'transfer', label: '🔄 Transferência' },
    { value: 'boleto', label: '🧾 Boleto' },
    { value: 'other', label: '📦 Outro' }
  ]

  const recurrenceTypes = [
    { value: 'daily', label: 'Diário' },
    { value: 'weekly', label: 'Semanal' },
    { value: 'monthly', label: 'Mensal' },
    { value: 'yearly', label: 'Anual' }
  ]

  const handleChange = (field: keyof AdvancedTransactionFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Limpar erro ao alterar campo
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleAmountChange = (value: string) => {
    // Formatar valor monetário
    const numericValue = value.replace(/\D/g, '')
    if (numericValue) {
      const amount = parseInt(numericValue) / 100
      const formatted = amount.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      handleChange('amount', `R$ ${formatted}`)
    } else {
      handleChange('amount', '')
    }
  }

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleChange('tags', [...formData.tags, newTag.trim()])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    handleChange('tags', formData.tags.filter(tag => tag !== tagToRemove))
  }

  const handleFileUpload = (file: File | null) => {
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, receipt: 'Arquivo muito grande (máx. 5MB)' }))
      return
    }
    handleChange('receipt', file)
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validação de descrição
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória'
    } else if (formData.description.length < 3) {
      newErrors.description = 'Descrição muito curta'
    }

    // Validação de valor
    const amountValue = parseFloat(formData.amount.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0
    const amountValidation = validateAmount(amountValue)
    if (!amountValidation.isValid) {
      newErrors.amount = amountValidation.message
    }

    // Validação de data
    const dateValidation = validateDate(formData.date)
    if (!dateValidation.isValid) {
      newErrors.date = dateValidation.message
    }

    // Validação de categoria
    if (!formData.category) {
      newErrors.category = 'Categoria é obrigatória'
    }

    // Validação de método de pagamento
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Método de pagamento é obrigatório'
    }

    // Validação de parcelas
    if (formData.installments < 1 || formData.installments > 36) {
      newErrors.installments = 'Número de parcelas inválido (1-36)'
    }

    // Validação de recorrência
    if (formData.isRecurring) {
      if (!formData.recurrenceEndDate) {
        newErrors.recurrenceEndDate = 'Data final é obrigatória para recorrência'
      } else {
        const endDate = new Date(formData.recurrenceEndDate)
        const startDate = new Date(formData.date)
        if (endDate <= startDate) {
          newErrors.recurrenceEndDate = 'Data final deve ser após a data inicial'
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('✅ Transação avançada registrada com sucesso!')
      setIsSubmitting(false)
      
      // Resetar formulário
      setFormData({
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
        subcategory: '',
        paymentMethod: 'cash',
        installments: 1,
        tags: [],
        notes: '',
        receipt: null,
        isRecurring: false,
        recurrenceType: 'monthly',
        recurrenceEndDate: ''
      })
      setErrors({})
      setNewTag('')
    }
  }

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja limpar todos os campos?')) {
      setFormData({
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
        subcategory: '',
        paymentMethod: 'cash',
        installments: 1,
        tags: [],
        notes: '',
        receipt: null,
        isRecurring: false,
        recurrenceType: 'monthly',
        recurrenceEndDate: ''
      })
      setErrors({})
      setNewTag('')
    }
  }

  const renderCategoryOptions = () => {
    const type = formData.amount.startsWith('-') ? 'expense' : 'income'
    return Object.entries(categories[type]).map(([category, subcategories]) => (
      <optgroup key={category} label={category}>
        {subcategories.map(subcat => (
          <option key={subcat} value={`${category}|${subcat}`}>
            {category} › {subcat}
          </option>
        ))}
      </optgroup>
    ))
  }

  return (
    <div className="form-container">
      <h3>🚀 Formulário Avançado de Transação</h3>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Formulário completo com categorias hierárquicas, parcelamento, recorrência, tags e upload de comprovante
      </p>

      <form onSubmit={handleSubmit}>
        {/* Linha 1: Descrição e Valor */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="description" className="required">
              Descrição
            </label>
            <input
              id="description"
              type="text"
              className={`form-input ${errors.description ? 'error' : ''}`}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Ex: Supermercado Extra, Salário Empresa X..."
              aria-label="Descrição da transação"
              aria-invalid={!!errors.description}
            />
            {errors.description && (
              <div className="validation-message error">⚠️ {errors.description}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="amount" className="required">
              Valor
            </label>
            <div className="masked-input">
              <input
                id="amount"
                type="text"
                className={`form-input ${errors.amount ? 'error' : ''}`}
                value={formData.amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="R$ 0,00"
                aria-label="Valor da transação"
                aria-invalid={!!errors.amount}
              />
              <span className="mask-hint">R$</span>
            </div>
            {errors.amount && (
              <div className="validation-message error">⚠️ {errors.amount}</div>
            )}
          </div>
        </div>

        {/* Linha 2: Data e Categoria */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date" className="required">
              Data
            </label>
            <input
              id="date"
              type="date"
              className={`form-input ${errors.date ? 'error' : ''}`}
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              aria-label="Data da transação"
              aria-invalid={!!errors.date}
            />
            {errors.date && (
              <div className="validation-message error">⚠️ {errors.date}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category" className="required">
              Categoria
            </label>
            <select
              id="category"
              className={`form-select ${errors.category ? 'error' : ''}`}
              value={formData.category ? `${formData.category}|${formData.subcategory}` : ''}
              onChange={(e) => {
                const [category, subcategory] = e.target.value.split('|')
                handleChange('category', category)
                handleChange('subcategory', subcategory)
              }}
              aria-label="Categoria da transação"
              aria-invalid={!!errors.category}
            >
              <option value="">Selecione uma categoria...</option>
              {renderCategoryOptions()}
            </select>
            {errors.category && (
              <div className="validation-message error">⚠️ {errors.category}</div>
            )}
            {formData.category && formData.subcategory && (
              <div className="validation-message info">
                📁 {formData.category} › {formData.subcategory}
              </div>
            )}
          </div>
        </div>

        {/* Linha 3: Método de Pagamento e Parcelas */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="paymentMethod" className="required">
              Método de Pagamento
            </label>
            <div className="radio-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {paymentMethods.map(method => (
                <div key={method.value} className="radio-item">
                  <input
                    type="radio"
                    id={`method-${method.value}`}
                    name="paymentMethod"
                    value={method.value}
                    checked={formData.paymentMethod === method.value}
                    onChange={(e) => handleChange('paymentMethod', e.target.value)}
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor={`method-${method.value}`}
                    style={{
                      display: 'block',
                      padding: '0.5rem',
                      border: `2px solid ${formData.paymentMethod === method.value ? '#3b82f6' : '#d1d5db'}`,
                      borderRadius: '8px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      backgroundColor: formData.paymentMethod === method.value ? '#dbeafe' : 'white',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {method.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.paymentMethod && (
              <div className="validation-message error">⚠️ {errors.paymentMethod}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="installments">
              Parcelas
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input
                id="installments"
                type="range"
                min="1"
                max="36"
                value={formData.installments}
                onChange={(e) => handleChange('installments', parseInt(e.target.value))}
                style={{ flex: 1 }}
                aria-label="Número de parcelas"
              />
              <span style={{ 
                minWidth: '60px', 
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#3b82f6'
              }}>
                {formData.installments}x
              </span>
            </div>
            {errors.installments && (
              <div className="validation-message error">⚠️ {errors.installments}</div>
            )}
            <div className="validation-message info" style={{ marginTop: '0.5rem' }}>
              💳 {formData.installments === 1 ? 'À vista' : `${formData.installments} parcelas`}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="form-group">
          <label htmlFor="tags">
            Tags
          </label>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              id="tags"
              type="text"
              className="form-input"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Digite uma tag e pressione Enter"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              aria-label="Adicionar tag"
            />
            <button
              type="button"
              className="primary-button"
              onClick={handleAddTag}
              style={{ whiteSpace: 'nowrap' }}
            >
              Adicionar
            </button>
          </div>
          <div className="tags-container">
            {formData.tags.map(tag => (
              <span key={tag} className="tag">
                #{tag}
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
          <label htmlFor="notes">
            Observações
          </label>
          <textarea
            id="notes"
            className="form-textarea"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            placeholder="Observações adicionais sobre esta transação..."
            rows={3}
            aria-label="Observações da transação"
          />
        </div>

        {/* Upload de Comprovante */}
        <div className="form-group">
          <label htmlFor="receipt">
            Comprovante (Opcional)
          </label>
          <div 
            className="file-upload-area"
            onClick={() => document.getElementById('fileInput')?.click()}
            style={{ cursor: 'pointer' }}
          >
            <div className="file-upload-icon">
              {formData.receipt ? '📄' : '📎'}
            </div>
            <p>
              {formData.receipt 
                ? `Arquivo: ${formData.receipt.name}`
                : 'Clique para selecionar ou arraste o comprovante'
              }
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
              PDF, JPG ou PNG (máx. 5MB)
            </p>
            <input
              id="fileInput"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
            />
          </div>
          {formData.receipt && (
            <div className="file-item">
              <div className="file-info">
                <div className="file-icon">📄</div>
                <div className="file-details">
                  <div className="file-name">{formData.receipt.name}</div>
                  <div className="file-size">
                    {(formData.receipt.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              </div>
              <button 
                type="button"
                className="file-remove"
                onClick={() => handleFileUpload(null)}
                aria-label="Remover comprovante"
              >
                ✕
              </button>
            </div>
          )}
          {errors.receipt && (
            <div className="validation-message error">⚠️ {errors.receipt}</div>
          )}
        </div>

        {/* Configuração de Recorrência */}
        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={formData.isRecurring}
              onChange={(e) => handleChange('isRecurring', e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <span style={{ fontWeight: '500' }}>Transação Recorrente</span>
          </label>

          {formData.isRecurring && (
            <div style={{ 
              padding: '1rem', 
              background: '#f0f9ff', 
              borderRadius: '8px',
              marginTop: '0.5rem'
            }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="recurrenceType">
                    Frequência
                  </label>
                  <select
                    id="recurrenceType"
                    className="form-select"
                    value={formData.recurrenceType}
                    onChange={(e) => handleChange('recurrenceType', e.target.value as any)}
                    aria-label="Frequência da recorrência"
                  >
                    {recurrenceTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="recurrenceEndDate" className="required">
                    Data Final
                  </label>
                  <input
                    id="recurrenceEndDate"
                    type="date"
                    className={`form-input ${errors.recurrenceEndDate ? 'error' : ''}`}
                    value={formData.recurrenceEndDate}
                    onChange={(e) => handleChange('recurrenceEndDate', e.target.value)}
                    aria-label="Data final da recorrência"
                    aria-invalid={!!errors.recurrenceEndDate}
                  />
                  {errors.recurrenceEndDate && (
                    <div className="validation-message error">⚠️ {errors.recurrenceEndDate}</div>
                  )}
                </div>
              </div>
              <div className="validation-message info">
                🔄 Transação se repetirá {formData.recurrenceType}mente até {formData.recurrenceEndDate || 'data indefinida'}
              </div>
            </div>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="action-buttons">
          <button 
            type="button" 
            className="action-button secondary"
            onClick={handleReset}
          >
            🔄 Limpar Tudo
          </button>
          
          <div style={{ flex: 1 }} />
          
          <button 
            type="submit" 
            className={`primary-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processando...' : '💾 Salvar Transação'}
          </button>
        </div>
      </form>

      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        background: '#f0f9ff', 
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#0369a1'
      }}>
        <p><strong>✨ Funcionalidades Avançadas:</strong></p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Categorias hierárquicas (categoria › subcategoria)</li>
          <li>Múltiplos métodos de pagamento com ícones</li>
          <li>Parcelamento com controle deslizante</li>
          <li>Sistema de tags dinâmico</li>
          <li>Upload de comprovante com preview</li>
          <li>Configuração de recorrência avançada</li>
          <li>Validação em tempo real integrada</li>
        </ul>
      </div>
    </div>
  )
}

export default AdvancedTransactionForm