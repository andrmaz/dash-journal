import type {ActionFunction, LoaderFunction} from '@remix-run/node'
import {createMeeting, editMeeting} from '~/models/meeting.server'

import type {Prisma} from '@prisma/client'
import {formatDateInput} from '~/utils/date'
import {getUserId} from '~/session.server'
import {json, redirect} from '@remix-run/node'

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

export const action: ActionFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')

  const formData = await args.request.formData()
  const id = formData.get('id')
  const title = formData.get('title')
  const date = formData.get('date')
  const start = formData.get('start')
  const end = formData.get('end')
  const clientId = formData.get('client')
  const projectId = formData.get('project')

  if (typeof title !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid title'}}, {status: 400})
  }
  if (typeof date !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid date'}}, {status: 400})
  }
  if (typeof start !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid start'}}, {status: 400})
  }
  if (typeof end !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid end'}}, {status: 400})
  }
  if (typeof clientId !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid client'}}, {status: 400})
  }
  if (typeof projectId !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid project'}}, {status: 400})
  }

  const input: Prisma.MeetingCreateInput = {
    title,
    start: formatDateInput(date, start),
    end: formatDateInput(date, end),
    user: {
      connect: {id: userId},
    },
    client: {
      connect: {id: clientId},
    },
    project: {
      connect: {id: projectId},
    },
  }

  if (typeof id === 'string' && id.length) {
    const meeting = await editMeeting(id, input)
    return json({meeting}, {status: 200})
  }

  const meeting = await createMeeting(input)
  return json({meeting}, {status: 201})
}

export default function Home() {
  return null
}
