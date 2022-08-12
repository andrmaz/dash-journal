import React from 'react'
import {Stack} from './Stack'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <Navigation>
      <List>
        <Stack variant='contained' label='dashboard' icon='Activity' />
        <Stack variant='text' label='payment' icon='CreditCard' />
        <Stack variant='text' label='statistics' icon='BarChart' />
      </List>
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 17.5%;
  height: 100%;
  background-color: ${p => p.theme.colors.grayish_blue};
  padding: ${p => p.theme.spacing(8)};
`
const List = styled.ul`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  margin-top: 5rem;
`
