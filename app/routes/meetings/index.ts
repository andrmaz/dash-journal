import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getUserId} from '~/session.server'
import {getUserMeetings} from '~/models/meeting.server'

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const meetings = await getUserMeetings(userId)
  return json(meetings)
}
