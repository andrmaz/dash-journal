import {calculateDuration, formatDateMeeting} from '~/utils/date'
import {redirect} from '@remix-run/server-runtime'

import {getMeetingList} from '~/models/meeting.server'
import {getUserId} from '~/session.server'

import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '../styles/statistics.css'

type LoaderData = {
  meetings: Awaited<ReturnType<typeof getMeetingList>>
}

export const loader = async (args: LoaderArgs) => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const meetings = await getMeetingList()
  return typedjson<LoaderData>({meetings})
}

export default function Statistics() {
  const loader = useTypedLoaderData<LoaderData>()

  return (
    <section className={styles.wrapper}>
      {loader.meetings.map(meeting => (
        <article className={styles.item} key={meeting.id}>
          <h4>
            {meeting.project.name} - {meeting.client.name}
          </h4>
          <p>
            {meeting.title} - {formatDateMeeting(meeting.start)}
          </p>
          <p>
            Time spent: {calculateDuration(meeting.end, meeting.start)} hours
          </p>
        </article>
      ))}
    </section>
  )
}
