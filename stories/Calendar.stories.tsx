import 'react-datepicker/dist/react-datepicker.css'

import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Calendar} from '~/components/Calendar'
import React from 'react'

export default {
  title: 'Base/Calendar',
  component: Calendar,
  argTypes: {},
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = args => <Calendar />

export const Base = Template.bind({})
Base.args = {}
