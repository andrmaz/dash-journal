import * as React from 'react'

import type {RenderOptions, RenderResult} from '@testing-library/react'

import type {DefaultTheme} from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'

const AllTheProviders: React.FC = ({children}) => {
  const theme = {spacing: () => ''} as unknown as DefaultTheme
  return (
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
