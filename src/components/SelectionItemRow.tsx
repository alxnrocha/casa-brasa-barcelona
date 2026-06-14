import { Minus, Plus, Trash2 } from 'lucide-react'
import { menuImages } from '../data/menuImages'
import type { SelectionItem } from '../types/menu'

type SelectionItemRowProps = {
  selectionItem: SelectionItem
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export function SelectionItemRow({
  selectionItem,
  onQuantityChange,
  onRemove,
}: SelectionItemRowProps) {
  const { item, quantity } = selectionItem
  const image = menuImages[item.imageId]

  return (
    <li className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 border-b border-charcoal/10 py-5 first:pt-0">
      <img
        className="size-20 rounded-xl object-cover"
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
      />
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-5">{item.name}</h3>
            <p className="mt-2 text-xs text-charcoal/52">
              {priceFormatter.format(item.price)} por unidad
            </p>
          </div>
          <button
            type="button"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-charcoal/42 transition-colors hover:bg-wine/7 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
            aria-label={`Eliminar ${item.name} de la selección`}
            onClick={onRemove}
          >
            <Trash2 aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div
            className="inline-flex items-center rounded-lg border border-charcoal/12 bg-white"
            role="group"
            aria-label={`Cantidad de ${item.name}`}
          >
            <button
              type="button"
              className="flex size-9 cursor-pointer items-center justify-center rounded-l-lg text-charcoal/60 transition-colors hover:bg-wine/6 hover:text-wine focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-wine disabled:cursor-not-allowed disabled:opacity-35"
              aria-label={`Reducir cantidad de ${item.name}`}
              disabled={quantity === 1}
              onClick={() => onQuantityChange(quantity - 1)}
            >
              <Minus aria-hidden="true" size={15} strokeWidth={1.8} />
            </button>
            <output
              className="flex min-w-10 items-center justify-center border-x border-charcoal/10 px-2 text-xs font-bold"
              aria-live="polite"
            >
              {quantity}
            </output>
            <button
              type="button"
              className="flex size-9 cursor-pointer items-center justify-center rounded-r-lg text-charcoal/60 transition-colors hover:bg-wine/6 hover:text-wine focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-wine disabled:cursor-not-allowed disabled:opacity-35"
              aria-label={`Aumentar cantidad de ${item.name}`}
              disabled={quantity === 10}
              onClick={() => onQuantityChange(quantity + 1)}
            >
              <Plus aria-hidden="true" size={15} strokeWidth={1.8} />
            </button>
          </div>
          <p className="text-sm font-bold text-wine">
            {priceFormatter.format(item.price * quantity)}
          </p>
        </div>
      </div>
    </li>
  )
}
