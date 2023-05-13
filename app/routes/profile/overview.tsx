import {redirect} from '@remix-run/server-runtime'
import {useTransition} from '@remix-run/react'

import {formatDateUser} from '~/utils/date'
import {getUserById} from '~/models/user.server'
import {getUserId} from '~/session.server'

import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '~/styles/overview.css'

type LoaderData = {
  user: Awaited<ReturnType<typeof getUserById>>
}

export const loader = async (args: LoaderArgs) => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const user = await getUserById(userId)
  return typedjson<LoaderData>({user})
}

export default function Overview() {
  const loader = useTypedLoaderData<LoaderData>()

  const transition = useTransition()
  const loading = transition.state === 'loading'

  return (
    <section className={styles.wrapper}>
      <div>
        <h3>Some details</h3>
        {loading ? (
          <>Loading ...</>
        ) : (
          <>
            <p>Your mail address: {loader.user?.email}</p>
            <p>You joined in: {formatDateUser(loader.user?.createdAt)}</p>
          </>
        )}
      </div>
    </section>
  )
}
