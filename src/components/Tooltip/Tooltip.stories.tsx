import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './'
import { Button } from '../Button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    content: 'Tooltip content',
    position: 'top',
    children: <Button>Hover me</Button>,
  },
}

export const Bottom: Story = {
  args: {
    content: 'Tooltip content',
    position: 'bottom',
    children: <Button>Hover me</Button>,
  },
}

export const Left: Story = {
  args: {
    content: 'Tooltip content',
    position: 'left',
    children: <Button>Hover me</Button>,
  },
}

export const Right: Story = {
  args: {
    content: 'Tooltip content',
    position: 'right',
    children: <Button>Hover me</Button>,
  },
}
