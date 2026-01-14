// src/modules/module-4-forms/types/form.ts

export type FormStep = 'personal' | 'financial' | 'documents' | 'review'

export interface PersonalData {
  fullName: string
  email: string
  cpf: string
  phone: string
  birthDate: string
}

export interface FinancialData {
  monthlyIncome: number
  monthlyExpenses: number
  hasInvestments: boolean
  investmentTypes: string[]
  financialGoal: string
}

export interface DocumentData {
  identificationFile: File | null
  proofOfIncomeFile: File | null
  proofOfAddressFile: File | null
  files: File[]
}

export interface FormData {
  personal: PersonalData
  financial: FinancialData
  documents: DocumentData
  agreedToTerms: boolean
}

export interface ValidationState {
  [key: string]: {
    isValid: boolean
    message: string
    touched: boolean
  }
}

export interface AutoCompleteOption {
  id: string
  label: string
  value: string
  category?: string
}