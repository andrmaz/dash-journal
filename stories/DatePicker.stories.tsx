import 'react-datepicker/dist/react-datepicker.css'

import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {DatePicker} from '~/components/DatePicker'
import React from 'react'

export default {
  title: 'Base/DatePicker',
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = args => (
  <DatePicker {...args} />
)

export const Base = Template.bind({})
Base.args = {}
