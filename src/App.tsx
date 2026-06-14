import { useRef, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { RestaurantInfo } from './components/RestaurantInfo'
import { SelectionDrawer } from './components/SelectionDrawer'
import type { MenuItem, SelectionItem } from './types/menu'

export function App() {
  const [selection, setSelection] = useState<SelectionItem[]>([])
  const [isSelectionOpen, setIsSelectionOpen] = useState(false)
  const selectionTriggerRef = useRef<HTMLButtonElement | null>(null)

  const addToSelection = (item: MenuItem, quantity: number) => {
    setSelection((current) => {
      const existingItem = current.find(
        (selectionItem) => selectionItem.item.id === item.id,
      )

      if (!existingItem) {
        return [...current, { item, quantity }]
      }

      return current.map((selectionItem) =>
        selectionItem.item.id === item.id
          ? {
              ...selectionItem,
              quantity: Math.min(selectionItem.quantity + quantity, 10),
            }
          : selectionItem,
      )
    })
  }

  const selectionCount = selection.reduce(
    (total, selectionItem) => total + selectionItem.quantity,
    0,
  )

  const openSelection = (trigger: HTMLButtonElement) => {
    selectionTriggerRef.current = trigger
    setIsSelectionOpen(true)
  }

  const closeSelection = () => {
    setIsSelectionOpen(false)
    requestAnimationFrame(() => selectionTriggerRef.current?.focus())
  }

  const updateSelectionQuantity = (itemId: string, quantity: number) => {
    setSelection((current) =>
      current.map((selectionItem) =>
        selectionItem.item.id === itemId
          ? { ...selectionItem, quantity: Math.min(10, Math.max(1, quantity)) }
          : selectionItem,
      ),
    )
  }

  const removeFromSelection = (itemId: string) => {
    setSelection((current) =>
      current.filter((selectionItem) => selectionItem.item.id !== itemId),
    )
  }

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header
        selectionCount={selectionCount}
        onOpenSelection={openSelection}
      />
      <main id="inicio">
        <Hero />
        <MenuSection onAddToSelection={addToSelection} />
        <RestaurantInfo />
      </main>
      <Footer />
      <SelectionDrawer
        isOpen={isSelectionOpen}
        selection={selection}
        onClose={closeSelection}
        onQuantityChange={updateSelectionQuantity}
        onRemove={removeFromSelection}
      />
    </div>
  )
}
