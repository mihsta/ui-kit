import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select } from './'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

function SelectDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="w-64">
      <Select
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose a fruit"
        label="Fruit"
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <SelectDemo />,
}

export const WithError: Story = {
  render: () => (
    <div className="w-64">
      <Select
        options={options}
        label="Fruit"
        error="Please select an option"
        placeholder="Choose a fruit"
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Select options={options} label="Fruit" disabled placeholder="Disabled" />
    </div>
  ),
}
