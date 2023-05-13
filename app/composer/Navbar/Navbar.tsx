import {Form, NavLink, useLocation} from '@remix-run/react'

import * as React from 'react'
import {Stack} from '../../components/Stack'
import type {User} from '@prisma/client'
import {icons} from '~/data'
import * as styles from './navbar.css'

interface NavbarProps {
  user: User | null
}

export const Navbar = (props: NavbarProps) => {
  const location = useLocation()

  return (
    <nav className={styles.navigation}>
      <span>{props.user?.email}</span>
      <ul className={styles.list}>
        {icons.navbar.map(({label, name, pathname}) => {
          const variant = location.pathname.includes(pathname)
            ? 'contained'
            : 'text'
          return (
            <NavLink to={{pathname}} key={label}>
              <Stack variant={variant} label={label} name={name} />
            </NavLink>
          )
        })}
      </ul>
      <Form method='post' action='/logout'>
        <button type='submit' className={styles.button}>
          <Stack variant='none' label='logout' name='LogOut' />
        </button>
      </Form>
    </nav>
  )
}
