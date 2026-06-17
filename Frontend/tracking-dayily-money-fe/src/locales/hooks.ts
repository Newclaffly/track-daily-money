import { useTranslation } from 'react-i18next'
import type { SupportedLanguage } from '@/locales'
import { formatCurrency as formatCurrencyValue } from '@/locales/utils'

export function useFormatCurrency() {
  const { i18n } = useTranslation()

  return (amount: number) => formatCurrencyValue(amount, i18n.language)
}

export function useAppLanguage() {
  const { i18n } = useTranslation()

  const changeLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language)
  }

  return {
    language: i18n.language as SupportedLanguage,
    changeLanguage,
  }
}
