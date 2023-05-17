import type {EventProps} from 'react-big-calendar'
import * as React from 'react'
import {formatDateEvent} from '~/utils/date'
import * as styles from './slot.css'

export const Slot = (props: EventProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{props.event.title}</span>
      <span className={styles.date}>{formatDateEvent(props.event.start)}</span>
    </div>
  )
}
