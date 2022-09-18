import type {ActionFunction, LoaderFunction} from '@remix-run/node'

import {getUserId} from '~/session.server'
import {json} from '@remix-run/node'
import {redirect} from '@remix-run/node'

export const loader: LoaderFunction = async ({request}) => {
  const userId = await getUserId(request)
  if (!userId) return redirect('/login')
  return json({})
}

interface ActionData {
  errors?: {
    title?: string
  }
}

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData()
  const title = formData.get('title')
  const client = formData.get('client')
  const project = formData.get('project')

  const meeting = {title, client, project}

  if (!meeting) {
    return json<ActionData>({errors: {title: 'Invalid title'}}, {status: 400})
  }

  return meeting
}

export default function Home() {
  return null
}
