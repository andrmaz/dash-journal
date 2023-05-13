import {Calendar} from '~/components/Calendar'
import {Manager} from '~/components/Manager'
import type {Meeting} from '@prisma/client'
import * as React from 'react'
import {useTypedFetcher} from 'remix-typedjson'
import * as styles from './sidebar.css'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const fetcher = useTypedFetcher<Meeting[]>()

  const events = fetcher.data?.length ? fetcher.data : []

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/meetings?index')
    }
  }, [fetcher])

  return (
    <aside className={styles.wrapper}>
      <Calendar events={events} />
      <Manager />
    </aside>
  )
}
