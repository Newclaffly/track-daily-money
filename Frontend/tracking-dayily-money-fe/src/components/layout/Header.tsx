import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/ui'

const mobileNavItems = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/transactions', labelKey: 'nav.list' },
  { to: '/slip-scan', labelKey: 'nav.scan' },
  { to: '/settings', labelKey: 'nav.settings' },
] as const

export function Header() {
  const { t } = useTranslation(['layout', 'common'])

  return (
    <header className="border-b border-border bg-white">
      <div className="flex h-16 items-center justify-between gap-4 px-4 lg:px-8">
        <div className="lg:hidden">
          <p className="text-sm font-semibold text-text">{t('common:appName')}</p>
          <p className="text-xs text-text-muted">{t('layout:tagline')}</p>
        </div>

        <div className="hidden lg:block">
          <h1 className="text-lg font-semibold text-text">{t('layout:pageTitle')}</h1>
          <p className="text-sm text-text-muted">{t('layout:pageDescription')}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 sm:block">
            {t('common:today')}
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="grid grid-cols-4 border-t border-border lg:hidden">
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `px-2 py-3 text-center text-xs font-medium ${
                isActive ? 'text-brand-700' : 'text-text-muted'
              }`
            }
          >
            {t(`layout:${item.labelKey}`)}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
