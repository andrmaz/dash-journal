import * as React from 'react'

import type {Event, SlotInfo} from 'react-big-calendar'

import EventModal from '~/composer/EventModal'
import {Calendar as ReactBigCalendar} from 'react-big-calendar'
import {Slot} from './Slot'
import {localizer} from '~/utils/date'
import styled from 'styled-components'

interface CalendarProps {
  events: Event[]
}

export const Calendar = (props: CalendarProps) => {
  const [date, setDate] = React.useState<Date | null>(null)
  const [event, setEvent] = React.useState<Event | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const onOpen = () => setIsOpen(true)
  const onDismiss = () => setIsOpen(false)

  const onSelectSlot = (slot: SlotInfo) => {
    setDate(slot.start)
    onOpen()
  }
  const onDrillDown = (date: Date) => {
    setDate(date)
    onOpen()
  }
  const onSelectEvent = (event: Event) => {
    setEvent(event)
    onOpen()
  }

  return (
    <Wrapper>
      <EventModal
        isOpen={isOpen}
        onDismiss={onDismiss}
        event={event}
        date={date}
      />
      <ReactBigCalendar
        localizer={localizer}
        events={props.events}
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
