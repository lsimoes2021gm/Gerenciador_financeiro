// src/modules/module-4-forms/utils/validators.ts

export interface ValidationResult {
  isValid: boolean
  message: string
}

export interface FieldValidation {
  required?: boolean
  minLength?: number
  maxLength?: number
  minValue?: number
  maxValue?: number
  pattern?: RegExp
  custom?: (value: any) => ValidationResult
}

export const validateField = (
  value: any,
  rules: FieldValidation
): ValidationResult => {
  // Campo vazio
  if (rules.required && (!value || value.toString().trim() === '')) {
    return { isValid: false, message: 'Este campo é obrigatório' }
  }

  // Comprimento mínimo
  if (rules.minLength && value && value.toString().length < rules.minLength) {
    return { 
      isValid: false, 
      message: `Mínimo de ${rules.minLength} caracteres` 
    }
  }

  // Comprimento máximo
  if (rules.maxLength && value && value.toString().length > rules.maxLength) {
    return { 
      isValid: false, 
      message: `Máximo de ${rules.maxLength} caracteres` 
    }
  }

  // Valor mínimo
  if (rules.minValue !== undefined && value !== '' && Number(value) < rules.minValue) {
    return { 
      isValid: false, 
      message: `Valor mínimo: ${rules.minValue}` 
    }
  }

  // Valor máximo
  if (rules.maxValue !== undefined && value !== '' && Number(value) > rules.maxValue) {
    return { 
      isValid: false, 
      message: `Valor máximo: ${rules.maxValue}` 
    }
  }

  // Padrão regex
  if (rules.pattern && value && !rules.pattern.test(value.toString())) {
    return { isValid: false, message: 'Formato inválido' }
  }

  // Validação customizada
  if (rules.custom) {
    return rules.custom(value)
  }

  return { isValid: true, message: '' }
}

// Validações específicas
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return { isValid: false, message: 'Email é obrigatório' }
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Email inválido' }
  }
  return { isValid: true, message: '' }
}

export const validateCPF = (cpf: string): ValidationResult => {
  const cleaned = cpf.replace(/\D/g, '')
  
  if (!cleaned) {
    return { isValid: false, message: 'CPF é obrigatório' }
  }
  
  if (cleaned.length !== 11) {
    return { isValid: false, message: 'CPF deve ter 11 dígitos' }
  }

  // Validação de CPF (algoritmo)
  if (/^(\d)\1{10}$/.test(cleaned)) {
    return { isValid: false, message: 'CPF inválido' }
  }

  let sum = 0
  let remainder

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i)
  }
  
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleaned.substring(9, 10))) {
    return { isValid: false, message: 'CPF inválido' }
  }

  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i)
  }
  
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleaned.substring(10, 11))) {
    return { isValid: false, message: 'CPF inválido' }
  }

  return { isValid: true, message: '' }
}

export const validatePhone = (phone: string): ValidationResult => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (!cleaned) {
    return { isValid: false, message: 'Telefone é obrigatório' }
  }
  
  if (cleaned.length < 10 || cleaned.length > 11) {
    return { isValid: false, message: 'Telefone inválido' }
  }
  
  return { isValid: true, message: '' }
}

export const validateDate = (date: string): ValidationResult => {
  if (!date) {
    return { isValid: false, message: 'Data é obrigatória' }
  }
  
  const dateObj = new Date(date)
  const today = new Date()
  
  if (isNaN(dateObj.getTime())) {
    return { isValid: false, message: 'Data inválida' }
  }
  
  if (dateObj > today) {
    return { isValid: false, message: 'Data não pode ser futura' }
  }
  
  return { isValid: true, message: '' }
}

export const validateAmount = (amount: number): ValidationResult => {
  if (amount === undefined || amount === null) {
    return { isValid: false, message: 'Valor é obrigatório' }
  }
  
  if (amount <= 0) {
    return { isValid: false, message: 'Valor deve ser maior que zero' }
  }
  
  if (amount > 1000000) {
    return { isValid: false, message: 'Valor máximo: R$ 1.000.000' }
  }
  
  return { isValid: true, message: '' }
}

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, message: 'Senha é obrigatória' }
  }
  
  if (password.length < 8) {
    return { isValid: false, message: 'Mínimo 8 caracteres' }
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Pelo menos uma letra minúscula' }
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Pelo menos uma letra maiúscula' }
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Pelo menos um número' }
  }
  
  if (!/(?=.*[@$!%*?&])/.test(password)) {
    return { isValid: false, message: 'Pelo menos um caractere especial (@$!%*?&)' }
  }
  
  return { isValid: true, message: '' }
}

// Validação de formulário completo
export const validateForm = (
  formData: Record<string, any>,
  validations: Record<string, FieldValidation>
): Record<string, ValidationResult> => {
  const results: Record<string, ValidationResult> = {}
  
  Object.keys(validations).forEach(field => {
    results[field] = validateField(formData[field], validations[field])
  })
  
  return results
}

// Verificar se formulário é válido
export const isFormValid = (validationResults: Record<string, ValidationResult>): boolean => {
  return Object.values(validationResults).every(result => result.isValid)
}