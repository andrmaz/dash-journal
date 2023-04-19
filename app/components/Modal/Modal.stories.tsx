import type {Meta, StoryFn} from '@storybook/react'
import {screen, userEvent} from '@storybook/testing-library'

import Modal from './'
import React from 'react'
import {expect} from '@storybook/jest'

export default {
  title: 'Base/Modal',
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = args => <Modal {...args} />

export const Hidden = Template.bind({})
Hidden.args = {
  isOpen: false,
  onDismiss: () => '',
}

export const Visible = Template.bind({})
Visible.args = {
  isOpen: true,
  onDismiss: () => '',
}

Visible.play = async () => {
  const button = screen.getByRole('button')
  await expect(button).toBeInTheDocument()
  await expect(button).toHaveAccessibleName(/dismiss/i)
  await userEvent.click(button)
}
