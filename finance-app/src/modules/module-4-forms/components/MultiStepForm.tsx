import React, { useState } from 'react'
import type { FormStep, PersonalData, FinancialData, DocumentData, FormData } from '../types/form'
import { validateEmail, validateCPF, validatePhone, validateDate } from '../utils/validators'
import { formatDateForDisplay } from '../utils/formatters'

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('personal')
  const [formData, setFormData] = useState<FormData>({
    personal: {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      birthDate: ''
    },
    financial: {
      monthlyIncome: 0,
      monthlyExpenses: 0,
      hasInvestments: false,
      investmentTypes: [],
      financialGoal: ''
    },
    documents: {
      identificationFile: null,
      proofOfIncomeFile: null,
      proofOfAddressFile: null,
      files: []
    },
    agreedToTerms: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps: { id: FormStep; label: string; icon: string }[] = [
    { id: 'personal', label: 'Dados Pessoais', icon: '👤' },
    { id: 'financial', label: 'Financeiro', icon: '💰' },
    { id: 'documents', label: 'Documentos', icon: '📄' },
    { id: 'review', label: 'Revisão', icon: '✅' }
  ]

  const investmentOptions = [
    'Ações',
    'Fundos Imobiliários',
    'Tesouro Direto',
    'CDB',
    'LCI/LCA',
    'Previdência Privada',
    'Criptomoedas',
    'Outros'
  ]

  const financialGoalOptions = [
    'Aposentadoria',
    'Compra de Imóvel',
    'Educação',
    'Viagem',
    'Reserva de Emergência',
    'Investimentos',
    'Outros'
  ]

  // Validação do passo atual
  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {}

    switch (currentStep) {
      case 'personal':
        if (!formData.personal.fullName.trim()) {
          newErrors.fullName = 'Nome completo é obrigatório'
        }
        
        const emailValidation = validateEmail(formData.personal.email)
        if (!emailValidation.isValid) {
          newErrors.email = emailValidation.message
        }
        
        const cpfValidation = validateCPF(formData.personal.cpf.replace(/\D/g, ''))
        if (!cpfValidation.isValid) {
          newErrors.cpf = cpfValidation.message
        }
        
        const phoneValidation = validatePhone(formData.personal.phone.replace(/\D/g, ''))
        if (!phoneValidation.isValid) {
          newErrors.phone = phoneValidation.message
        }
        
        const dateValidation = validateDate(formData.personal.birthDate)
        if (!dateValidation.isValid) {
          newErrors.birthDate = dateValidation.message
        }
        break

      case 'financial':
        if (formData.financial.monthlyIncome <= 0) {
          newErrors.monthlyIncome = 'Renda mensal deve ser maior que zero'
        }
        if (formData.financial.monthlyExpenses < 0) {
          newErrors.monthlyExpenses = 'Despesas não podem ser negativas'
        }
        if (formData.financial.monthlyExpenses > formData.financial.monthlyIncome) {
          newErrors.monthlyExpenses = 'Despesas não podem ser maiores que a renda'
        }
        if (!formData.financial.financialGoal.trim()) {
          newErrors.financialGoal = 'Selecione uma meta financeira'
        }
        break

      case 'documents':
        if (!formData.documents.identificationFile) {
          newErrors.identificationFile = 'Documento de identificação é obrigatório'
        }
        if (!formData.documents.proofOfIncomeFile) {
          newErrors.proofOfIncomeFile = 'Comprovante de renda é obrigatório'
        }
        if (!formData.documents.proofOfAddressFile) {
          newErrors.proofOfAddressFile = 'Comprovante de residência é obrigatório'
        }
        break

      case 'review':
        if (!formData.agreedToTerms) {
          newErrors.agreedToTerms = 'Você deve concordar com os termos'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      const currentIndex = steps.findIndex(step => step.id === currentStep)
      if (currentIndex < steps.length - 1) {
        setCurrentStep(steps[currentIndex + 1].id)
      }
    }
  }

  const handlePrevStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const handleSubmit = async () => {
    if (validateCurrentStep()) {
      setIsSubmitting(true)
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      alert('🎉 Formulário enviado com sucesso!')
      setIsSubmitting(false)
      
      // Resetar formulário
      setFormData({
        personal: {
          fullName: '',
          email: '',
          cpf: '',
          phone: '',
          birthDate: ''
        },
        financial: {
          monthlyIncome: 0,
          monthlyExpenses: 0,
          hasInvestments: false,
          investmentTypes: [],
          financialGoal: ''
        },
        documents: {
          identificationFile: null,
          proofOfIncomeFile: null,
          proofOfAddressFile: null,
          files: []
        },
        agreedToTerms: false
      })
      setCurrentStep('personal')
    }
  }

  const handleFileUpload = (field: keyof DocumentData, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }))
    
    // Limpar erro ao selecionar arquivo
    if (file) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleInvestmentToggle = (investment: string) => {
    setFormData(prev => {
      const currentTypes = [...prev.financial.investmentTypes]
      const index = currentTypes.indexOf(investment)
      
      if (index === -1) {
        currentTypes.push(investment)
      } else {
        currentTypes.splice(index, 1)
      }
      
      return {
        ...prev,
        financial: {
          ...prev.financial,
          investmentTypes: currentTypes
        }
      }
    })
  }

  // Renderizar conteúdo do passo atual
  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <div className="step-content">
            <h3 style={{ marginBottom: '1.5rem' }}>👤 Dados Pessoais</h3>
            
            <div className="form-group">
              <label htmlFor="fullName" className="required">
                Nome Completo
              </label>
              <input
                id="fullName"
                type="text"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                value={formData.personal.fullName}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  personal: { ...prev.personal, fullName: e.target.value }
                }))}
                placeholder="Digite seu nome completo"
                aria-label="Nome completo"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <div className="validation-message error">⚠️ {errors.fullName}</div>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="required">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.personal.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, email: e.target.value }
                  }))}
                  placeholder="usuario@exemplo.com"
                  aria-label="Email"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <div className="validation-message error">⚠️ {errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cpf" className="required">
                  CPF
                </label>
                <input
                  id="cpf"
                  type="text"
                  className={`form-input ${errors.cpf ? 'error' : ''}`}
                  value={formData.personal.cpf}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, cpf: e.target.value }
                  }))}
                  placeholder="000.000.000-00"
                  aria-label="CPF"
                  aria-invalid={!!errors.cpf}
                />
                {errors.cpf && (
                  <div className="validation-message error">⚠️ {errors.cpf}</div>
                )}
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
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={formData.personal.phone}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, phone: e.target.value }
                  }))}
                  placeholder="(00) 00000-0000"
                  aria-label="Telefone"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <div className="validation-message error">⚠️ {errors.phone}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="birthDate" className="required">
                  Data de Nascimento
                </label>
                <input
                  id="birthDate"
                  type="date"
                  className={`form-input ${errors.birthDate ? 'error' : ''}`}
                  value={formData.personal.birthDate}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personal: { ...prev.personal, birthDate: e.target.value }
                  }))}
                  aria-label="Data de nascimento"
                  aria-invalid={!!errors.birthDate}
                />
                {errors.birthDate && (
                  <div className="validation-message error">⚠️ {errors.birthDate}</div>
                )}
              </div>
            </div>
          </div>
        )

      case 'financial':
        return (
          <div className="step-content">
            <h3 style={{ marginBottom: '1.5rem' }}>💰 Dados Financeiros</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="monthlyIncome" className="required">
                  Renda Mensal (R$)
                </label>
                <input
                  id="monthlyIncome"
                  type="number"
                  step="0.01"
                  min="0"
                  className={`form-input ${errors.monthlyIncome ? 'error' : ''}`}
                  value={formData.financial.monthlyIncome || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    financial: { 
                      ...prev.financial, 
                      monthlyIncome: parseFloat(e.target.value) || 0 
                    }
                  }))}
                  placeholder="0,00"
                  aria-label="Renda mensal"
                  aria-invalid={!!errors.monthlyIncome}
                />
                {errors.monthlyIncome && (
                  <div className="validation-message error">⚠️ {errors.monthlyIncome}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="monthlyExpenses" className="required">
                  Despesas Mensais (R$)
                </label>
                <input
                  id="monthlyExpenses"
                  type="number"
                  step="0.01"
                  min="0"
                  className={`form-input ${errors.monthlyExpenses ? 'error' : ''}`}
                  value={formData.financial.monthlyExpenses || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    financial: { 
                      ...prev.financial, 
                      monthlyExpenses: parseFloat(e.target.value) || 0 
                    }
                  }))}
                  placeholder="0,00"
                  aria-label="Despesas mensais"
                  aria-invalid={!!errors.monthlyExpenses}
                />
                {errors.monthlyExpenses && (
                  <div className="validation-message error">⚠️ {errors.monthlyExpenses}</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                  type="checkbox"
                  checked={formData.financial.hasInvestments}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    financial: { 
                      ...prev.financial, 
                      hasInvestments: e.target.checked 
                    }
                  }))}
                  style={{ width: '18px', height: '18px' }}
                />
                <span>Possui investimentos?</span>
              </label>

              {formData.financial.hasInvestments && (
                <div className="checkbox-group" style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                    Tipos de Investimento:
                  </h4>
                  {investmentOptions.map(investment => (
                    <div key={investment} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={`investment-${investment}`}
                        checked={formData.financial.investmentTypes.includes(investment)}
                        onChange={() => handleInvestmentToggle(investment)}
                      />
                      <label htmlFor={`investment-${investment}`}>
                        {investment}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="financialGoal" className="required">
                Meta Financeira Principal
              </label>
              <select
                id="financialGoal"
                className={`form-select ${errors.financialGoal ? 'error' : ''}`}
                value={formData.financial.financialGoal}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  financial: { ...prev.financial, financialGoal: e.target.value }
                }))}
                aria-label="Meta financeira"
                aria-invalid={!!errors.financialGoal}
              >
                <option value="">Selecione uma meta</option>
                {financialGoalOptions.map(goal => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
              {errors.financialGoal && (
                <div className="validation-message error">⚠️ {errors.financialGoal}</div>
              )}
            </div>
          </div>
        )

      case 'documents':
        return (
          <div className="step-content">
            <h3 style={{ marginBottom: '1.5rem' }}>📄 Documentos Necessários</h3>
            
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Envie os documentos solicitados. Formatos aceitos: PDF, JPG, PNG (máx. 5MB cada)
            </p>

            <div className="form-group">
              <label className="required">
                Documento de Identificação
              </label>
              <div 
                className={`file-upload-area ${errors.identificationFile ? 'error' : ''}`}
                onClick={() => document.getElementById('identificationFile')?.click()}
                style={{ cursor: 'pointer' }}
              >
                <div className="file-upload-icon">📄</div>
                <p>Clique para selecionar ou arraste o arquivo</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  RG, CNH ou Passaporte
                </p>
                <input
                  id="identificationFile"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('identificationFile', e.target.files?.[0] || null)}
                  style={{ display: 'none' }}
                />
              </div>
              {formData.documents.identificationFile && (
                <div className="file-item">
                  <div className="file-info">
                    <div className="file-icon">📄</div>
                    <div className="file-details">
                      <div className="file-name">{formData.documents.identificationFile.name}</div>
                      <div className="file-size">
                        {(formData.documents.identificationFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button 
                    className="file-remove"
                    onClick={() => handleFileUpload('identificationFile', null)}
                    aria-label="Remover arquivo"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.identificationFile && (
                <div className="validation-message error">⚠️ {errors.identificationFile}</div>
              )}
            </div>

            <div className="form-group">
              <label className="required">
                Comprovante de Renda
              </label>
              <div 
                className={`file-upload-area ${errors.proofOfIncomeFile ? 'error' : ''}`}
                onClick={() => document.getElementById('proofOfIncomeFile')?.click()}
                style={{ cursor: 'pointer' }}
              >
                <div className="file-upload-icon">💰</div>
                <p>Clique para selecionar ou arraste o arquivo</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  Holerite, declaração ou extrato
                </p>
                <input
                  id="proofOfIncomeFile"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('proofOfIncomeFile', e.target.files?.[0] || null)}
                  style={{ display: 'none' }}
                />
              </div>
              {formData.documents.proofOfIncomeFile && (
                <div className="file-item">
                  <div className="file-info">
                    <div className="file-icon">💰</div>
                    <div className="file-details">
                      <div className="file-name">{formData.documents.proofOfIncomeFile.name}</div>
                      <div className="file-size">
                        {(formData.documents.proofOfIncomeFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button 
                    className="file-remove"
                    onClick={() => handleFileUpload('proofOfIncomeFile', null)}
                    aria-label="Remover arquivo"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.proofOfIncomeFile && (
                <div className="validation-message error">⚠️ {errors.proofOfIncomeFile}</div>
              )}
            </div>

            <div className="form-group">
              <label className="required">
                Comprovante de Residência
              </label>
              <div 
                className={`file-upload-area ${errors.proofOfAddressFile ? 'error' : ''}`}
                onClick={() => document.getElementById('proofOfAddressFile')?.click()}
                style={{ cursor: 'pointer' }}
              >
                <div className="file-upload-icon">🏠</div>
                <p>Clique para selecionar ou arraste o arquivo</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  Conta de luz, água ou telefone
                </p>
                <input
                  id="proofOfAddressFile"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('proofOfAddressFile', e.target.files?.[0] || null)}
                  style={{ display: 'none' }}
                />
              </div>
              {formData.documents.proofOfAddressFile && (
                <div className="file-item">
                  <div className="file-info">
                    <div className="file-icon">🏠</div>
                    <div className="file-details">
                      <div className="file-name">{formData.documents.proofOfAddressFile.name}</div>
                      <div className="file-size">
                        {(formData.documents.proofOfAddressFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button 
                    className="file-remove"
                    onClick={() => handleFileUpload('proofOfAddressFile', null)}
                    aria-label="Remover arquivo"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.proofOfAddressFile && (
                <div className="validation-message error">⚠️ {errors.proofOfAddressFile}</div>
              )}
            </div>
          </div>
        )

      case 'review':
        return (
          <div className="step-content">
            <h3 style={{ marginBottom: '1.5rem' }}>✅ Revisão Final</h3>
            
            <div style={{ 
              background: '#f9fafb', 
              padding: '1.5rem', 
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ color: '#374151', marginBottom: '1rem' }}>📋 Resumo dos Dados</h4>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <strong>👤 Dados Pessoais:</strong>
                  <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                    <div>Nome: {formData.personal.fullName || 'Não informado'}</div>
                    <div>Email: {formData.personal.email || 'Não informado'}</div>
                    <div>CPF: {formData.personal.cpf || 'Não informado'}</div>
                    <div>Telefone: {formData.personal.phone || 'Não informado'}</div>
                    <div>Nascimento: {formData.personal.birthDate ? formatDateForDisplay(formData.personal.birthDate) : 'Não informado'}</div>
                  </div>
                </div>

                <div>
                  <strong>💰 Dados Financeiros:</strong>
                  <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                    <div>Renda Mensal: R$ {formData.financial.monthlyIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '0,00'}</div>
                    <div>Despesas Mensais: R$ {formData.financial.monthlyExpenses.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || '0,00'}</div>
                    <div>Saldo Mensal: R$ {(formData.financial.monthlyIncome - formData.financial.monthlyExpenses).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div>Investimentos: {formData.financial.hasInvestments ? 'Sim' : 'Não'}</div>
                    {formData.financial.investmentTypes.length > 0 && (
                      <div>Tipos: {formData.financial.investmentTypes.join(', ')}</div>
                    )}
                    <div>Meta: {formData.financial.financialGoal || 'Não informada'}</div>
                  </div>
                </div>

                <div>
                  <strong>📄 Documentos:</strong>
                  <div style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                    <div>Identificação: {formData.documents.identificationFile ? '✅ Enviado' : '❌ Pendente'}</div>
                    <div>Comprovante de Renda: {formData.documents.proofOfIncomeFile ? '✅ Enviado' : '❌ Pendente'}</div>
                    <div>Comprovante de Residência: {formData.documents.proofOfAddressFile ? '✅ Enviado' : '❌ Pendente'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    agreedToTerms: e.target.checked
                  }))}
                  style={{ width: '18px', height: '18px' }}
                  aria-invalid={!!errors.agreedToTerms}
                />
                <span>
                  Concordo com os <a href="#" style={{ color: '#3b82f6' }}>termos de uso</a> e 
                  <a href="#" style={{ color: '#3b82f6', marginLeft: '0.25rem' }}>política de privacidade</a>
                </span>
              </label>
              {errors.agreedToTerms && (
                <div className="validation-message error">⚠️ {errors.agreedToTerms}</div>
              )}
            </div>

            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              background: '#f0f9ff', 
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#0369a1'
            }}>
              <p><strong>⚠️ Atenção:</strong> Verifique se todas as informações estão corretas antes de enviar.</p>
            </div>
          </div>
        )
    }
  }

  // Calcular progresso
  const progress = ((steps.findIndex(step => step.id === currentStep) + 1) / steps.length) * 100

  return (
    <div className="form-container">
      <h3>🚀 Formulário Multi-Step</h3>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Formulário dividido em etapas com validação progressiva
      </p>

      {/* Barra de Progresso */}
      <div className="step-progress">
        <div 
          className="step-progress-line" 
          style={{ width: `${progress}%` }}
        />
        {steps.map((step, index) => {
          const stepIndex = steps.findIndex(s => s.id === step.id)
          const isCompleted = stepIndex < steps.findIndex(s => s.id === currentStep)
          const isActive = step.id === currentStep
          
          return (
            <div 
              key={step.id} 
              className={`step-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
            >
              <div className="step-number">
                {isCompleted ? '✓' : step.icon}
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          )
        })}
      </div>

      {/* Conteúdo do Step */}
      {renderStepContent()}

      {/* Navegação */}
      <div className="step-navigation">
        <button
          type="button"
          className="step-button back"
          onClick={handlePrevStep}
          disabled={currentStep === 'personal' || isSubmitting}
        >
          ← Voltar
        </button>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          {currentStep !== 'review' ? (
            <button
              type="button"
              className="step-button next"
              onClick={handleNextStep}
              disabled={isSubmitting}
            >
              Próximo →
            </button>
          ) : (
            <button
              type="button"
              className={`step-button submit ${isSubmitting ? 'loading' : ''}`}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : '✅ Enviar Formulário'}
            </button>
          )}
        </div>
      </div>

      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        background: '#f0f9ff', 
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#0369a1'
      }}>
        <p><strong>✨ Funcionalidades do Multi-Step:</strong></p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Progresso visual entre etapas</li>
          <li>Validação específica por etapa</li>
          <li>Upload de arquivos com preview</li>
          <li>Resumo final antes do envio</li>
          <li>Navegação forward/backward</li>
          <li>Estado de loading no envio</li>
        </ul>
      </div>
    </div>
  )
}

export default MultiStepForm