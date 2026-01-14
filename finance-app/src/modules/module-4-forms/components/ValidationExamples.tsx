import React, { useState } from 'react'
import { 
  validateEmail, 
  validateCPF, 
  validatePhone, 
  validatePassword,
  validateAmount,
  validateDate 
} from '../utils/validators'

const ValidationExamples: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: '',
    amount: '',
    date: '',
    website: '',
    customField: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Validação em tempo real após o campo ser tocado
    if (touched[field]) {
      validateField(field, value)
    }
  }

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    validateField(field, formData[field])
  }

  const validateField = (field: string, value: string) => {
    let error = ''

    switch (field) {
      case 'email':
        const emailResult = validateEmail(value)
        if (!emailResult.isValid) error = emailResult.message
        break
        
      case 'cpf':
        const cpfResult = validateCPF(value.replace(/\D/g, ''))
        if (!cpfResult.isValid) error = cpfResult.message
        break
        
      case 'phone':
        const phoneResult = validatePhone(value.replace(/\D/g, ''))
        if (!phoneResult.isValid) error = phoneResult.message
        break
        
      case 'password':
        const passwordResult = validatePassword(value)
        if (!passwordResult.isValid) {
          error = passwordResult.message
        } else if (formData.confirmPassword && value !== formData.confirmPassword) {
          error = 'As senhas não coincidem'
        }
        break
        
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'As senhas não coincidem'
        }
        break
        
      case 'amount':
        const amountResult = validateAmount(parseFloat(value) || 0)
        if (!amountResult.isValid) error = amountResult.message
        break
        
      case 'date':
        const dateResult = validateDate(value)
        if (!dateResult.isValid) error = dateResult.message
        break
        
      case 'website':
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        if (value && !urlRegex.test(value)) {
          error = 'URL inválida'
        }
        break
        
      case 'customField':
        if (value && value.length < 5) {
          error = 'Mínimo 5 caracteres'
        } else if (value && !/^[A-Z]/.test(value)) {
          error = 'Deve começar com letra maiúscula'
        }
        break
    }

    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Marcar todos os campos como tocados
    const allTouched = Object.keys(formData).reduce((acc, field) => {
      acc[field] = true
      return acc
    }, {} as Record<string, boolean>)
    
    setTouched(allTouched)
    
    // Validar todos os campos
    Object.keys(formData).forEach(field => {
      validateField(field, formData[field])
    })
    
    // Verificar se há erros
    const hasErrors = Object.values(errors).some(error => error !== '')
    const allTouchedValid = Object.keys(allTouched).every(field => !errors[field])
    
    if (!hasErrors && allTouchedValid) {
      alert('✅ Formulário válido! Todos os campos estão corretos.')
    } else {
      alert('⚠️  Corrija os erros antes de enviar.')
    }
  }

  const handleReset = () => {
    setFormData({
      email: '',
      cpf: '',
      phone: '',
      password: '',
      confirmPassword: '',
      amount: '',
      date: '',
      website: '',
      customField: ''
    })
    setErrors({})
    setTouched({})
  }

  const getValidationClass = (field: string) => {
    if (!touched[field]) return ''
    return errors[field] ? 'error' : 'success'
  }

  return (
    <div className="form-container">
      <h3>✅ Exemplos de Validação</h3>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Validação em tempo real com feedback visual imediato
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="required">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`form-input ${getValidationClass('email')}`}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="usuario@exemplo.com"
              aria-label="Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email ? (
              <div id="email-error" className="validation-message error">
                ⚠️ {errors.email}
              </div>
            ) : touched.email && !errors.email ? (
              <div className="validation-message success">
                ✓ Email válido
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="cpf" className="required">
              CPF
            </label>
            <input
              id="cpf"
              type="text"
              className={`form-input ${getValidationClass('cpf')}`}
              value={formData.cpf}
              onChange={(e) => handleChange('cpf', e.target.value)}
              onBlur={() => handleBlur('cpf')}
              placeholder="000.000.000-00"
              aria-label="CPF"
              aria-invalid={!!errors.cpf}
              aria-describedby={errors.cpf ? "cpf-error" : undefined}
            />
            {touched.cpf && errors.cpf ? (
              <div id="cpf-error" className="validation-message error">
                ⚠️ {errors.cpf}
              </div>
            ) : touched.cpf && !errors.cpf ? (
              <div className="validation-message success">
                ✓ CPF válido
              </div>
            ) : null}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="required">
              Telefone
            </label>
            <input
              id="phone"
              type="text"
              className={`form-input ${getValidationClass('phone')}`}
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              placeholder="(00) 00000-0000"
              aria-label="Telefone"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {touched.phone && errors.phone ? (
              <div id="phone-error" className="validation-message error">
                ⚠️ {errors.phone}
              </div>
            ) : touched.phone && !errors.phone ? (
              <div className="validation-message success">
                ✓ Telefone válido
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="date" className="required">
              Data
            </label>
            <input
              id="date"
              type="date"
              className={`form-input ${getValidationClass('date')}`}
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              onBlur={() => handleBlur('date')}
              aria-label="Data"
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {touched.date && errors.date ? (
              <div id="date-error" className="validation-message error">
                ⚠️ {errors.date}
              </div>
            ) : touched.date && !errors.date ? (
              <div className="validation-message success">
                ✓ Data válida
              </div>
            ) : null}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password" className="required">
              Senha Forte
            </label>
            <input
              id="password"
              type="password"
              className={`form-input ${getValidationClass('password')}`}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
              placeholder="Mínimo 8 caracteres com maiúsculas, números e símbolos"
              aria-label="Senha"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {touched.password && errors.password ? (
              <div id="password-error" className="validation-message error">
                ⚠️ {errors.password}
              </div>
            ) : touched.password && !errors.password ? (
              <div className="validation-message success">
                ✓ Senha forte
              </div>
            ) : (
              <div className="validation-message info">
                💡 Use 8+ caracteres com maiúsculas, números e símbolos
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="required">
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={`form-input ${getValidationClass('confirmPassword')}`}
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              onBlur={() => handleBlur('confirmPassword')}
              placeholder="Digite a senha novamente"
              aria-label="Confirmar senha"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <div id="confirmPassword-error" className="validation-message error">
                ⚠️ {errors.confirmPassword}
              </div>
            ) : touched.confirmPassword && !errors.confirmPassword && formData.confirmPassword ? (
              <div className="validation-message success">
                ✓ Senhas coincidem
              </div>
            ) : null}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="amount" className="required">
              Valor Monetário
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              className={`form-input ${getValidationClass('amount')}`}
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              onBlur={() => handleBlur('amount')}
              placeholder="0,00"
              aria-label="Valor monetário"
              aria-invalid={!!errors.amount}
              aria-describedby={errors.amount ? "amount-error" : undefined}
            />
            {touched.amount && errors.amount ? (
              <div id="amount-error" className="validation-message error">
                ⚠️ {errors.amount}
              </div>
            ) : touched.amount && !errors.amount && formData.amount ? (
              <div className="validation-message success">
                ✓ Valor válido
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="website">
              Website (Opcional)
            </label>
            <input
              id="website"
              type="url"
              className={`form-input ${getValidationClass('website')}`}
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              onBlur={() => handleBlur('website')}
              placeholder="https://exemplo.com"
              aria-label="Website"
              aria-invalid={!!errors.website}
              aria-describedby={errors.website ? "website-error" : undefined}
            />
            {touched.website && errors.website ? (
              <div id="website-error" className="validation-message error">
                ⚠️ {errors.website}
              </div>
            ) : touched.website && !errors.website && formData.website ? (
              <div className="validation-message success">
                ✓ URL válida
              </div>
            ) : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="customField">
            Campo Personalizado
          </label>
          <input
            id="customField"
            type="text"
            className={`form-input ${getValidationClass('customField')}`}
            value={formData.customField}
            onChange={(e) => handleChange('customField', e.target.value)}
            onBlur={() => handleBlur('customField')}
            placeholder="Comece com letra maiúscula, mínimo 5 caracteres"
            aria-label="Campo personalizado"
            aria-invalid={!!errors.customField}
            aria-describedby={errors.customField ? "customField-error" : undefined}
          />
          {touched.customField && errors.customField ? (
            <div id="customField-error" className="validation-message error">
              ⚠️ {errors.customField}
            </div>
          ) : touched.customField && !errors.customField && formData.customField ? (
            <div className="validation-message success">
              ✓ Campo válido
            </div>
          ) : null}
        </div>

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
            className="primary-button"
          >
            ✅ Validar Formulário
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
        <p><strong>🎯 Tipos de Validação Implementados:</strong></p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Email com regex específico</li>
          <li>CPF com algoritmo de validação</li>
          <li>Telefone com formato brasileiro</li>
          <li>Senha forte com múltiplos critérios</li>
          <li>Confirmação de senha</li>
          <li>Data não futura</li>
          <li>Valor monetário dentro de limites</li>
          <li>URL válida</li>
          <li>Regras personalizadas</li>
        </ul>
      </div>
    </div>
  )
}

export default ValidationExamples