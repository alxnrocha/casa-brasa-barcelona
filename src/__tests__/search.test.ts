import { describe, expect, it } from 'vitest'

import { normalizeSearchText } from '../utils/search'

describe('normalizeSearchText', () => {
  it('lowercases the input', () => {
    expect(normalizeSearchText('CASA BRASA')).toBe('casa brasa')
  })

  it('trims leading and trailing whitespace', () => {
    expect(normalizeSearchText('  cocina   ')).toBe('cocina')
  })

  it('removes diacritics', () => {
    expect(normalizeSearchText('Gazpacho de sandía')).toBe(
      'gazpacho de sandia',
    )
  })

  it('handles accented uppercase input', () => {
    expect(normalizeSearchText('BERENJENA ASADA')).toBe('berenjena asada')
  })

  it('returns empty string for empty input', () => {
    expect(normalizeSearchText('')).toBe('')
  })

  it('normalizes ñ and other special characters', () => {
    expect(normalizeSearchText('Cataluña mañana')).toBe('cataluna manana')
  })
})