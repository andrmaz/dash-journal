import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'

export const loader: LoaderFunction = async ({request}) => {
  new URL(request.url)
  // return json(await searchProjects(url.searchParams.get('q')))
  return json(['1', '2', '3'])
}
