import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter your message...', rows: 4 },
}

export const WithLabel: Story = {
  args: { label: 'Description', placeholder: 'Enter description...', rows: 4 },
}

export const WithError: Story = {
  args: {
    label: 'Description',
    error: 'This field is required',
    placeholder: 'Enter description...',
    rows: 4,
  },
}

export const Disabled: Story = {
  args: { label: 'Disabled', placeholder: 'Disabled', disabled: true, rows: 4 },
}
