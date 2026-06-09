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

export type SpicyLevel = 0 | 1 | 2 | 3

export type MenuItem = {
  id: string
  name: string
  description: string
  category: MenuCategory
  price: number
  image: string
  ingredients: string[]
  allergens: Allergen[]
  dietaryTags: DietaryTag[]
  spicyLevel: SpicyLevel
  featured: boolean
}
