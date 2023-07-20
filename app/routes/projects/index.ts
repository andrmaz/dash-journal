import type {LoaderFunction} from '@remix-run/node'
import {getClientProjects} from '~/models/project.server'
import {json} from '@remix-run/node'
import invariant from 'tiny-invariant'

export const loader: LoaderFunction = async args => {
  const url = new URL(args.request.url)
  const clientId = url.searchParams.get('clientId')
  invariant(typeof clientId === 'string', 'Something went wrong')
  const projects = await getClientProjects(clientId)
  return json(projects)
}
