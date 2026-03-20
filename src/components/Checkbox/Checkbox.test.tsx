import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('links label to checkbox input', () => {
    render(<Checkbox label="Accept terms" />)

    const checkbox = screen.getByLabelText('Accept terms')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('supports indeterminate state', () => {
    render(<Checkbox label="Partially selected" indeterminate />)

    const checkbox = screen.getByLabelText('Partially selected') as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed')
  })
})
