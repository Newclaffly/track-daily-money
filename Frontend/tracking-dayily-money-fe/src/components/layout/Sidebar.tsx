import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const navItems = [
  { to: '/', labelKey: 'nav.dashboard' },
  { to: '/transactions', labelKey: 'nav.transactions' },
  { to: '/slip-scan', labelKey: 'nav.slipScan' },
  { to: '/settings', labelKey: 'nav.settings' },
] as const

export function Sidebar() {
  const { t } = useTranslation(['layout', 'common'])

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-white lg:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
            TM
          </div>
          <div>
            <p className="text-sm font-semibold text-text">{t('common:appName')}</p>
            <p className="text-xs text-text-muted">{t('common:version')}</p>
          </div>
        </div>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-text-muted hover:bg-slate-50 hover:text-text'
                  }`
                }
              >
                {t(`layout:${item.labelKey}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
