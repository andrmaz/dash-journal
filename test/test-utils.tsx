import * as React from 'react'

import type {RenderOptions, RenderResult} from '@testing-library/react'

import {BrowserRouter as Router} from 'react-router-dom'
import {render} from '@testing-library/react'

const AllTheProviders: React.FC = ({children}) => {
  return <Router>{children}</Router>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
