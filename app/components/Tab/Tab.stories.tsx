import type {Meta, StoryFn} from '@storybook/react'

import React from 'react'
import {Tab} from './'
import {expect} from '@storybook/jest'
import {within} from '@storybook/testing-library'

export default {
  title: 'Base/Tab',
  component: Tab,
  argTypes: {},
} as Meta<typeof Tab>

const Template: StoryFn<typeof Tab> = args => <Tab {...args} />

const label = 'label'
export const Base = Template.bind({})
Base.args = {
  label,
  selected: true,
}

Base.play = async ({canvasElement}) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByText(label)).toBeInTheDocument()
}
