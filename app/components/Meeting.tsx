import {Client} from './Client'
import type {Event} from 'react-big-calendar'
import {Form} from '@remix-run/react'
import {Project} from './Project'
import React from 'react'

interface MeetingProps {
  action?: string
  disabled?: boolean
  event: Event | null
}

export const Meeting = (props: MeetingProps) => {
  const {action, disabled = false, event} = props
  let title = event?.title ? String(event.title) : undefined

  return (
    <Form action={action} method='post'>
      <fieldset disabled={disabled}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' name='title' defaultValue={title} />
        </div>

        <div>
          <Client defaultValue={''} />
        </div>

        <div>
          <Project defaultValue={''} />
        </div>
        <input type='submit' value='Submit' />
      </fieldset>
    </Form>
  )
}
