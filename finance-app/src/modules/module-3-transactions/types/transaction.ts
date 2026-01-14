// src/modules/module-3-transactions/types/transaction.ts

export type TransactionType = 'income' | 'expense' | 'transfer'

export interface Transaction {
  id: string
  type: TransactionType
  amount: number
  description: string
  category: string
  date: string
  account: string
  tags: string[]
  notes?: string
  recurring?: boolean
}

export interface TransactionFormData {
  type: TransactionType
  amount: number
  description: string
  category: string
  date: string
  account: string
  tags: string[]
  notes: string
  recurring: boolean
}

export interface Category {
  id: string
  name: string
  type: TransactionType
  color: string
}

export interface Account {
  id: string
  name: string
  type: 'checking' | 'savings' | 'investment' | 'cash' | 'credit'
  balance: number
}

export interface FilterState {
  types: TransactionType[]
  dateFrom: string
  dateTo: string
  categories: string[]
  minAmount: number | null
  maxAmount: number | null
}

// Funções utilitárias para transações
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR')
}

export const getTypeIcon = (type: TransactionType): string => {
  switch (type) {
    case 'income': return '↑'
    case 'expense': return '↓'
    case 'transfer': return '↔'
    default: return '?'
  }
}

export const getTypeColor = (type: TransactionType): string => {
  switch (type) {
    case 'income': return '#10b981'
    case 'expense': return '#ef4444'
    case 'transfer': return '#8b5cf6'
    default: return '#6b7280'
  }
}

export const getTypeName = (type: TransactionType): string => {
  switch (type) {
    case 'income': return 'Receita'
    case 'expense': return 'Despesa'
    case 'transfer': return 'Transferência'
    default: return 'Desconhecido'
  }
}

// Categorias padrão
export const defaultCategories = {
  income: ['Salário', 'Freelance', 'Investimentos', 'Presente', 'Outros'],
  expense: ['Alimentação', 'Moradia', 'Transporte', 'Lazer', 'Saúde', 'Educação', 'Compras', 'Outros'],
  transfer: ['Transferência entre contas', 'Pagamento', 'Outros']
}

// Contas padrão
export const defaultAccounts = [
  { id: 'nubank', name: 'NuBank', type: 'checking' as const, balance: 5240.75 },
  { id: 'inter', name: 'Inter', type: 'savings' as const, balance: 10180.00 },
  { id: 'carteira', name: 'Carteira', type: 'cash' as const, balance: 200.00 },
  { id: 'itau', name: 'Itaú', type: 'checking' as const, balance: 1500.00 },
  { id: 'bradesco', name: 'Bradesco', type: 'credit' as const, balance: -800.00 },
]

// Validação do formulário
export const validateTransactionForm = (data: TransactionFormData): string[] => {
  const errors: string[] = []

  if (data.amount <= 0) {
    errors.push('O valor deve ser maior que zero')
  }

  if (!data.description.trim()) {
    errors.push('A descrição é obrigatória')
  }

  if (!data.category.trim()) {
    errors.push('A categoria é obrigatória')
  }

  if (!data.date) {
    errors.push('A data é obrigatória')
  }

  if (!data.account.trim()) {
    errors.push('A conta é obrigatória')
  }

  return errors
}

// Gerar ID único
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}