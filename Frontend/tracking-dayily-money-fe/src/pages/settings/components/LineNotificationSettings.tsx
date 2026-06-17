import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui'

export function LineNotificationSettings() {
  const { t } = useTranslation('settings')

  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
        <div>
          <p className="text-sm font-medium text-text">{t('line.dailySummary')}</p>
          <p className="text-xs text-text-muted">{t('line.dailySummaryHint')}</p>
        </div>
        <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand-600" />
      </label>

      <label className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
        <div>
          <p className="text-sm font-medium text-text">{t('line.overspendingAlert')}</p>
          <p className="text-xs text-text-muted">{t('line.overspendingAlertHint')}</p>
        </div>
        <input type="checkbox" className="h-4 w-4 accent-brand-600" />
      </label>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text" htmlFor="line-user-id">
          {t('line.userId')}
        </label>
        <input
          id="line-user-id"
          type="text"
          placeholder={t('line.userIdPlaceholder')}
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <Button className="w-full">{t('line.connect')}</Button>
    </div>
  )
}
