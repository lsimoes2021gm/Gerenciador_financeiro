// src/modules/module-4-forms/utils/masks.ts

export type MaskType = 'cpf' | 'cnpj' | 'phone' | 'currency' | 'date' | 'cep' | 'percent'

export const applyMask = (value: string, maskType: MaskType): string => {
  const cleaned = value.replace(/\D/g, '')
  
  switch (maskType) {
    case 'cpf':
      return cleaned
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
      
    case 'cnpj':
      return cleaned
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
      
    case 'phone':
      if (cleaned.length <= 10) {
        return cleaned
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(-\d{4})\d+?$/, '$1')
      } else {
        return cleaned
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{4})\d+?$/, '$1')
      }
      
    case 'currency':
      if (!cleaned) return ''
      const number = parseInt(cleaned) / 100
      return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      
    case 'date':
      return cleaned
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
      
    case 'cep':
      return cleaned
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
      
    case 'percent':
      if (!cleaned) return ''
      const percentValue = parseInt(cleaned) / 100
      return `${percentValue.toFixed(2)}%`.replace('.', ',')
      
    default:
      return cleaned
  }
}

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const formatCurrencyInput = (value: string): string => {
  const cleaned = value.replace(/\D/g, '')
  if (!cleaned) return ''
  
  const number = parseInt(cleaned) / 100
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export const parseCurrency = (value: string): number => {
  const cleaned = value.replace(/[^\d,-]/g, '').replace(',', '.')
  return parseFloat(cleaned) || 0
}

export const formatDateForInput = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toISOString().split('T')[0]
}

export const formatDateForDisplay = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('pt-BR')
}