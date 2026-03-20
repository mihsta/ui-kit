import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Select } from './Select'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
]

describe('Select', () => {
  it('opens options and calls onChange on option click', () => {
    const onChange = vi.fn()

    render(<Select label="Framework" options={options} onChange={onChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'Framework' }))
    fireEvent.click(screen.getByRole('option', { name: 'Vue' }))

    expect(onChange).toHaveBeenCalledWith('vue')
  })

  it('renders selected option label', () => {
    render(<Select label="Framework" options={options} value="react" />)

    expect(screen.getByRole('button', { name: 'Framework' })).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
