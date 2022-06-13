import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {userEvent, within} from '@storybook/testing-library'

import {Header} from '~/components/Header'
import React from 'react'
import {expect} from '@storybook/jest'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
}
LoggedIn.play = async ({canvasElement}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button', {name: /log out/i}))
  await expect(canvas.getByText(/welcome/i)).toBeInTheDocument()
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
