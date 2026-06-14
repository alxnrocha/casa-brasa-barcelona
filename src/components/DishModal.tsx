import { useEffect, useRef, useState } from 'react'
import {
  Check,
  Flame,
  Leaf,
  Minus,
  Plus,
  ShoppingBasket,
  WheatOff,
  X,
} from 'lucide-react'
import {
  allergenOptions,
  dietaryTagOptions,
  menuCategories,
} from '../data/menu'
import { menuImages } from '../data/menuImages'
import type { MenuItem } from '../types/menu'

type DishModalProps = {
  item: MenuItem | null
  onAddToSelection: (item: MenuItem, quantity: number) => void
  onClose: () => void
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

const spicyLabels = ['Sin picante', 'Suave', 'Picante', 'Muy picante'] as const

export function DishModal({
  item,
  onAddToSelection,
  onClose,
}: DishModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [quantity, setQuantity] = useState(1)
  const [hasAdded, setHasAdded] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog || !item) {
      return
    }

    dialog.showModal()
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''

      if (dialog.open) {
        dialog.close()
      }
    }
  }, [item])

  useEffect(() => {
    if (!item) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [item, onClose])

  if (!item) {
    return null
  }

  const image = menuImages[item.imageId]
  const category = menuCategories.find(({ id }) => id === item.category)
  const dietaryLabels = item.dietaryTags.map(
    (tag) => dietaryTagOptions.find(({ id }) => id === tag)?.label ?? tag,
  )
  const allergenLabels = item.allergens.map(
    (allergen) =>
      allergenOptions.find(({ id }) => id === allergen)?.label ?? allergen,
  )

  const addItem = () => {
    onAddToSelection(item, quantity)
    setHasAdded(true)
  }

  return (
    <dialog
      ref={dialogRef}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(68rem,calc(100%-2rem))] overflow-hidden rounded-[1.75rem] border border-charcoal/12 bg-[#fffaf2] p-0 text-charcoal shadow-[0_32px_100px_rgba(32,20,14,0.35)] backdrop:bg-charcoal/65 backdrop:backdrop-blur-sm"
      aria-labelledby="dish-modal-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="relative grid max-h-[calc(100dvh-2rem)] overflow-y-auto lg:grid-cols-[0.92fr_1.08fr]">
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute right-4 top-4 z-20 flex size-11 cursor-pointer items-center justify-center rounded-full border border-charcoal/12 bg-white/85 text-charcoal shadow-md backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine sm:right-5 sm:top-5"
          aria-label="Cerrar detalle del plato"
          onClick={onClose}
        >
          <X aria-hidden="true" size={21} strokeWidth={1.8} />
        </button>

        <div className="relative min-h-72 overflow-hidden bg-charcoal/8 lg:min-h-full">
          <img
            className="absolute inset-0 size-full object-cover"
            src={image.src}
            alt={item.name}
            width={image.width}
            height={image.height}
          />
          {item.featured && (
            <span className="absolute left-5 top-5 rounded-full bg-wine px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white shadow-lg">
              Más popular
            </span>
          )}
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10">
          <p className="pr-14 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-wine">
            {category?.label}
          </p>
          <h2
            id="dish-modal-title"
            className="mt-3 max-w-xl pr-10 font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.98] tracking-[-0.035em]"
          >
            {item.name}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-charcoal/68">
            {item.description}
          </p>

          <p className="mt-7 font-display text-3xl text-wine">
            {priceFormatter.format(item.price)}
          </p>

          <div className="mt-8 grid gap-7 border-t border-charcoal/12 pt-7 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/48">
                Ingredientes
              </h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/72">
                {item.ingredients.join(', ')}.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/48">
                Alérgenos
              </h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/72">
                {allergenLabels.length > 0
                  ? allergenLabels.join(', ')
                  : 'No contiene alérgenos declarados.'}
              </p>
            </div>
          </div>

          <div className="mt-7 border-t border-charcoal/12 pt-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/48">
              Características
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {dietaryLabels.map((label) => (
                <li
                  className="inline-flex items-center gap-2 rounded-full border border-olive/20 bg-olive/8 px-3 py-2 text-xs font-semibold text-olive"
                  key={label}
                >
                  {label === 'Sin gluten' ? (
                    <WheatOff aria-hidden="true" size={15} strokeWidth={1.8} />
                  ) : (
                    <Leaf aria-hidden="true" size={15} strokeWidth={1.8} />
                  )}
                  {label}
                </li>
              ))}
              <li
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
                  item.spicyLevel > 0
                    ? 'border-terracotta/20 bg-terracotta/8 text-terracotta'
                    : 'border-charcoal/10 bg-charcoal/5 text-charcoal/55'
                }`}
              >
                <Flame aria-hidden="true" size={15} strokeWidth={1.8} />
                {spicyLabels[item.spicyLevel]}
              </li>
            </ul>
          </div>

          <div className="mt-8 border-t border-charcoal/12 pt-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  id="dish-quantity-label"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/48"
                >
                  Cantidad
                </p>
                <div
                  className="mt-3 inline-flex items-center rounded-xl border border-charcoal/12 bg-white"
                  role="group"
                  aria-labelledby="dish-quantity-label"
                >
                  <button
                    type="button"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-l-xl text-charcoal/65 transition-colors hover:bg-wine/6 hover:text-wine focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-wine disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Reducir cantidad"
                    disabled={quantity === 1}
                    onClick={() => {
                      setQuantity((current) => Math.max(1, current - 1))
                      setHasAdded(false)
                    }}
                  >
                    <Minus aria-hidden="true" size={17} strokeWidth={1.8} />
                  </button>
                  <output
                    className="flex min-w-12 items-center justify-center border-x border-charcoal/10 px-3 text-sm font-bold"
                    aria-live="polite"
                  >
                    {quantity}
                  </output>
                  <button
                    type="button"
                    className="flex size-11 cursor-pointer items-center justify-center rounded-r-xl text-charcoal/65 transition-colors hover:bg-wine/6 hover:text-wine focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-wine disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Aumentar cantidad"
                    disabled={quantity === 10}
                    onClick={() => {
                      setQuantity((current) => Math.min(10, current + 1))
                      setHasAdded(false)
                    }}
                  >
                    <Plus aria-hidden="true" size={17} strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-wine px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(114,47,55,0.16)] transition-colors hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine disabled:cursor-default disabled:bg-olive"
                disabled={hasAdded}
                onClick={addItem}
              >
                {hasAdded ? (
                  <Check aria-hidden="true" size={18} strokeWidth={2} />
                ) : (
                  <ShoppingBasket
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.8}
                  />
                )}
                {hasAdded
                  ? 'Añadido a la selección'
                  : quantity === 1
                    ? 'Añadir a la selección'
                    : `Añadir ${quantity} a la selección`}
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-charcoal/52" aria-live="polite">
              {hasAdded
                ? 'Selección actualizada. Máximo 10 unidades por plato.'
                : 'Selección local de demostración. No se realiza ningún pedido.'}
            </p>
          </div>

          <p className="mt-7 rounded-xl border border-wine/10 bg-wine/5 px-4 py-3 text-xs leading-5 text-charcoal/58">
            Información orientativa para este proyecto de demostración.
            Consulta al personal en caso de alergias o intolerancias.
          </p>
        </div>
      </div>
    </dialog>
  )
}
