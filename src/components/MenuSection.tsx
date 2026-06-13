import { useRef, useState } from 'react'
import { menuCategories, menuItems } from '../data/menu'
import type { MenuCategory, MenuItem } from '../types/menu'
import { normalizeSearchText } from '../utils/search'
import { DishModal } from './DishModal'
import { EmptyState } from './EmptyState'
import { MenuGrid } from './MenuGrid'
import { SearchBar } from './SearchBar'

export function MenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>('entrantes')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const detailTriggerRef = useRef<HTMLButtonElement | null>(null)

  const normalizedQuery = normalizeSearchText(searchQuery)
  const visibleItems = menuItems.filter((item) => {
    if (item.category !== activeCategory) {
      return false
    }

    if (!normalizedQuery) {
      return true
    }

    const searchableText = normalizeSearchText(
      [item.name, item.description, ...item.ingredients].join(' '),
    )

    return searchableText.includes(normalizedQuery)
  })

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

        <div
          id="menu-category-panel"
          className="mt-8"
          aria-live="polite"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-charcoal/58">
              {visibleItems.length}{' '}
              {visibleItems.length === 1 ? 'resultado' : 'resultados'}
            </p>
            <p className="hidden text-xs text-charcoal/45 sm:block">
              Precios con IVA incluido
            </p>
          </div>
          {visibleItems.length > 0 ? (
            <MenuGrid items={visibleItems} onViewDetails={openDetails} />
          ) : (
            <EmptyState
              query={searchQuery}
              onReset={() => setSearchQuery('')}
            />
          )}
        </div>
      </div>
      <DishModal item={selectedItem} onClose={closeDetails} />
    </section>
  )
}
