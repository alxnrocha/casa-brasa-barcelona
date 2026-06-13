import { X } from 'lucide-react'

export type ActiveFilter = {
  id: string
  label: string
  onRemove: () => void
}

type ActiveFiltersProps = {
  filters: readonly ActiveFilter[]
  onClearAll: () => void
}

export function ActiveFilters({
  filters,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) {
    return null
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <p className="mr-1 text-xs font-semibold text-charcoal/48">
        Filtros activos:
      </p>
      {filters.map((filter) => (
        <button
          type="button"
          className="inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-full border border-wine/12 bg-wine/7 px-3 text-xs font-semibold text-wine transition-colors hover:bg-wine/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          key={filter.id}
          aria-label={`Quitar filtro ${filter.label}`}
          onClick={filter.onRemove}
        >
          {filter.label}
          <X aria-hidden="true" size={13} strokeWidth={2} />
        </button>
      ))}
      <button
        type="button"
        className="min-h-8 cursor-pointer rounded-sm px-2 text-xs font-semibold text-charcoal/55 underline decoration-charcoal/20 underline-offset-4 transition-colors hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
        onClick={onClearAll}
      >
        Limpiar filtros
      </button>
    </div>
  )
}
