import 'react-big-calendar/lib/css/react-big-calendar.css'

import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Calendar} from '~/components/Calendar'
import React from 'react'

export default {
  title: 'Base/Calendar',
  component: Calendar,
  argTypes: {},
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = args => <Calendar {...args} />

export const Base = Template.bind({})
Base.args = {
  events: [],
}

export const Event = Template.bind({})
Event.args = {
  events: [
    {
      title: 'event',
      start: new Date('2022-08-01'),
      end: new Date('2022-08-01'),
    },
  ],
}
