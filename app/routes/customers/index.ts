import type { LoaderFunction } from '@remix-run/node'
import { getClientList } from '~/models/client.server'
import { getUserId } from '~/session.server'
import { json, redirect } from '@remix-run/node'

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const clients = await getClientList(userId)
  return json(clients)
}
