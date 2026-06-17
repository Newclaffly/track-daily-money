import { useTranslation } from 'react-i18next'
import { Button, Card, CardHeader, LanguageSwitcher } from '@/components/ui'
import { LineNotificationSettings } from './components/LineNotificationSettings'

export function SettingsPage() {
  const { t } = useTranslation('settings')

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-text">{t('title')}</h2>
        <p className="mt-1 text-sm text-text-muted">{t('description')}</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader
            title={t('line.title')}
            description={t('line.description')}
          />
          <LineNotificationSettings />
        </Card>

        <Card>
          <CardHeader
            title={t('general.title')}
            description={t('general.description')}
          />
          <div className="space-y-4 text-sm text-text-muted">
            <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <span>{t('general.currency')}</span>
              <span className="font-medium text-text">{t('general.currencyValue')}</span>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span>{t('general.language')}</span>
              <LanguageSwitcher />
            </div>
            <Button variant="secondary" className="w-full">
              {t('general.save')}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
