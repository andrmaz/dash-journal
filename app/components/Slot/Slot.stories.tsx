import type {ComponentMeta, ComponentStory} from '@storybook/react'

import React from 'react'
import {Slot} from './'
import {expect} from '@storybook/jest'
import {within} from '@storybook/testing-library'

export default {
  title: 'Base/Slot',
  component: Slot,
  argTypes: {},
} as ComponentMeta<typeof Slot>

const Template: ComponentStory<typeof Slot> = args => <Slot {...args} />

const date = new Date()
export const Base = Template.bind({})
Base.args = {
  event: {title: 'title', start: date},
}

Base.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const time = `${hours}:${minutes}`
  await expect(canvas.getByText('title')).toBeInTheDocument()
  await expect(canvas.getByText(time)).toBeInTheDocument()
}
