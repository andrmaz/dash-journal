import * as React from 'react'

import {calculateDuration, formatDateMeeting} from '~/utils/date'
import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getMeetingList} from '~/models/meeting.server'
import {getUserId} from '~/session.server'
import styled from 'styled-components'
import {useLoaderData} from '@remix-run/react'

type LoaderData = {
  meetings: Awaited<ReturnType<typeof getMeetingList>>
}

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const meetings = await getMeetingList()
  return json<LoaderData>({meetings})
}

export default function Statistics() {
  const loader = useLoaderData<LoaderData>()

  return (
    <Wrapper>
      {loader.meetings.map(meeting => (
        <Item key={meeting.id}>
          <h4>
            {meeting.project.name} - {meeting.client.name}
          </h4>
          <p>
            {meeting.title} - {formatDateMeeting(meeting.start)}
          </p>
          <p>
            Time spent: {calculateDuration(meeting.end, meeting.start)} hours
          </p>
        </Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: ${p => p.theme.spacing(3)};
`
const Item = styled.article`
  margin-bottom: ${p => p.theme.spacing(3)};
`
