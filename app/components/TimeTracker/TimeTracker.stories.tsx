import type {Meta, StoryFn} from '@storybook/react'

import {TimeTracker} from './'

export default {
  title: 'Base/TimeTracker',
  component: TimeTracker,
  decorators: [
    Story => (
      <div style={{width: '300px', height: '300px'}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} as Meta<typeof TimeTracker>

const Template: StoryFn<typeof TimeTracker> = args => {
  return <TimeTracker {...args} />
}

export const Base = Template.bind({})
Base.args = {
  data: [
    {pKey: 'M1', rKey: 1},
    {pKey: 'M2', rKey: 2},
    {pKey: 'M3', rKey: 3},
  ],
  legend: 'Legend',
  polarKey: 'pKey',
  radarKey: 'rKey',
}
