import type {Meta, StoryFn} from '@storybook/react'

import {Breadcrumb} from './'
import React from 'react'
import {expect} from '@storybook/jest'
import {within} from '@storybook/testing-library'

export default {
  title: 'Base/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as Meta<typeof Breadcrumb>

const Template: StoryFn<typeof Breadcrumb> = args => <Breadcrumb {...args} />

export const Base = Template.bind({})
Base.args = {
  links: [{pathname: '', label: 'label'}],
}
Base.play = async ({canvasElement, args}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  const label = canvas.getByText(args.links[0].label)
  await expect(label).toBeInTheDocument()
}
