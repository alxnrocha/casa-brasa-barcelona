import { ArrowRight, Flame, Leaf, WheatOff } from 'lucide-react'
import { menuImages } from '../data/menuImages'
import type { MenuItem } from '../types/menu'

type MenuCardProps = {
  item: MenuItem
}

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export function MenuCard({ item }: MenuCardProps) {
  const image = menuImages[item.imageId]
  const isVegetarian = item.dietaryTags.includes('vegetariano')
  const isVegan = item.dietaryTags.includes('vegano')
  const isGlutenFree = item.dietaryTags.includes('sin-gluten')

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[1.4rem] border border-charcoal/12 bg-[#fffaf2] shadow-[0_16px_42px_rgba(83,58,39,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(83,58,39,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/8">
        <img
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          src={image.src}
          alt={item.name}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
        {item.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-wine px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white shadow-lg">
            Más popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-wine">
          {item.category}
        </p>
        <h3 className="mt-2 line-clamp-2 font-display text-[1.35rem] leading-[1.05] text-charcoal">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-5 text-charcoal/66">
          {item.description}
        </p>

        <ul
          className="mt-auto flex min-h-5 items-center gap-2.5 pt-4 pb-3 text-olive"
          aria-label="Características alimentarias"
        >
          {(isVegetarian || isVegan) && (
            <li title={isVegan ? 'Vegano' : 'Vegetariano'}>
              <Leaf aria-hidden="true" size={16} strokeWidth={1.8} />
              <span className="sr-only">
                {isVegan ? 'Vegano' : 'Vegetariano'}
              </span>
            </li>
          )}
          {isGlutenFree && (
            <li title="Sin gluten">
              <WheatOff aria-hidden="true" size={16} strokeWidth={1.8} />
              <span className="sr-only">Sin gluten</span>
            </li>
          )}
          {item.spicyLevel > 0 && (
            <li className="text-terracotta" title="Picante">
              <Flame aria-hidden="true" size={16} strokeWidth={1.8} />
              <span className="sr-only">Picante</span>
            </li>
          )}
        </ul>

        <div className="flex items-end justify-between gap-3 border-t border-charcoal/10 pt-4">
          <p className="text-base font-bold text-charcoal">
            {priceFormatter.format(item.price)}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine">
            Ver detalle
            <ArrowRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </article>
  )
}
