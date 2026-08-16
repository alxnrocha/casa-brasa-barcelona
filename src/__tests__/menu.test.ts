import { describe, expect, it } from 'vitest'

import {
  allergenOptions,
  dietaryTagOptions,
  menuCategories,
  menuItems,
} from '../data/menu'

const validCategories = new Set([
  'entrantes',
  'tapas',
  'principales',
  'postres',
  'bebidas',
])

const validDietaryTags = new Set(['vegetariano', 'vegano', 'sin-gluten'])

const validAllergens = new Set([
  'gluten',
  'crustaceos',
  'huevos',
  'pescado',
  'cacahuetes',
  'soja',
  'lacteos',
  'frutos-secos',
  'apio',
  'mostaza',
  'sesamo',
  'sulfitos',
  'moluscos',
])

describe('menu data integrity', () => {
  it('has unique item ids', () => {
    const ids = menuItems.map((item) => item.id)

    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has unique item slugs', () => {
    const slugs = menuItems.map((item) => item.slug)

    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('has valid categories for every item', () => {
    for (const item of menuItems) {
      expect(validCategories.has(item.category)).toBe(true)
    }
  })

  it('has positive prices and non-empty names', () => {
    for (const item of menuItems) {
      expect(item.price).toBeGreaterThan(0)
      expect(item.name.trim().length).toBeGreaterThan(0)
      expect(item.ingredients.length).toBeGreaterThan(0)
    }
  })

  it('has valid dietary tags', () => {
    for (const item of menuItems) {
      for (const tag of item.dietaryTags) {
        expect(validDietaryTags.has(tag)).toBe(true)
      }
    }
  })

  it('has valid allergens', () => {
    for (const item of menuItems) {
      for (const allergen of item.allergens) {
        expect(validAllergens.has(allergen)).toBe(true)
      }
    }
  })

  it('has valid spicy levels', () => {
    for (const item of menuItems) {
      expect([0, 1, 2, 3]).toContain(item.spicyLevel)
    }
  })

  it('defines all five menu categories', () => {
    expect(menuCategories.map((category) => category.id)).toEqual([
      'entrantes',
      'tapas',
      'principales',
      'postres',
      'bebidas',
    ])
  })

  it('defines all three dietary tag options', () => {
    expect(dietaryTagOptions.map((tag) => tag.id)).toEqual([
      'vegetariano',
      'vegano',
      'sin-gluten',
    ])
  })

  it('defines all thirteen allergen options', () => {
    expect(allergenOptions).toHaveLength(13)
  })
})