import { ChevronDown, Menu, ShoppingBasket, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'

const navigationItems = [
  { href: '#carta', label: 'Carta' },
  { href: '#sobre', label: 'Sobre Casa Brasa' },
  { href: '#informacion', label: 'Información' },
  { href: '#contacto', label: 'Contacto' },
]

type HeaderProps = {
  selectionCount: number
  onOpenSelection: (trigger: HTMLButtonElement) => void
}

export function Header({
  selectionCount,
  onOpenSelection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="relative z-20 border-b border-charcoal/15 bg-cream/95 backdrop-blur">
      <nav
        className="mx-auto flex min-h-20 max-w-7xl items-center gap-5 px-6 sm:px-10 lg:px-12"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          aria-label="Casa Brasa Barcelona, inicio"
        >
          <BrandLogo className="w-28 sm:w-32" />
        </a>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-sm text-sm font-medium text-charcoal/78 transition-colors hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <span
            className="flex items-center gap-2 text-sm font-semibold text-charcoal"
            aria-label="Idioma: español"
          >
            <span
              className="size-4 rounded-full border border-charcoal/10 bg-[linear-gradient(to_bottom,#aa151b_0_25%,#f1bf00_25%_75%,#aa151b_75%_100%)]"
              aria-hidden="true"
            />
            ES
            <ChevronDown aria-hidden="true" size={15} strokeWidth={1.8} />
          </span>

          <button
            type="button"
            className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md bg-wine px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(114,47,55,0.18)] transition-colors hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            aria-label={`Selección, ${selectionCount} ${
              selectionCount === 1 ? 'plato' : 'platos'
            }`}
            onClick={(event) => onOpenSelection(event.currentTarget)}
          >
            Ver selección
            <span className="relative" aria-hidden="true">
              <ShoppingBasket size={19} strokeWidth={1.8} />
              <span className="absolute -right-3 -top-2.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-cream px-1 text-[0.62rem] font-bold text-wine">
                {selectionCount}
              </span>
            </span>
          </button>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <span
            className="text-xs font-semibold text-charcoal"
            aria-label="Idioma: español"
          >
            ES
          </span>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-wine hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={21} />
            ) : (
              <Menu aria-hidden="true" size={21} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full border-b border-charcoal/15 bg-cream px-6 shadow-[0_24px_40px_rgba(36,31,27,0.1)] transition-[opacity,transform,visibility] duration-200 sm:px-10 lg:hidden ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="divide-y divide-charcoal/10">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="block py-4 text-base font-medium text-charcoal transition-colors hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-wine"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="my-5 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
          aria-label={`Selección, ${selectionCount} ${
            selectionCount === 1 ? 'plato' : 'platos'
          }`}
          onClick={(event) => {
            onOpenSelection(event.currentTarget)
          }}
        >
          Ver selección
          <ShoppingBasket aria-hidden="true" size={19} strokeWidth={1.8} />
          <span aria-hidden="true">{selectionCount}</span>
        </button>
      </div>
    </header>
  )
}
