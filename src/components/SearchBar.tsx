import { Search, X } from 'lucide-react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/42"
        aria-hidden="true"
        size={19}
        strokeWidth={1.8}
      />
      <input
        type="search"
        className="min-h-13 w-full rounded-xl border border-charcoal/12 bg-white/80 py-3 pl-12 pr-12 text-sm text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-charcoal/38 focus:border-wine/45 focus:shadow-[0_0_0_3px_rgba(114,47,55,0.1)]"
        value={value}
        placeholder="Buscar platos o ingredientes"
        aria-label="Buscar platos o ingredientes"
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <button
          type="button"
          className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-charcoal/48 transition-colors hover:bg-wine/7 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          aria-label="Limpiar búsqueda"
          onClick={onClear}
        >
          <X aria-hidden="true" size={17} strokeWidth={1.8} />
        </button>
      )}
    </div>
  )
}
