import type {ActionFunction} from '@remix-run/server-runtime'
import {Path} from '~/data'
import {createClient} from '~/models/client.server'
import {getUserId} from '~/session.server'
import {json} from '@remix-run/server-runtime'
import {redirect} from '@remix-run/server-runtime'

interface ActionData {
  errors?: {
    title?: string
  }
}

export const action: ActionFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')

  const formData = await args.request.formData()
  const name = formData.get('name')

  if (typeof name !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid name'}}, {status: 400})
  }

  await createClient({
    name,
    user: {
      connect: {id: userId},
    },
  })
  return redirect(Path.Clients)
}

export default function NewCustomer() {
  return null
}
