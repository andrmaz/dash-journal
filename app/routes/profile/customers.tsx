import {Outlet, useLoaderData, useTransition} from '@remix-run/react'
import {json, redirect} from '@remix-run/server-runtime'

import {Customer} from '~/components/Customer'
import {CustomerList} from '~/composer/CustomerList'
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
        <CustomerList
          title='Your client list'
          list={loader.clients}
          loading={loading}
          disabled={disabled}
        />

        <Box>
          <h3>Add a new client</h3>
          <Customer disabled={disabled} />
        </Box>
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
const Box = styled.section`
  margin-top: ${p => p.theme.spacing(3)};
`
