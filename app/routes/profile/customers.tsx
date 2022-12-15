import {Form, Outlet, useLoaderData, useTransition} from '@remix-run/react'
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

export default function Customers() {
  const loader = useLoaderData<LoaderData>()

  const transition = useTransition()
  const disabled = transition.state === 'submitting'
  const loading = transition.state === 'loading'

  return (
    <Wrapper>
      <div>
        <section>
          <h3>Your client list</h3>
          {loading ? (
            <>Loading ...</>
          ) : (
            <List>
              {loader.clients.map(client => {
                const to = `/profile/customers/${client.id}`
                return (
                  <li key={client.id}>
                    <a href={to}>{client.name}</a>
                    <Form method='post' action={to} style={{display: 'inline'}}>
                      <input type='hidden' name='id' value={client.id} />
                      <Button
                        type='submit'
                        aria-label='delete'
                        disabled={disabled}
                      >
                        &#88;
                      </Button>
                    </Form>
                  </li>
                )
              })}
            </List>
          )}
        </section>

        <Container>
          <h3>Add a new client</h3>
          <Form method='post' action='/customers/new' reloadDocument>
            <fieldset disabled={disabled}>
              <div>
                <label htmlFor='name'>Client name:</label>
                <input type='text' id='name' name='name' required />
              </div>
              <input type='submit' value='Create' />
            </fieldset>
          </Form>
        </Container>
      </div>

      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(3)};
`
const Container = styled.section`
  margin-top: ${p => p.theme.spacing(3)};
`
const List = styled.ul`
  list-style: inside circle;
`
const Button = styled.button`
  margin-left: 0.3em;
`
