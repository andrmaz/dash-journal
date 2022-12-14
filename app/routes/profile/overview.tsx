import {json, redirect} from '@remix-run/server-runtime'
import {useLoaderData, useTransition} from '@remix-run/react'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {formatDateUser} from '~/utils/date'
import {getUserById} from '~/models/user.server'
import {getUserId} from '~/session.server'
import styled from 'styled-components'

type LoaderData = {
  user: Awaited<ReturnType<typeof getUserById>>
}

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const user = await getUserById(userId)
  return json<LoaderData>({user})
}

export default function Overview() {
  const loader = useLoaderData<LoaderData>()

  const transition = useTransition()
  const loading = transition.state === 'loading'

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(3)};
`
