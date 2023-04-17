import type {Meta, StoryFn} from '@storybook/react'
import {userEvent, waitFor, within} from '@storybook/testing-library'

import React from 'react'
import {Tablist} from './'
import {expect} from '@storybook/jest'

export default {
  title: 'Base/Tablist',
  component: Tablist,
  argTypes: {},
} as Meta<typeof Tablist>

const Template: StoryFn<typeof Tablist> = args => {
  const [selected, setSelected] = React.useState(0)
  const props = {selected, setSelected}
  return <Tablist {...args} {...props} />
}

export const Base = Template.bind({})
Base.args = {
  labels: ['Remaining', 'Ongoing', 'Completed'],
}
Base.play = async ({canvasElement, args}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  await waitFor(() => expect(canvas.getByTestId(`tab-0`)).toHaveFocus())
  await userEvent.keyboard('{ArrowLeft}')
  const length = args.labels.length - 1
  await expect(canvas.getByTestId(`tab-${length}`)).toHaveFocus()
  await userEvent.keyboard('{ArrowRight}')
  await expect(canvas.getByTestId(`tab-0`)).toHaveFocus()
}
