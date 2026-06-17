import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Transaction } from '@/types/transaction'
import { Badge } from '@/components/ui'
import { useFormatCurrency } from '@/locales/hooks'

type RecentTransactionsProps = {
  transactions: Transaction[]
}

const badgeVariant = {
  income: 'income',
  expense: 'expense',
  saving: 'saving',
} as const

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const { t } = useTranslation(['home', 'common'])
  const formatCurrency = useFormatCurrency()

  return (
    <div className="space-y-3">
      {transactions.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3"
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
          </div>
          <p className="text-sm font-semibold text-text">
            {formatCurrency(item.amount)}
          </p>
        </div>
      ))}

      <Link
        to="/transactions"
        className="inline-flex text-sm font-medium text-brand-700 hover:text-brand-600"
      >
        {t('home:recentTransactions.viewAll')}
      </Link>
    </div>
  )
}
