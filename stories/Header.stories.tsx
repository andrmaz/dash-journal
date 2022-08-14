import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Header} from '~/views/Header'
import React from 'react'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Base = Template.bind({})
Base.args = {}
