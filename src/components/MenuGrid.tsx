import type { MenuItem } from '../types/menu'
import { MenuCard } from './MenuCard'

type MenuGridProps = {
  items: readonly MenuItem[]
  onViewDetails: (
    item: MenuItem,
    trigger: HTMLButtonElement,
  ) => void
}

export function MenuGrid({ items, onViewDetails }: MenuGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <MenuCard
          item={item}
          key={item.id}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}
