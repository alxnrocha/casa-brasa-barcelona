import { useRef, useState } from 'react'
import {
  allergenOptions,
  dietaryTagOptions,
  menuCategories,
  menuItems,
} from '../data/menu'
import type {
  Allergen,
  DietaryTag,
  MenuCategory,
  MenuItem,
  MenuSort,
  PriceRange,
} from '../types/menu'
import { normalizeSearchText } from '../utils/search'
import { ActiveFilters, type ActiveFilter } from './ActiveFilters'
import { DishModal } from './DishModal'
import { EmptyState } from './EmptyState'
import { FilterPanel } from './FilterPanel'
import { MenuGrid } from './MenuGrid'
import { MenuSortControl } from './MenuSortControl'
import { SearchBar } from './SearchBar'

type MenuSectionProps = {
  onAddToSelection: (item: MenuItem, quantity: number) => void
}

export function MenuSection({ onAddToSelection }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>('entrantes')
  const [searchQuery, setSearchQuery] = useState('')
  const [dietaryTags, setDietaryTags] = useState<DietaryTag[]>([])
  const [spicyOnly, setSpicyOnly] = useState(false)
  const [priceRange, setPriceRange] = useState<PriceRange>('all')
  const [excludedAllergens, setExcludedAllergens] = useState<Allergen[]>([])
  const [sortOrder, setSortOrder] = useState<MenuSort>('featured')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const detailTriggerRef = useRef<HTMLButtonElement | null>(null)

  const normalizedQuery = normalizeSearchText(searchQuery)
  const filteredItems = menuItems.filter((item) => {
    if (item.category !== activeCategory) {
      return false
    }

    if (normalizedQuery) {
      const searchableText = normalizeSearchText(
        [item.name, item.description, ...item.ingredients].join(' '),
      )

      if (!searchableText.includes(normalizedQuery)) {
        return false
      }
    }

    if (!dietaryTags.every((tag) => item.dietaryTags.includes(tag))) {
      return false
    }

    if (spicyOnly && item.spicyLevel === 0) {
      return false
    }

    if (priceRange === 'under-7' && item.price >= 7) {
      return false
    }

    if (priceRange === '7-to-15' && (item.price < 7 || item.price > 15)) {
      return false
    }

    if (priceRange === 'over-15' && item.price <= 15) {
      return false
    }

    if (
      excludedAllergens.some((allergen) => item.allergens.includes(allergen))
    ) {
      return false
    }

    return true
  })
  const visibleItems = filteredItems
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return a.item.price - b.item.price || a.index - b.index
      }

      if (sortOrder === 'price-desc') {
        return b.item.price - a.item.price || a.index - b.index
      }

      return (
        Number(b.item.featured) - Number(a.item.featured) || a.index - b.index
      )
    })
    .map(({ item }) => item)

  const toggleDietaryTag = (tag: DietaryTag) => {
    setDietaryTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag],
    )
  }

  const toggleAllergen = (allergen: Allergen) => {
    setExcludedAllergens((current) =>
      current.includes(allergen)
        ? current.filter((item) => item !== allergen)
        : [...current, allergen],
    )
  }

  const clearFilters = () => {
    setDietaryTags([])
    setSpicyOnly(false)
    setPriceRange('all')
    setExcludedAllergens([])
  }

  const clearCurrentRefinement = () => {
    clearFilters()
    setSearchQuery('')
  }

  const hasActiveFilters =
    dietaryTags.length > 0 ||
    spicyOnly ||
    priceRange !== 'all' ||
    excludedAllergens.length > 0

  const priceLabels: Record<Exclude<PriceRange, 'all'>, string> = {
    'under-7': 'Menos de 7 €',
    '7-to-15': 'De 7 € a 15 €',
    'over-15': 'Más de 15 €',
  }

  const activeFilters: ActiveFilter[] = [
    ...dietaryTags.map((tag) => ({
      id: `dietary-${tag}`,
      label:
        dietaryTagOptions.find((option) => option.id === tag)?.label ?? tag,
      onRemove: () => toggleDietaryTag(tag),
    })),
    ...(spicyOnly
      ? [
          {
            id: 'spicy',
            label: 'Picante',
            onRemove: () => setSpicyOnly(false),
          },
        ]
      : []),
    ...(priceRange !== 'all'
      ? [
          {
            id: 'price',
            label: priceLabels[priceRange],
            onRemove: () => setPriceRange('all'),
          },
        ]
      : []),
    ...excludedAllergens.map((allergen) => ({
      id: `allergen-${allergen}`,
      label: `Sin ${
        allergenOptions.find((option) => option.id === allergen)?.label ??
        allergen
      }`,
      onRemove: () => toggleAllergen(allergen),
    })),
  ]

  const openDetails = (item: MenuItem, trigger: HTMLButtonElement) => {
    detailTriggerRef.current = trigger
    setSelectedItem(item)
  }

  const closeDetails = () => {
    setSelectedItem(null)
    requestAnimationFrame(() => detailTriggerRef.current?.focus())
  }

  return (
    <section
      id="carta"
      className="scroll-mt-24 bg-[#fffdf9] px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
      aria-labelledby="menu-title"
    >
      <div className="mx-auto max-w-[80rem]">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-wine">
            Carta digital
          </p>
          <h2
            id="menu-title"
            className="mt-4 font-display text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.035em] text-charcoal"
          >
            Sabores para compartir sin prisa.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/68">
            Una selección mediterránea basada en producto de temporada, fuego
            y recetas pensadas para disfrutar en la mesa.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,31rem)_1fr] lg:items-center">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />

          <div className="overflow-x-auto pb-2 lg:justify-self-end">
          <nav
            className="flex min-w-max gap-2"
            aria-label="Categorías de la carta"
          >
            {menuCategories.map((category) => {
              const isActive = category.id === activeCategory

              return (
                <button
                  type="button"
                  className={`min-h-11 rounded-xl border px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine ${
                    isActive
                      ? 'border-wine bg-wine text-white'
                      : 'border-charcoal/12 bg-cream/45 text-charcoal/72 hover:border-wine/35 hover:text-wine'
                  }`}
                  key={category.id}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              )
            })}
          </nav>
          </div>
        </div>

        <FilterPanel
          dietaryTags={dietaryTags}
          spicyOnly={spicyOnly}
          priceRange={priceRange}
          excludedAllergens={excludedAllergens}
          onToggleDietaryTag={toggleDietaryTag}
          onToggleSpicy={() => setSpicyOnly((current) => !current)}
          onPriceRangeChange={setPriceRange}
          onToggleAllergen={toggleAllergen}
        />
        <ActiveFilters filters={activeFilters} onClearAll={clearFilters} />

        <div
          id="menu-category-panel"
          className="mt-8"
          aria-live="polite"
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-charcoal/58">
                {visibleItems.length}{' '}
                {visibleItems.length === 1 ? 'resultado' : 'resultados'}
              </p>
              <p className="text-xs text-charcoal/45">
                <span className="sm:hidden">IVA incluido</span>
                <span className="hidden sm:inline">
                  Precios con IVA incluido
                </span>
              </p>
            </div>
            <MenuSortControl value={sortOrder} onChange={setSortOrder} />
          </div>
          {visibleItems.length > 0 ? (
            <MenuGrid items={visibleItems} onViewDetails={openDetails} />
          ) : (
            <EmptyState
              description={
                hasActiveFilters && searchQuery
                  ? 'No hay platos que cumplan la búsqueda y los filtros dentro de la categoría seleccionada.'
                  : hasActiveFilters
                  ? 'No hay platos que cumplan esta combinación dentro de la categoría seleccionada.'
                  : `No hay platos que coincidan con “${searchQuery}” dentro de esta categoría.`
              }
              actionLabel={
                hasActiveFilters && searchQuery
                  ? 'Limpiar búsqueda y filtros'
                  : hasActiveFilters
                    ? 'Limpiar filtros'
                    : 'Limpiar búsqueda'
              }
              onReset={
                hasActiveFilters && searchQuery
                  ? clearCurrentRefinement
                  : hasActiveFilters
                    ? clearFilters
                    : () => setSearchQuery('')
              }
            />
          )}
        </div>
      </div>
      <DishModal
        key={selectedItem?.id ?? 'closed'}
        item={selectedItem}
        onAddToSelection={onAddToSelection}
        onClose={closeDetails}
      />
    </section>
  )
}
