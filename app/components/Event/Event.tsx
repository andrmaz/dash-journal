import * as React from 'react'

import type {Client, Meeting} from '@prisma/client'
import {SelectClients, SelectProjects} from '~/components/Select'

import {Form} from '@remix-run/react'
import {formatDateTime} from '~/utils/date'
import {useTransition} from '@remix-run/react'

interface EventProps {
  event: Meeting | null
  date: Date
}

export const Event = (props: EventProps) => {
  const {event, date} = props

  const transition = useTransition()
  const disabled = transition.state === 'submitting'

  const [client, setClient] = React.useState<Client['id']>('')

  const start = React.createRef<HTMLInputElement>()
  const end = React.createRef<HTMLInputElement>()

  return (
    <Form method='post' action='/?index' reloadDocument>
      <fieldset disabled={disabled}>
        <div>
          <label htmlFor='id'></label>
          <input type='hidden' id='id' name='id' defaultValue={event?.id} />
        </div>

        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            defaultValue={event?.title}
            required
          />
        </div>

        <div>
          <label htmlFor='title'>Date:</label>
          <input
            type='text'
            id='date'
            name='date'
            value={date.toDateString()}
            readOnly
          />
        </div>

        <div>
          <label htmlFor='title'>Start:</label>
          <input
            type='time'
            id='start'
            name='start'
            ref={start}
            defaultValue={formatDateTime(event?.start)}
            required
          />
        </div>

        <div>
          <label htmlFor='title'>End:</label>
          <input
            type='time'
            id='to'
            name='end'
            ref={end}
            defaultValue={formatDateTime(event?.end)}
            required
          />
        </div>

        <SelectClients
          defaultValue={event?.clientId}
          value={client}
          onChange={event => setClient(event.target.value)}
        />

        <SelectProjects defaultValue={event?.projectId} value={client} />

        <input type='submit' value='Submit' />
      </fieldset>
    </Form>
  )
}
