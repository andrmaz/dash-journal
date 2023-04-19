import type {Meta, StoryFn} from '@storybook/react'

import React from 'react'
import {Stack} from './'

export default {
  title: 'Base/Stack',
  component: Stack,
  argTypes: {},
} as Meta<typeof Stack>

const Template: StoryFn<typeof Stack> = args => <Stack {...args} />

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  label: 'dashboard',
  name: 'Activity',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  label: 'payment',
  name: 'CreditCard',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'statistics',
  name: 'BarChart',
}
