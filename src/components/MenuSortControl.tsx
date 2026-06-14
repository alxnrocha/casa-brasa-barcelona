import { ArrowUpDown, ChevronDown } from 'lucide-react'
import type { MenuSort } from '../types/menu'

type MenuSortControlProps = {
  value: MenuSort
  onChange: (value: MenuSort) => void
}

const sortOptions: readonly { value: MenuSort; label: string }[] = [
  { value: 'featured', label: 'Destacados' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
]

export function MenuSortControl({
  value,
  onChange,
}: MenuSortControlProps) {
  return (
    <label className="flex w-full items-center gap-2 sm:w-auto">
      <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-charcoal/48">
        <ArrowUpDown aria-hidden="true" size={14} strokeWidth={1.8} />
        Ordenar por
      </span>
      <span className="relative min-w-0 flex-1 sm:min-w-48">
        <select
          className="min-h-10 w-full cursor-pointer appearance-none rounded-xl border border-charcoal/12 bg-white py-2 pl-3.5 pr-9 text-xs font-semibold text-charcoal/72 outline-none transition-colors hover:border-wine/35 focus:border-wine/45 focus:ring-3 focus:ring-wine/10"
          value={value}
          aria-label="Ordenar platos"
          onChange={(event) => onChange(event.target.value as MenuSort)}
        >
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/45"
          aria-hidden="true"
          size={15}
          strokeWidth={1.8}
        />
      </span>
    </label>
  )
}
