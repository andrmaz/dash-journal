import type {EventProps} from 'react-big-calendar'
import React from 'react'
import {formatDateEvent} from '~/utils/date'
import styled from 'styled-components'

export const Slot = (props: EventProps) => {
  return (
    <Wrapper>
      <Title>{props.event.title}</Title>
      <Date>{formatDateEvent(props.event.start)}</Date>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  font-size: var(--font-size-small);
`
const Date = styled.span`
  font-size: var(--font-size-small);
`
