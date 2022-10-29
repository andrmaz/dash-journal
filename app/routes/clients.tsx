import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'

export const loader: LoaderFunction = async ({request}) => {
  new URL(request.url)
  // return json(await searchClients(url.searchParams.get('q')))
  return json(['a', 'b', 'c'])
}
