import * as React from 'react'

import type {Event} from 'react-big-calendar'
import {Meeting} from './Meeting'
import {Calendar as ReactBigCalendar} from 'react-big-calendar'
import {localizer} from '~/utils/date'
import styled from 'styled-components'

interface CalendarProps {
  events: Event[]
}

export const Calendar = ({events}: CalendarProps) => {
  const [newPost, setNewPost] = React.useState<Date | null>(null)
  const [postToUpdate, setPostToUpdate] = React.useState<Event | null>(null)

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

const Wrapper = styled.section`
  width: 100%;
  height: ${p => p.theme.spacing(120)};
  display: grid;
  place-items: center;
`
