import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui'

export function TransactionForm() {
  const { t } = useTranslation(['transactions', 'common'])

  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text" htmlFor="type">
          {t('transactions:form.type')}
        </label>
        <select
          id="type"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          defaultValue="expense"
        >
          <option value="income">{t('common:transactionType.income')}</option>
          <option value="expense">{t('common:transactionType.expense')}</option>
          <option value="saving">{t('common:transactionType.saving')}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text" htmlFor="amount">
          {t('transactions:form.amount')}
        </label>
        <input
          id="amount"
          type="number"
          min="0"
          placeholder="0"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div>
        <label
          className="mb-1.5 block text-sm font-medium text-text"
          htmlFor="category"
        >
          {t('transactions:form.category')}
        </label>
        <input
          id="category"
          type="text"
          placeholder={t('transactions:form.categoryPlaceholder')}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text" htmlFor="note">
          {t('transactions:form.note')}
        </label>
        <textarea
          id="note"
          rows={3}
          placeholder={t('transactions:form.notePlaceholder')}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <Button type="submit" className="w-full">
        {t('transactions:form.save')}
      </Button>
    </form>
  )
}
