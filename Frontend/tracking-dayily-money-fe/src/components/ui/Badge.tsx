type BadgeVariant = 'income' | 'expense' | 'saving' | 'neutral'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  income: 'bg-emerald-50 text-emerald-700',
  expense: 'bg-rose-50 text-rose-700',
  saving: 'bg-sky-50 text-sky-700',
  neutral: 'bg-slate-100 text-slate-600',
}

export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  )
}
