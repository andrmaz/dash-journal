import { json, redirect } from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime';
import {getIntervalMeetings} from '~/models/meeting.server'
import {getUserId} from '~/session.server'
import {useLoaderData} from '@remix-run/react'

type LoaderData = {
  meetings: Awaited<ReturnType<typeof getIntervalMeetings>>
}

export const loader: LoaderFunction = async ({request}) => {
  const userId = await getUserId(request)
  if (!userId) return redirect('/login')
  const meetings = await getIntervalMeetings(new Date(0), new Date())
  return json<LoaderData>({meetings})
}

export default function Dashboard() {
  const loader = useLoaderData<LoaderData>()
  return (
    <>
      {loader.meetings.map(meeting => (
        <li key={meeting.id}>{meeting.title}</li>
      ))}
    </>
  )
}
