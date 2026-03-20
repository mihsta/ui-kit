import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default type button', () => {
    render(<Button>Save</Button>)
    const button = screen.getByRole('button', { name: 'Save' })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('supports variant and size classes', () => {
    render(
      <Button variant="secondary" size="lg">
        Continue
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Continue' })

    expect(button.className).toContain('bg-gray-200')
    expect(button.className).toContain('px-6')
  })
})
