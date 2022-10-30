import type {LoaderFunction} from '@remix-run/node'
import {getProjectList} from '~/models/project.server'
import {json} from '@remix-run/node'

export const loader: LoaderFunction = async args => {
  const clientId = args.params.clientId as string
  const projects = await getProjectList(clientId)
  return json(projects)
}
