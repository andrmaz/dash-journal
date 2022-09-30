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
  const start = formData.get('start')
  const to = formData.get('to')
  const client = formData.get('client')
  const project = formData.get('project')

  // Create new meeting
  // prisma.create.meeting({title, client, project})
  console.log({title, start, to, client, project})

  if (!title) {
    return json<ActionData>({errors: {title: 'Invalid title'}}, {status: 400})
  }

  return redirect('/')
}

export default function Home() {
  return null
}
