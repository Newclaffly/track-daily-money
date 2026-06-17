import type { DailySummary } from '@/types/transaction'
import { useTranslation } from 'react-i18next'
import { useFormatCurrency } from '@/locales/hooks'

type SummaryCardsProps = {
  summary: DailySummary
}

const cards = [
  { key: 'income', color: 'text-emerald-600' },
  { key: 'expense', color: 'text-rose-600' },
  { key: 'saving', color: 'text-sky-600' },
  { key: 'balance', color: 'text-text' },
] as const

export function SummaryCards({ summary }: SummaryCardsProps) {
  const { t } = useTranslation('common')
  const formatCurrency = useFormatCurrency()

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className="rounded-2xl border border-border bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-text-muted">{t(`summary.${card.key}`)}</p>
          <p className={`mt-3 text-2xl font-semibold ${card.color}`}>
            {formatCurrency(summary[card.key])}
          </p>
        </div>
      ))}
    </div>
  )
}
