import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { RestaurantInfo } from './components/RestaurantInfo'
import type { MenuItem, SelectionItem } from './types/menu'

export function App() {
  const [selection, setSelection] = useState<SelectionItem[]>([])

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

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header selectionCount={selectionCount} />
      <main id="inicio">
        <Hero />
        <MenuSection onAddToSelection={addToSelection} />
        <RestaurantInfo />
      </main>
      <Footer />
    </div>
  )
}
