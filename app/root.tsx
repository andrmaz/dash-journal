import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type {LinksFunction, LoaderArgs, MetaFunction} from '@remix-run/node'

import {Layout} from './composer/Layout/Layout'
import {getUser} from '~/session.server'
import {cssBundleHref} from '@remix-run/css-bundle'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'
import 'global-css'

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader = async (args: LoaderArgs) => {
  const user = await getUser(args.request)
  return typedjson<LoaderData>({user})
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Dash journal',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css',
    },
  ]
}

export default function App() {
  const data = useTypedLoaderData<typeof loader>()

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id='root'>
          {data.user ? (
            <Layout user={data.user}>
              <Outlet />
            </Layout>
          ) : (
            <Outlet />
          )}
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
