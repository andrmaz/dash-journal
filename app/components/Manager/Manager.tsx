import type {Meeting} from '@prisma/client'
import * as React from 'react'
import {formatDateMeeting} from '~/utils/date'

import {useTypedFetcher} from 'remix-typedjson'
import * as styles from './manager.css'

export const Manager = () => {
  const fetcher = useTypedFetcher<Meeting>()
  const isLoading = fetcher.state === 'loading'

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/meetings/next')
    }
  }, [fetcher])

  if (isLoading) return <>Loading ...</>
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.title}>Client meeting</h3>
      </header>
      {fetcher.data ? (
        <p>
          Your next meeting "{fetcher.data.title}" will start on{' '}
          {formatDateMeeting(fetcher.data.start)}.
        </p>
      ) : (
        <p>No meeting planned yet.</p>
      )}
    </section>
  )
}
