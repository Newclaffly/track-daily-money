import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui'

export function SlipUploadZone() {
  const { t } = useTranslation('slipScan')

  return (
    <div className="rounded-2xl border border-dashed border-border bg-slate-50 p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
        📄
      </div>
      <p className="mt-4 text-sm font-medium text-text">{t('upload.dropzone')}</p>
      <p className="mt-1 text-xs text-text-muted">{t('upload.fileHint')}</p>
      <Button variant="secondary" className="mt-4">
        {t('upload.chooseFile')}
      </Button>
    </div>
  )
}
