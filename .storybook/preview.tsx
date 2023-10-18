import React from 'react'
import '../app/css/global.css'
import '../app/themes/theme.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <div id='root'>
      <Story />
    </div>
  ),
]
