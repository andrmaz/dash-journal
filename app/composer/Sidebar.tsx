import {Calendar} from '~/components/Calendar'
import {Manager} from '~/components/Manager'
import type {Meeting} from '@prisma/client'
import React from 'react'
import styled from 'styled-components'
import {useFetcher} from '@remix-run/react'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const fetcher = useFetcher<Meeting[]>()

  const events = fetcher.data?.length ? fetcher.data : []

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/meetings?index')
    }
  }, [fetcher])

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
