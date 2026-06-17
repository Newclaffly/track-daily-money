export type TransactionType = 'income' | 'expense' | 'saving'

export type Transaction = {
  id: string
  type: TransactionType
  amount: number
  category: string
  note?: string
  date: string
}

export type DailySummary = {
  income: number
  expense: number
  saving: number
  balance: number
}
