import * as React from 'react'

import {json, redirect} from '@remix-run/server-runtime'
import {useLoaderData, useSearchParams} from '@remix-run/react'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {Tablist} from '~/components/TabList'
import {addTabpanelProps} from '~/utils/a11y'
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

const labels: Interval[] = ['remaining', 'ongoing', 'completed']

export default function Dashboard() {
  const loader = useLoaderData<LoaderData>()
  const [, setSearchParams] = useSearchParams()

  const [tab, setTab] = React.useState<number>(0)

  React.useEffect(() => {
    setSearchParams({interval: labels[tab]})
  }, [tab, setSearchParams])

  const props = {labels, tab, setTab}

  return (
    <Wrapper>
      <Header>
        <Title>{labels[tab]} Meetings</Title>
        <Tablist {...props} />
      </Header>
      <ul {...addTabpanelProps(tab)}>
        {loader.meetings.map(meeting => (
          <li key={meeting.id}>{meeting.title}</li>
        ))}
      </ul>
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
const Title = styled.h3`
  text-transform: capitalize;
`
