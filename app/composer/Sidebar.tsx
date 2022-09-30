import {Calendar} from '~/components/Calendar'
import type {Event} from 'react-big-calendar'
import {Manager} from '~/components/Manager'
import React from 'react'
import styled from 'styled-components'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [events, setEvents] = React.useState<Event[]>(
    [
      {
        title: 'event 1',
        publishAt: '2022-08-01',
      },
    ].map(e => ({
      ...e,
      start: new Date(e.publishAt),
      end: new Date(e.publishAt),
    }))
  )

  return (
    <Wrapper>
      <Calendar events={events} />
      <Manager />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  margin: auto 0;
  border-left: 1px solid var(--color-foreground);
`
