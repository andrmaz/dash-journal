import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import styled, {ThemeProvider} from 'styled-components'

import {GlobalStyle} from './styles'
import {Layout} from './layouts'
import type {LinksFunction} from '@remix-run/node'
import Login from './routes/login'
import {getUser} from './session.server'
import {json} from '@remix-run/node'
import {theme} from './themes'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Dash journal',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css',
    },
  ]
}

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({request}) => {
  return json<LoaderData>({
    user: await getUser(request),
  })
}

export default function App() {
  const data = useLoaderData() as LoaderData
  const user = data.user

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper id='root'>
            {user ? (
              <Layout user={user}>
                <Outlet />
              </Layout>
            ) : (
              <Login />
            )}
          </Wrapper>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
