import type { DailySummary, Transaction } from '@/types/transaction'

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 35000,
    category: 'Salary',
    note: 'Monthly salary',
    date: '2026-06-17',
  },
  {
    id: '2',
    type: 'expense',
    amount: 120,
    category: 'Food',
    note: 'Lunch',
    date: '2026-06-17',
  },
  {
    id: '3',
    type: 'saving',
    amount: 500,
    category: 'Emergency fund',
    date: '2026-06-17',
  },
]

export const transactionService = {
  async getTodaySummary(): Promise<DailySummary> {
    const today = mockTransactions.filter((item) => item.date === '2026-06-17')

    const income = today
      .filter((item) => item.type === 'income')
      .reduce((sum, item) => sum + item.amount, 0)
    const expense = today
      .filter((item) => item.type === 'expense')
      .reduce((sum, item) => sum + item.amount, 0)
    const saving = today
      .filter((item) => item.type === 'saving')
      .reduce((sum, item) => sum + item.amount, 0)

    return {
      income,
      expense,
      saving,
      balance: income - expense - saving,
    }
  },

  async getRecentTransactions(): Promise<Transaction[]> {
    return mockTransactions
  },
}
