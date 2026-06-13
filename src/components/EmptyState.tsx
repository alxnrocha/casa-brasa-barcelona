import { SearchX } from 'lucide-react'

type EmptyStateProps = {
  title?: string
  description: string
  actionLabel: string
  onReset: () => void
}

export function EmptyState({
  title = 'No encontramos resultados',
  description,
  actionLabel,
  onReset,
}: EmptyStateProps) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-charcoal/18 bg-cream/35 px-6 py-14 text-center">
      <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-wine/8 text-wine">
        <SearchX aria-hidden="true" size={22} strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 font-display text-2xl text-charcoal">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-charcoal/62">
        {description}
      </p>
      <button
        type="button"
        className="mt-6 min-h-11 cursor-pointer rounded-lg bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
        onClick={onReset}
      >
        {actionLabel}
      </button>
    </div>
  )
}
