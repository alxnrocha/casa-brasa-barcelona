import { ChevronDown, Flame, Leaf, ShieldCheck, WheatOff } from 'lucide-react'
import { allergenOptions, dietaryTagOptions } from '../data/menu'
import type { Allergen, DietaryTag, PriceRange } from '../types/menu'

type FilterPanelProps = {
  dietaryTags: readonly DietaryTag[]
  spicyOnly: boolean
  priceRange: PriceRange
  excludedAllergens: readonly Allergen[]
  onToggleDietaryTag: (tag: DietaryTag) => void
  onToggleSpicy: () => void
  onPriceRangeChange: (range: PriceRange) => void
  onToggleAllergen: (allergen: Allergen) => void
}

const dietaryIcons = {
  vegetariano: Leaf,
  vegano: Leaf,
  'sin-gluten': WheatOff,
} as const

const priceOptions: readonly { value: PriceRange; label: string }[] = [
  { value: 'all', label: 'Cualquier precio' },
  { value: 'under-7', label: 'Menos de 7 €' },
  { value: '7-to-15', label: 'De 7 € a 15 €' },
  { value: 'over-15', label: 'Más de 15 €' },
]

export function FilterPanel({
  dietaryTags,
  spicyOnly,
  priceRange,
  excludedAllergens,
  onToggleDietaryTag,
  onToggleSpicy,
  onPriceRangeChange,
  onToggleAllergen,
}: FilterPanelProps) {
  return (
    <div className="mt-5 rounded-[1.35rem] border border-charcoal/10 bg-cream/28 p-4 sm:p-5">
      <div className="flex flex-wrap gap-2.5">
        {dietaryTagOptions.map((option) => {
          const Icon = dietaryIcons[option.id]
          const isActive = dietaryTags.includes(option.id)

          return (
            <button
              type="button"
              className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl border px-3.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
                isActive
                  ? 'border-olive bg-olive text-white'
                  : 'border-charcoal/12 bg-white/65 text-charcoal/68 hover:border-olive/40 hover:text-olive'
              }`}
              key={option.id}
              aria-pressed={isActive}
              onClick={() => onToggleDietaryTag(option.id)}
            >
              <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
              {option.label}
            </button>
          )
        })}

        <button
          type="button"
          className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl border px-3.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
            spicyOnly
              ? 'border-terracotta bg-terracotta text-white'
              : 'border-charcoal/12 bg-white/65 text-charcoal/68 hover:border-terracotta/40 hover:text-terracotta'
          }`}
          aria-pressed={spicyOnly}
          onClick={onToggleSpicy}
        >
          <Flame aria-hidden="true" size={16} strokeWidth={1.8} />
          Picante
        </button>

        <label className="relative min-w-44">
          <span className="sr-only">Franja de precio</span>
          <select
            className="min-h-10 w-full cursor-pointer appearance-none rounded-xl border border-charcoal/12 bg-white/65 py-2 pl-3.5 pr-9 text-xs font-semibold text-charcoal/68 outline-none transition-colors hover:border-wine/35 focus:border-wine/45 focus:ring-3 focus:ring-wine/10"
            value={priceRange}
            onChange={(event) =>
              onPriceRangeChange(event.target.value as PriceRange)
            }
          >
            {priceOptions.map((option) => (
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
        </label>

        <details className="group relative w-full sm:w-auto">
          <summary className="inline-flex min-h-10 w-full cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-charcoal/12 bg-white/65 px-3.5 text-xs font-semibold text-charcoal/68 transition-colors hover:border-wine/35 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine sm:w-auto">
            <ShieldCheck aria-hidden="true" size={16} strokeWidth={1.8} />
            Sin alérgenos
            {excludedAllergens.length > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-wine text-[0.65rem] text-white">
                {excludedAllergens.length}
              </span>
            )}
            <ChevronDown
              className="transition-transform group-open:rotate-180"
              aria-hidden="true"
              size={15}
              strokeWidth={1.8}
            />
          </summary>
          <div className="absolute left-0 right-0 top-full z-10 mt-2 grid max-h-64 min-w-0 overflow-y-auto rounded-xl border border-charcoal/12 bg-[#fffaf2] p-2 shadow-[0_18px_42px_rgba(54,38,28,0.16)] sm:right-auto sm:grid-cols-2 sm:min-w-[26rem]">
            {allergenOptions.map((option) => (
              <label
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-charcoal/72 hover:bg-wine/5"
                key={option.id}
              >
                <input
                  type="checkbox"
                  className="size-4 accent-wine"
                  checked={excludedAllergens.includes(option.id)}
                  onChange={() => onToggleAllergen(option.id)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </details>
      </div>
    </div>
  )
}
