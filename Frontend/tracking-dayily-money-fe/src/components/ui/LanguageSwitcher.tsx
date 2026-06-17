import { SUPPORTED_LANGUAGES } from '@/locales'
import { useAppLanguage } from '@/locales/hooks'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { t } = useTranslation('settings')
  const { language, changeLanguage } = useAppLanguage()

  return (
    <div className="flex gap-2">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => changeLanguage(lang)}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            language === lang
              ? 'bg-brand-600 text-white'
              : 'border border-border bg-white text-text-muted hover:text-text'
          }`}
        >
          {t(`language.${lang}`)}
        </button>
      ))}
    </div>
  )
}
