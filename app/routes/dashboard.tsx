import * as React from 'react'

import {redirect} from '@remix-run/server-runtime'
import {useSearchParams} from '@remix-run/react'

import {Tablist} from '~/components/TabList'
import {addTabpanelProps} from '~/utils/a11y'
import {calculateDuration, getIntervalDateRange} from '~/utils/date'
import {getIntervalMeetings} from '~/models/meeting.server'
import {getUserId} from '~/session.server'

import {TimeTracker} from '~/components/TimeTracker'
import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '~/styles/dashboard.css'

export type Interval = 'remaining' | 'ongoing' | 'completed'
type LoaderData = {
  meetings: Awaited<ReturnType<typeof getIntervalMeetings>>
}

export const loader = async (args: LoaderArgs) => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')

  const url = new URL(args.request.url)
  const interval = url.searchParams.get('interval') as Interval

  const [from, to] = getIntervalDateRange(interval)
  const meetings = await getIntervalMeetings(from, to)
  return typedjson<LoaderData>({meetings})
}

const labels: Interval[] = ['remaining', 'ongoing', 'completed']

export default function Dashboard() {
  const loader = useTypedLoaderData<LoaderData>()
  const [, setSearchParams] = useSearchParams()

  const [tab, setTab] = React.useState<number>(0)

  React.useEffect(() => {
    setSearchParams({interval: labels[tab]})
  }, [tab, setSearchParams])

  const data = React.useMemo(
    () =>
      loader.meetings.map(meeting => ({
        ...meeting,
        time: calculateDuration(meeting.end, meeting.start),
      })),
    [loader.meetings]
  )

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.title}>{labels[tab]} Meetings</h3>
        <Tablist {...{labels, tab, setTab}} />
      </header>
      <div className={styles.content} {...addTabpanelProps(tab)}>
        <TimeTracker
          data={data}
          polarKey='title'
          legend='Time (h)'
          radarKey='time'
        />
      </div>
    </section>
  )
}
