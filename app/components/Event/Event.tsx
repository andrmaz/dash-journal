import type {Client, Meeting} from '@prisma/client'
import {SelectClients, SelectProjects} from '~/components/Select'

import {Form} from '@remix-run/react'
import React from 'react'
import {formatDateDefault} from '~/utils/date'
import {useTransition} from '@remix-run/react'

interface MeetingProps {
  event: Meeting | null
  date: Date
}

export const Event = (props: MeetingProps) => {
  const {event, date} = props

  const transition = useTransition()
  const disabled = transition.state === 'submitting'

  const [value, setValue] = React.useState<Client['id']>('')

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = event =>
    setValue(event.target.value)

  return (
    <Form method='post' action='/?index' reloadDocument>
      <fieldset disabled={disabled}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            defaultValue={event?.title}
          />
        </div>

        <div>
          <label htmlFor='title'>Start:</label>
          <input
            type='hidden'
            id='date'
            name='date'
            value={date.toISOString()}
          />
        </div>

        <div>
          <label htmlFor='title'>End:</label>
          <input
            type='time'
            id='start'
            name='start'
            defaultValue={formatDateDefault(event?.start)}
          />
        </div>
        <div>
          <input
            type='time'
            id='to'
            name='end'
            defaultValue={formatDateDefault(event?.end)}
          />
        </div>

        <SelectClients
          defaultValue={event?.clientId}
          value={value}
          onChange={onChange}
        />

        <SelectProjects defaultValue={event?.projectId} value={value} />

        <input type='submit' value='Submit' />
      </fieldset>
    </Form>
  )
}
