import type {ComponentMeta, ComponentStory} from '@storybook/react'
import {userEvent, waitFor, within} from '@storybook/testing-library'

import {Accordion} from './'
import React from 'react'
import {expect} from '@storybook/jest'

export default {
  title: 'Base/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => (
  <Accordion {...args} />
)

export const Base = Template.bind({})
Base.args = {
  title: 'Title',
  children: 'Content',
}
Base.play = async ({canvasElement, args}) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)
  await expect(canvas.getByText(args.title)).toBeInTheDocument()
  await expect(canvas.getByLabelText('arrow-up')).toBeInTheDocument()
  await expect(canvas.queryByRole('region')).not.toBeInTheDocument()
  await expect(canvas.queryByLabelText('arrow-down')).not.toBeInTheDocument()
  await userEvent.click(canvas.getByLabelText('arrow-up'))
  await waitFor(() =>
    expect(canvas.queryByLabelText('arrow-up')).not.toBeInTheDocument()
  )
  await expect(canvas.getByText(args.title)).toBeInTheDocument()
  await expect(canvas.getByLabelText('arrow-down')).toBeInTheDocument()
  await expect(canvas.getByRole('region')).toBeInTheDocument()
}
