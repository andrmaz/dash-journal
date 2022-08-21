import type {EventProps} from 'react-big-calendar'
import React from 'react'
import {formatDateEvent} from '~/utils/date'
import styled from 'styled-components'

export const Meeting = ({event}: EventProps) => {
  return (
    <Wrapper>
      <Title>{event.title}</Title>
      <Date>{formatDateEvent(event.start)}</Date>
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
