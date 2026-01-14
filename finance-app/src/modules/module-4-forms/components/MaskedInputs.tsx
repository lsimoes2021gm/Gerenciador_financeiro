import React, { useState } from 'react'
import { applyMask, removeMask, formatCurrencyInput, parseCurrency } from '../utils/masks'
import type { MaskType } from '../utils/masks'
import { validateCPF, validatePhone, validateField } from '../utils/validators'

interface MaskedInputProps {
  type: MaskType
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  required?: boolean
  error?: string
  onValidate?: (isValid: boolean) => void
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  error,
  onValidate
}) => {
  const [touched, setTouched] = useState(false)
  const [localError, setLocalError] = useState('')

  const getPlaceholder = () => {
    switch (type) {
      case 'cpf':
        return '000.000.000-00'
      case 'cnpj':
        return '00.000.000/0000-00'
      case 'phone':
        return '(00) 00000-0000'
      case 'currency':
        return 'R$ 0,00'
      case 'date':
        return 'DD/MM/AAAA'
      case 'cep':
        return '00000-000'
      case 'percent':
        return '0,00%'
      default:
        return placeholder || ''
    }
  }

  const getMaskHint = () => {
    switch (type) {
      case 'cpf':
        return 'CPF'
      case 'cnpj':
        return 'CNPJ'
      case 'phone':
        return 'Telefone'
      case 'currency':
        return 'R$'
      case 'date':
        return 'Data'
      case 'cep':
        return 'CEP'
      case 'percent':
        return '%'
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    
    // Aplicar máscara
    let maskedValue = inputValue
    
    if (type === 'currency') {
      // Para moeda, manter apenas números e tratar como centavos
      const cleaned = inputValue.replace(/\D/g, '')
      if (cleaned) {
        maskedValue = formatCurrencyInput(cleaned)
      } else {
        maskedValue = ''
      }
    } else {
      maskedValue = applyMask(inputValue, type)
    }
    
    onChange(maskedValue)
    
    // Validação em tempo real
    validateInput(maskedValue)
  }

  const validateInput = (inputValue: string) => {
    let isValid = true
    let errorMessage = ''
    
    if (required && !inputValue.trim()) {
      isValid = false
      errorMessage = 'Campo obrigatório'
    } else if (inputValue.trim()) {
      switch (type) {
        case 'cpf':
          const cpfResult = validateCPF(removeMask(inputValue))
          isValid = cpfResult.isValid
          errorMessage = cpfResult.message
          break
        
        case 'phone':
          const phoneResult = validatePhone(removeMask(inputValue))
          isValid = phoneResult.isValid
          errorMessage = phoneResult.message
          break
        
        case 'currency':
          const numericValue = parseCurrency(inputValue)
          if (numericValue <= 0) {
            isValid = false
            errorMessage = 'Valor deve ser maior que zero'
          }
          break
        
        case 'date':
          // Validação básica de data
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
          if (!dateRegex.test(inputValue)) {
            isValid = false
            errorMessage = 'Data inválida'
          }
          break
      }
    }
    
    setLocalError(errorMessage)
    onValidate?.(isValid && (!required || (required && inputValue.trim() !== '')))
  }

  const handleBlur = () => {
    setTouched(true)
    validateInput(value)
  }

  const handleFocus = () => {
    setTouched(true)
  }

  const getInputType = () => {
    if (type === 'currency' || type === 'percent') {
      return 'text' // Para máscaras especiais
    }
    return 'text'
  }

  const displayError = error || (touched && localError)

  return (
    <div className="form-group">
      {label && (
        <label className={required ? 'required' : ''}>
          {label}
        </label>
      )}
      
      <div className="masked-input">
        <input
          type={getInputType()}
          className={`form-input ${displayError ? 'error' : ''} ${touched && !displayError && value ? 'success' : ''}`}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={getPlaceholder()}
          aria-label={label || `Campo ${getMaskHint()}`}
          aria-invalid={!!displayError}
          aria-describedby={displayError ? `error-${type}` : undefined}
        />
        
        {getMaskHint() && (
          <div className="mask-hint">
            {getMaskHint()}
          </div>
        )}
      </div>
      
      {displayError && (
        <div id={`error-${type}`} className="validation-message error">
          ⚠️ {displayError}
        </div>
      )}
      
      {touched && !displayError && value && (
        <div className="validation-message success">
          ✓ Formato válido
        </div>
      )}
    </div>
  )
}

export default MaskedInput