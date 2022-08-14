import React from 'react'
import {Stack} from '../components/Stack'
import styled from 'styled-components'
import {useOptionalUser} from '~/utils'

export const Navbar = () => {
  const user = useOptionalUser()

  return (
    <Navigation>
      {user ? <span>{user.email}</span> : null}
      <List>
        <Stack variant='contained' label='dashboard' icon='Activity' />
        <Stack variant='text' label='payment' icon='CreditCard' />
        <Stack variant='text' label='statistics' icon='BarChart' />
      </List>
      <Stack variant='text' label='log out' icon='LogOut' />
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 17.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`
