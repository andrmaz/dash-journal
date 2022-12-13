import * as React from 'react'

import {Form, useLoaderData, useTransition} from '@remix-run/react'
import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getUserClients} from '~/models/client.server'
import {getUserId} from '~/session.server'
import styled from 'styled-components'

type LoaderData = {
  clients: Awaited<ReturnType<typeof getUserClients>>
}

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const clients = await getUserClients(userId)
  return json<LoaderData>({clients})
}

export default function Profile() {
  const loader = useLoaderData<LoaderData>()

  const transition = useTransition()
  const disabled = transition.state === 'submitting'

  return (
    <Wrapper>
      <ul>
        {loader.clients.map(client => (
          <li key={client.id}>
            {client.user.email} - {client.name}
          </li>
        ))}
      </ul>
      <Form method='post' action='/projects/new' reloadDocument>
        <fieldset disabled={disabled}>
          <div>
            <label htmlFor='name'>Client name:</label>
            <input type='text' id='name' name='name' required />
          </div>
          <input type='submit' value='Create' />
        </fieldset>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: ${p => p.theme.spacing(3)};
`
