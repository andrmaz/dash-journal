import * as React from 'react'

import {Header} from '~/composer/Header'
import {Navbar} from '~/composer/Navbar/Navbar'
import {Sidebar} from '~/composer/Sidebar/Sidebar'
import type {User} from '@prisma/client'
import {routes} from '~/data'
import {useLocation} from '@remix-run/react'
import * as styles from './layout.css'

interface LayoutProps {
  user: User
}

export const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const location = useLocation()
  const title = routes.get(location.pathname) || ''

  return (
    <div className={styles.wrapper}>
      <Navbar user={props.user} />
      <main className={styles.container}>
        <Header title={title} />
        <section className={styles.content}>{props.children}</section>
        <Sidebar />
      </main>
    </div>
  )
}
