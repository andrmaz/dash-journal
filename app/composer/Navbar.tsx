import {NavLink, useLocation} from '@remix-run/react'

import React from 'react'
import {Stack} from '../components/Stack'
import type {User} from '@prisma/client'
import {items} from '~/data'
import styled from 'styled-components'

interface NavbarProps {
  user: User | null
}

export const Navbar = (props: NavbarProps) => {
  const location = useLocation()

  return (
    <Navigation>
      <span>{props.user?.email}</span>
      <List>
        {items.map(({label, icon, pathname}) => {
          const variant = location.pathname === pathname ? 'contained' : 'text'
          return (
            <Item to={{pathname}} as={NavLink} key={label}>
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
  background-color: ${p => p.theme.colors.tuscany['500']};
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
