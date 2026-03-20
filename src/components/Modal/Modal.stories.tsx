import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './'
import { Button } from '../Button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

function ModalDemo({ title }: { title?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <p className="mb-4">Modal content goes here. Press Escape or click outside to close.</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalDemo />,
}

export const WithTitle: Story = {
  render: () => <ModalDemo title="Modal Title" />,
}
