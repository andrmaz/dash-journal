import {GlobalStyle} from '../app/styles'
import {ThemeProvider} from 'styled-components'
import {theme} from '../app/themes'

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
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
]
