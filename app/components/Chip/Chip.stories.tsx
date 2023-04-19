import type {Meta, StoryFn} from '@storybook/react'

import {Chip} from './'
import React from 'react'

export default {
  title: 'Base/Chip',
  component: Chip,
  argTypes: {},
} as Meta<typeof Chip>

const Template: StoryFn<typeof Chip> = args => <Chip {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Settings',
  icon: {name: 'Settings'},
}

export const Unread = Template.bind({})
Unread.args = {
  label: 'Alert',
  icon: {name: 'AlertCircle'},
}
