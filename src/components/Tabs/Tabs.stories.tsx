import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs, TabList, Tab, TabPanel } from './'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

function TabsDemo() {
  const [value, setValue] = useState('tab1')
  return (
    <Tabs value={value} onChange={setValue} className="w-96">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel value="tab1">Content for tab 1</TabPanel>
      <TabPanel value="tab2">Content for tab 2</TabPanel>
      <TabPanel value="tab3">Content for tab 3</TabPanel>
    </Tabs>
  )
}

export const Default: Story = {
  render: () => <TabsDemo />,
}
