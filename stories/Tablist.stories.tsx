import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {userEvent, waitFor, within} from '@storybook/testing-library'

import React from 'react'
import {Tablist} from '~/components/Tablist'
import {expect} from '@storybook/jest'

export default {
  title: 'Base/Tablist',
  component: Tablist,
  argTypes: {},
} as ComponentMeta<typeof Tablist>

const Template: ComponentStory<typeof Tablist> = args => <Tablist {...args} />

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
