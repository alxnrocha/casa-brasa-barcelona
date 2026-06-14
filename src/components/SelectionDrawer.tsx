import { Info, ShoppingBasket, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { SelectionItem } from '../types/menu'
import { SelectionItemRow } from './SelectionItemRow'

type SelectionDrawerProps = {
  isOpen: boolean
  selection: readonly SelectionItem[]
  onClose: () => void
  onQuantityChange: (itemId: string, quantity: number) => void
  onRemove: (itemId: string) => void
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export function SelectionDrawer({
  isOpen,
  selection,
  onClose,
  onQuantityChange,
  onRemove,
}: SelectionDrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const subtotal = selection.reduce(
    (total, selectionItem) =>
      total + selectionItem.item.price * selectionItem.quantity,
    0,
  )
  const totalQuantity = selection.reduce(
    (total, selectionItem) => total + selectionItem.quantity,
    0,
  )

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog || !isOpen) {
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
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <dialog
      ref={dialogRef}
      className="m-0 ml-auto h-dvh max-h-dvh w-[min(32rem,100%)] max-w-none overflow-hidden border-0 bg-[#fffaf2] p-0 text-charcoal shadow-[-24px_0_70px_rgba(31,20,14,0.24)] backdrop:bg-charcoal/55 backdrop:backdrop-blur-[2px]"
      aria-labelledby="selection-title"
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
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-charcoal/12 px-6 py-6 sm:px-8">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-wine">
              Pedido presencial
            </p>
            <h2 id="selection-title" className="mt-2 font-display text-4xl">
              Tu selección
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-charcoal/12 bg-white text-charcoal transition-colors hover:border-wine/30 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
            aria-label="Cerrar selección"
            onClick={onClose}
          >
            <X aria-hidden="true" size={21} strokeWidth={1.8} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <p
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {totalQuantity === 0
              ? 'La selección está vacía.'
              : `${totalQuantity} ${
                  totalQuantity === 1
                    ? 'unidad seleccionada'
                    : 'unidades seleccionadas'
                }. Subtotal estimado: ${priceFormatter.format(subtotal)}.`}
          </p>
          {selection.length > 0 ? (
            <ul>
              {selection.map((selectionItem) => (
                <SelectionItemRow
                  key={selectionItem.item.id}
                  selectionItem={selectionItem}
                  onQuantityChange={(quantity) =>
                    onQuantityChange(selectionItem.item.id, quantity)
                  }
                  onRemove={() => onRemove(selectionItem.item.id)}
                />
              ))}
            </ul>
          ) : (
            <div className="flex min-h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-wine/8 text-wine">
                <ShoppingBasket
                  aria-hidden="true"
                  size={25}
                  strokeWidth={1.7}
                />
              </span>
              <h3 className="mt-5 font-display text-3xl">
                Tu selección está vacía
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-charcoal/58">
                Explora la carta y añade los platos que quieras consultar en el
                restaurante.
              </p>
              <p className="mt-4 max-w-xs rounded-xl border border-wine/10 bg-wine/5 px-4 py-3 text-xs leading-5 text-charcoal/55">
                No es un pedido real ni una compra online. Esta selección es
                solo demostrativa.
              </p>
              <button
                type="button"
                className="mt-6 min-h-11 cursor-pointer rounded-xl bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
                onClick={onClose}
              >
                Volver a la carta
              </button>
            </div>
          )}
        </div>

        {selection.length > 0 && (
          <div className="border-t border-charcoal/12 bg-white/70 px-6 py-5 backdrop-blur sm:px-8 sm:py-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-charcoal/62">
                Subtotal estimado
              </span>
              <strong className="font-display text-3xl text-wine">
                {priceFormatter.format(subtotal)}
              </strong>
            </div>
            <div className="mt-4 flex gap-3 rounded-xl border border-wine/10 bg-wine/5 px-4 py-3 text-xs leading-5 text-charcoal/58">
              <Info
                className="mt-0.5 shrink-0 text-wine"
                aria-hidden="true"
                size={17}
                strokeWidth={1.8}
              />
              <p>
                No es un pedido real ni una compra online. La selección es solo
                demostrativa y se pierde al recargar la página.
              </p>
            </div>
          </div>
        )}
      </div>
    </dialog>
  )
}
