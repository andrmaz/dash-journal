import {Form, NavLink, useLocation} from '@remix-run/react'

import React from 'react'
import {Stack} from '../components/Stack'
import type {User} from '@prisma/client'
import {icons} from '~/data'
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
        {icons.navbar.map(({label, name, pathname}) => {
          const variant = location.pathname.includes(pathname)
            ? 'contained'
            : 'text'
          return (
            <Item to={{pathname}} as={NavLink} key={label}>
              <Stack variant={variant} label={label} name={name} />
            </Item>
          )
        })}
      </List>
      <Form method='post' action='/logout'>
        <Button type='submit'>
          <Stack variant='none' label='logout' name='LogOut' />
        </Button>
      </Form>
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
const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`
