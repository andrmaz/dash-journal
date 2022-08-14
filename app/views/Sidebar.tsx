import {DatePicker} from '~/components/DatePicker'
import React from 'react'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <Wrapper>
      <Calendar>
        <DatePicker />
      </Calendar>
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
const Calendar = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  place-items: center;
`
