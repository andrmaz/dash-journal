import 'react-big-calendar/lib/css/react-big-calendar.css'

import type {Meta, StoryFn} from '@storybook/react'

import {Calendar} from './'
import React from 'react'

export default {
  title: 'Base/Calendar',
  component: Calendar,
  argTypes: {},
} as Meta<typeof Calendar>

const Template: StoryFn<typeof Calendar> = args => <Calendar {...args} />

export const Base = Template.bind({})
Base.args = {
  events: [],
}

export const Event = Template.bind({})
Event.args = {
  events: [
    {
      id: '',
      title: '',
      start: new Date(),
      end: new Date(),
      userId: '',
      clientId: '',
      projectId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}
