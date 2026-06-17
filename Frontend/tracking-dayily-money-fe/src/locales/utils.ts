import type { SupportedLanguage } from '@/locales'

const localeMap: Record<SupportedLanguage, string> = {
  en: 'en-US',
  th: 'th-TH',
}

export function formatCurrency(amount: number, language: string) {
  const locale = localeMap[language as SupportedLanguage] ?? 'en-US'

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'THB',
    maximumFractionDigits: 0,
  }).format(amount)
}
