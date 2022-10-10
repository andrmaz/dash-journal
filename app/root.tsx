import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import type {LinksFunction, LoaderFunction, MetaFunction} from '@remix-run/node'

import {GlobalStyle} from './styles'
import {Layout} from './composer/Layout'
import {ThemeProvider} from 'styled-components'
import {getUser} from '~/session.server'
import {json} from '@remix-run/node'
import {theme} from './themes'

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({request}) => {
  return json<LoaderData>({user: await getUser(request)})
}

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

export default function App() {
  const data = useLoaderData<LoaderData>()
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
          <div id='root'>
            {user ? (
              <Layout user={user}>
                <Outlet />
              </Layout>
            ) : (
              <Outlet />
            )}
          </div>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
