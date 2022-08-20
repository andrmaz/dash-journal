import type {Event} from 'react-big-calendar'
import React from 'react'

export const Meeting = (event: Event) => {
  return (
    <div>
      <span>{event.start}</span>
      <span>{event.title}</span>
    </div>
  )
}
