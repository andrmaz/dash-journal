import {NavLink, useLocation} from '@remix-run/react'

import React from 'react'
import {Stack} from '../components/Stack'
import type {User} from '@prisma/client'
import {items} from '~/data'
import styled from 'styled-components'

interface NavbarProps {
  user: User
}

export const Navbar = ({user}: NavbarProps) => {
  const location = useLocation()

  return (
    <Navigation>
      <span>{user.email}</span>
      <List>
        {items.map(({label, icon, pathname}) => {
          const variant = location.pathname === pathname ? 'contained' : 'text'
          return (
            <Item key={label} to={{pathname}} as={NavLink}>
              <Stack variant={variant} label={label} icon={icon} />
            </Item>
          )
        })}
      </List>
      <NavLink to={{pathname: '/login'}}>
        <Stack variant='none' label='logout' icon='LogOut' />
      </NavLink>
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
const Item = styled.li``
