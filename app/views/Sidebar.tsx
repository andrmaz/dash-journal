import {Calendar} from '~/components/Calendar'
import React from 'react'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <Wrapper>
      <Calendar />
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
