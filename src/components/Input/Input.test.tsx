import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('links label and input by generated id', () => {
    render(<Input label="Email" />)

    const input = screen.getByLabelText('Email')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
  })

  it('renders error message and aria attributes', () => {
    render(<Input label="Password" error="Required" />)

    const input = screen.getByLabelText('Password')
    const error = screen.getByText('Required')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(error).toBeInTheDocument()
    expect(input).toHaveAttribute('aria-describedby', error.id)
  })
})
