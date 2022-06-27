import type {ComponentMeta, ComponentStory} from '@storybook/react'

import React from 'react'
import {Tab} from '~/components/Tab'

export default {
  title: 'Base/Tab',
  component: Tab,
  argTypes: {},
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = args => <Tab {...args} />

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
