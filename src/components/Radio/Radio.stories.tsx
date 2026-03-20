import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup, Radio } from './'

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

function RadioDemo() {
  const [value, setValue] = useState('option1')
  return (
    <RadioGroup name="demo" value={value} onChange={setValue} label="Choose an option">
      <div className="space-y-2">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </div>
    </RadioGroup>
  )
}

export const Default: Story = {
  render: () => <RadioDemo />,
}

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup name="demo2" value="a" onChange={() => {}} label="Options">
      <div className="space-y-2">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" disabled />
        <Radio value="c" label="Option C" />
      </div>
    </RadioGroup>
  ),
}
