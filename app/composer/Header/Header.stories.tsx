import type {Meta, StoryFn} from '@storybook/react'

import {Header} from './'
import React from 'react'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = args => <Header {...args} />

export const Base = Template.bind({})
Base.args = {
  title: 'Header',
}
