import type {ComponentMeta, ComponentStory} from '@storybook/react'

import {Meeting} from '~/components/Meeting'
import React from 'react'
import {expect} from '@storybook/jest'
import {formatDateEvent} from '~/utils/date'
import {within} from '@storybook/testing-library'

export default {
  title: 'Base/Meeting',
  component: Meeting,
  argTypes: {},
} as ComponentMeta<typeof Meeting>

const Template: ComponentStory<typeof Meeting> = args => <Meeting {...args} />

export const Base = Template.bind({})
Base.args = {
  event: {
    title: 'event',
    start: new Date('2022-08-01'),
    end: new Date('2022-08-01'),
  },
}

Base.play = async ({canvasElement, args}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  const date = formatDateEvent(args.event.start)
  const title = String(args.event.title)
  await expect(canvas.getByText(date).innerText.length).toBe(5)
  await expect(canvas.getByText(title)).toBeInTheDocument()
}
