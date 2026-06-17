import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, Card, CardHeader } from '@/components/ui'
import { transactionService } from '@/services'
import type { DailySummary, Transaction } from '@/types/transaction'
import { RecentTransactions } from './components/RecentTransactions'
import { SummaryCards } from './components/SummaryCards'

const emptySummary: DailySummary = {
  income: 0,
  expense: 0,
  saving: 0,
  balance: 0,
}

export function HomePage() {
  const { t } = useTranslation('home')
  const [summary, setSummary] = useState<DailySummary>(emptySummary)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    void Promise.all([
      transactionService.getTodaySummary(),
      transactionService.getRecentTransactions(),
    ]).then(([summaryData, transactionData]) => {
      setSummary(summaryData)
      setTransactions(transactionData)
    })
  }, [])

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-text">{t('title')}</h2>
          <p className="mt-1 text-sm text-text-muted">{t('description')}</p>
        </div>

        <div className="flex gap-2">
          <Link to="/transactions">
            <Button>{t('addEntry')}</Button>
          </Link>
          <Link to="/slip-scan">
            <Button variant="secondary">{t('scanSlip')}</Button>
          </Link>
        </div>
      </section>

      <SummaryCards summary={summary} />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader
            title={t('recentTransactions.title')}
            description={t('recentTransactions.description')}
          />
          <RecentTransactions transactions={transactions} />
        </Card>

        <Card>
          <CardHeader
            title={t('quickActions.title')}
            description={t('quickActions.description')}
          />
          <div className="grid gap-3">
            <Link
              to="/transactions"
              className="rounded-xl border border-dashed border-border px-4 py-4 text-sm text-text-muted transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {t('quickActions.addEntry')}
            </Link>
            <Link
              to="/slip-scan"
              className="rounded-xl border border-dashed border-border px-4 py-4 text-sm text-text-muted transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {t('quickActions.uploadSlip')}
            </Link>
            <Link
              to="/settings"
              className="rounded-xl border border-dashed border-border px-4 py-4 text-sm text-text-muted transition-colors hover:border-brand-500 hover:text-brand-700"
            >
              {t('quickActions.lineNotifications')}
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
