import type {LoaderFunction} from '@remix-run/node'
import {getClientProjects} from '~/models/project.server'
import {json} from '@remix-run/node'

export const loader: LoaderFunction = async args => {
  const clientId = args.params.clientId as string
  const projects = await getClientProjects(clientId)
  return json(projects)
}
