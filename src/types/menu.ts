export type MenuCategory =
  | 'entrantes'
  | 'tapas'
  | 'principales'
  | 'postres'
  | 'bebidas'

export type DietaryTag = 'vegetariano' | 'vegano' | 'sin-gluten'

export type Allergen =
  | 'gluten'
  | 'crustaceos'
  | 'huevos'
  | 'pescado'
  | 'cacahuetes'
  | 'soja'
  | 'lacteos'
  | 'frutos-secos'
  | 'apio'
  | 'mostaza'
  | 'sesamo'
  | 'sulfitos'
  | 'moluscos'

export type SpicyLevel = 0 | 1 | 2 | 3

export type PriceRange = 'all' | 'under-7' | '7-to-15' | 'over-15'

export type MenuSort = 'featured' | 'price-asc' | 'price-desc'

export type MenuItem = {
  id: string
  slug: string
  name: string
  description: string
  category: MenuCategory
  price: number
  imageId: string
  ingredients: readonly string[]
  allergens: readonly Allergen[]
  dietaryTags: readonly DietaryTag[]
  spicyLevel: SpicyLevel
  featured: boolean
}

export type MenuCategoryOption = {
  id: MenuCategory
  label: string
}

export type DietaryTagOption = {
  id: DietaryTag
  label: string
}

export type AllergenOption = {
  id: Allergen
  label: string
}
