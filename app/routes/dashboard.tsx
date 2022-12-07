import {json, redirect} from '@remix-run/server-runtime'
import {useLoaderData, useSearchParams} from '@remix-run/react'

import type {LoaderFunction} from '@remix-run/server-runtime'
import React from 'react'
import {Tablist} from '~/components/TabList'
import {getIntervalDateRange} from '~/utils/date'
import {getIntervalMeetings} from '~/models/meeting.server'
import {getUserId} from '~/session.server'
import styled from 'styled-components'

export type Interval = 'remaining' | 'ongoing' | 'completed'
type LoaderData = {
  meetings: Awaited<ReturnType<typeof getIntervalMeetings>>
}

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')

  const url = new URL(args.request.url)
  const interval = url.searchParams.get('interval') as Interval

  const [from, to] = getIntervalDateRange(interval)
  const meetings = await getIntervalMeetings(from, to)
  return json<LoaderData>({meetings})
}

const labels: Capitalize<Interval>[] = ['Remaining', 'Ongoing', 'Completed']

export default function Dashboard() {
  const loader = useLoaderData<LoaderData>()
  const [, setSearchParams] = useSearchParams()

  const [selected, setSelected] = React.useState<number>(0)

  React.useEffect(() => {
    setSearchParams({interval: labels[selected].toLowerCase()})
  }, [selected, setSearchParams])

  const props = {labels, selected, setSelected}

  return (
    <Wrapper>
      <Header>
        <h3>{labels[selected]} Meetings</h3>
        <Tablist {...props} />
      </Header>
      {loader.meetings.map(meeting => (
        <li key={meeting.id}>{meeting.title}</li>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: ${p => p.theme.spacing(3)};
`
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
