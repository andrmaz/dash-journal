import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Chip} from '~/components/Chip'
import React from 'react'

export default {
  title: 'Base/Chip',
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />

export const Base = Template.bind({})
Base.args = {
  action: 'Settings',
  iconProps: {name: 'Settings'},
}
