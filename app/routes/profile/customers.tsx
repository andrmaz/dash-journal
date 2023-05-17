import {Outlet, useTransition} from '@remix-run/react'
import {redirect} from '@remix-run/server-runtime'

import {Customer} from '~/components/Customer'
import {CustomerList} from '~/composer/CustomerList/CustomerList'
import {getUserClients} from '~/models/client.server'
import {getUserId} from '~/session.server'

import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '~/styles/customers.css'

type LoaderData = {
  clients: Awaited<ReturnType<typeof getUserClients>>
}

export const loader = async (args: LoaderArgs) => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const clients = await getUserClients(userId)
  return typedjson<LoaderData>({clients})
}

export default function Customers() {
  const loader = useTypedLoaderData<LoaderData>()

  const transition = useTransition()
  const disabled = transition.state === 'submitting'
  const loading = transition.state === 'loading'

  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <CustomerList
          title='Your client list'
          list={loader.clients}
          loading={loading}
          disabled={disabled}
        />

        <div>
          <h3>Add a new client</h3>
          <Customer disabled={disabled} />
        </div>
      </div>

      <Outlet />
    </section>
  )
}
