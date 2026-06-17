import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enCommon from './en/common.json'
import enHome from './en/home.json'
import enLayout from './en/layout.json'
import enSettings from './en/settings.json'
import enSlipScan from './en/slipScan.json'
import enTransactions from './en/transactions.json'
import thCommon from './th/common.json'
import thHome from './th/home.json'
import thLayout from './th/layout.json'
import thSettings from './th/settings.json'
import thSlipScan from './th/slipScan.json'
import thTransactions from './th/transactions.json'

export const SUPPORTED_LANGUAGES = ['en', 'th'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const LANGUAGE_STORAGE_KEY = 'track-daily-money-language'

const resources = {
  en: {
    common: enCommon,
    layout: enLayout,
    home: enHome,
    transactions: enTransactions,
    slipScan: enSlipScan,
    settings: enSettings,
  },
  th: {
    common: thCommon,
    layout: thLayout,
    home: thHome,
    transactions: thTransactions,
    slipScan: thSlipScan,
    settings: thSettings,
  },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    defaultNS: 'common',
    ns: ['common', 'layout', 'home', 'transactions', 'slipScan', 'settings'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
})

document.documentElement.lang = i18n.language

export default i18n
