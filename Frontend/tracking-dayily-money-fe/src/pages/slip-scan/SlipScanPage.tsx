import { useTranslation } from 'react-i18next'
import { Button, Card, CardHeader } from '@/components/ui'
import { SlipUploadZone } from './components/SlipUploadZone'

export function SlipScanPage() {
  const { t } = useTranslation('slipScan')

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-text">{t('title')}</h2>
        <p className="mt-1 text-sm text-text-muted">{t('description')}</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader
            title={t('upload.title')}
            description={t('upload.description')}
          />
          <SlipUploadZone />
        </Card>

        <Card>
          <CardHeader
            title={t('preview.title')}
            description={t('preview.description')}
          />
          <div className="rounded-xl border border-dashed border-border bg-slate-50 p-6 text-sm text-text-muted">
            {t('preview.empty')}
          </div>
          <Button className="mt-4" disabled>
            {t('preview.save')}
          </Button>
        </Card>
      </div>
    </div>
  )
}
