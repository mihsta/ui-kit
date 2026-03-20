import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: { variant: 'success', title: 'Success', children: 'Operation completed successfully.' },
}

export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning', children: 'Please review before continuing.' },
}

export const Error: Story = {
  args: { variant: 'error', title: 'Error', children: 'Something went wrong.' },
}

export const Info: Story = {
  args: { variant: 'info', title: 'Info', children: 'Here is some useful information.' },
}
