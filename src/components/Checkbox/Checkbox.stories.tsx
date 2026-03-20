import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Accept terms' },
}

export const Checked: Story = {
  args: { label: 'Checked', defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { label: 'Indeterminate', indeterminate: true },
}

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
}
