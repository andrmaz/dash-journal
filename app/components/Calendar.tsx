import * as React from 'react'

import type {Event} from 'react-big-calendar'
import {Meeting} from './Meeting'
import {Calendar as ReactBigCalendar} from 'react-big-calendar'
import {localizer} from '~/utils/date'
import styled from 'styled-components'

export const Calendar = () => {
  const [newPost, setNewPost] = React.useState<Date | null>(null)
  const [postToUpdate, setPostToUpdate] = React.useState<Event | null>(null)
  const [events, setEvents] = React.useState<Event[]>(
    [
      {
        title: 'event 1',
        publishAt: '2022-08-01',
      },
    ].map(m => ({
      ...m,
      start: new Date(m.publishAt),
      end: new Date(m.publishAt),
    }))
  )

  return (
    <Wrapper>
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        components={{event: Meeting}}
        selectable
        onSelectSlot={slot => setNewPost(slot.start)}
        onDrillDown={date => setNewPost(date)}
        onSelectEvent={event => setPostToUpdate(event)}
        views={['month']}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  place-items: center;
`
