import type {ComponentMeta, ComponentStory} from '@storybook/react'

import React from 'react'
import {Stack} from '~/components/Stack'

export default {
  title: 'Base/Stack',
  component: Stack,
  argTypes: {},
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = args => <Stack {...args} />

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  label: 'description',
  icon: 'Activity',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  label: 'description',
  icon: 'Airplay',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'description',
  icon: 'AlertCircle',
}
