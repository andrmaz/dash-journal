import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getMeetingList} from '~/models/meeting.server'
import {getUserId} from '~/session.server'

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const meetings = await getMeetingList(userId)
  return json(meetings)
}
