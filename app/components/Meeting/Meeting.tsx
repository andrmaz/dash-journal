import {SelectClients, SelectProjects} from '~/components/Select'

import type {Event} from 'react-big-calendar'
import {Form} from '@remix-run/react'
import React from 'react'
import {useTransition} from '@remix-run/react'

interface MeetingProps {
  event: Event | null
  start: Date | null
}

export const Meeting = (props: MeetingProps) => {
  const {event, start} = props

  const transition = useTransition()
  const disabled = transition.state === 'submitting'

  let title = event?.title ? String(event.title) : undefined
  let date = start ? start.toISOString() : ''

  return (
    <Form method='post' action='/?index' reloadDocument>
      <fieldset disabled={disabled}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' name='title' defaultValue={title} />
        </div>

        <div>
          <input type='hidden' id='start' name='start' value={date} />
        </div>
        <div>
          <input type='hidden' id='to' name='to' value={date} />
        </div>

        <SelectClients defaultValue={''} />

        <SelectProjects defaultValue={''} />

        <input type='submit' value='Submit' />
      </fieldset>
    </Form>
  )
}
