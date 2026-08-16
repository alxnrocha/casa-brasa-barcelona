import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { App } from '../App'

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /sabores del mediterráneo/i,
        level: 1,
      }),
    ).toBeInTheDocument()
  })

  it('renders a dish from the menu', () => {
    render(<App />)

    expect(
      screen.getAllByText(/berenjena asada/i).length,
    ).toBeGreaterThan(0)
  })
})