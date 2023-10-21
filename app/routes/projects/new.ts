import type { ActionFunction } from '@remix-run/server-runtime'
import { createProject } from '~/models/project.server'
import { getUserId } from '~/session.server'
import { json, redirect } from '@remix-run/server-runtime'

interface ActionData {
  errors?: {
    title?: string
  }
}

export const action: ActionFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')

  const formData = await args.request.formData()
  const clientId = formData.get('id')
  const name = formData.get('name')
  const description = formData.get('description')

  if (typeof clientId !== 'string') {
    return json<ActionData>({ errors: { title: 'Invalid id' } }, { status: 400 })
  }
  if (typeof name !== 'string') {
    return json<ActionData>({ errors: { title: 'Invalid name' } }, { status: 400 })
  }
  if (typeof description !== 'string') {
    return json<ActionData>(
      { errors: { title: 'Invalid description' } },
      { status: 400 }
    )
  }

  await createProject({
    name,
    description,
    client: {
      connect: { id: clientId },
    },
    user: {
      connect: { id: userId },
    },
  })
  return redirect(`/profile/customers/${clientId}`)
}

export default function NewCustomer() {
  return null
}
