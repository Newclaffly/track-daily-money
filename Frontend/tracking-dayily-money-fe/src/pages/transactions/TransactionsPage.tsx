import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge, Button, Card, CardHeader } from '@/components/ui'
import { useFormatCurrency } from '@/locales/hooks'
import { transactionService } from '@/services'
import type { Transaction } from '@/types/transaction'
import { TransactionForm } from './components/TransactionForm'

const badgeVariant = {
  income: 'income',
  expense: 'expense',
  saving: 'saving',
} as const

export function TransactionsPage() {
  const { t } = useTranslation(['transactions', 'common'])
  const formatCurrency = useFormatCurrency()
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    void transactionService.getRecentTransactions().then(setTransactions)
  }, [])

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-text">{t('transactions:title')}</h2>
        <p className="mt-1 text-sm text-text-muted">{t('transactions:description')}</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <Card>
          <CardHeader
            title={t('transactions:newEntry.title')}
            description={t('transactions:newEntry.description')}
          />
          <TransactionForm />
        </Card>

        <Card>
          <CardHeader
            title={t('transactions:allEntries.title')}
            description={t('transactions:allEntries.description')}
            action={
              <Button variant="secondary" size="sm">
                {t('common:filter')}
              </Button>
            }
          />

          <div className="space-y-3">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-text">{item.category}</p>
                    <Badge
                      label={t(`common:transactionType.${item.type}`)}
                      variant={badgeVariant[item.type]}
                    />
                  </div>
                  {item.note ? (
                    <p className="mt-1 text-xs text-text-muted">{item.note}</p>
                  ) : null}
                  <p className="mt-1 text-xs text-text-muted">{item.date}</p>
                </div>
                <p className="text-sm font-semibold text-text">
                  {formatCurrency(item.amount)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
