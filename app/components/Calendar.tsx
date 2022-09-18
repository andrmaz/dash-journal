import * as React from 'react'

import type {Event, SlotInfo} from 'react-big-calendar'

import EventModal from '~/views/modal.event'
import {Calendar as ReactBigCalendar} from 'react-big-calendar'
import {Slot} from './Slot'
import {localizer} from '~/utils/date'
import styled from 'styled-components'

interface CalendarProps {
  events: Event[]
}

export const Calendar = ({events}: CalendarProps) => {
  const [event, setEvent] = React.useState<Event | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const onOpen = () => setIsOpen(true)
  const onDismiss = () => setIsOpen(false)

  const onSelectSlot = (slot: SlotInfo) => {
    setEvent({start: slot.start})
    onOpen()
  }
  const onDrillDown = (date: Date) => {
    setEvent({start: date})
    onOpen()
  }
  const onSelectEvent = (event: Event) => {
    setEvent(event)
    onOpen()
  }

  return (
    <Wrapper>
      <EventModal isOpen={isOpen} onDismiss={onDismiss} event={event} />
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        components={{event: Slot}}
        selectable
        onSelectSlot={onSelectSlot}
        onDrillDown={onDrillDown}
        onSelectEvent={onSelectEvent}
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
