import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return <Switch checked={checked} onChange={setChecked} label="Enable notifications" />
}

export const Default: Story = {
  render: () => <SwitchDemo />,
}

export const Checked: Story = {
  args: { checked: true, label: 'Checked' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled' },
}
