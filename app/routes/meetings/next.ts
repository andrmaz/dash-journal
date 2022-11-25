import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getClosestMeetingByUserId} from '~/models/meeting.server'
import {getUserId} from '~/session.server'

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const meeting = await getClosestMeetingByUserId(userId)
  return json(meeting)
}
