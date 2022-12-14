import * as React from 'react'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {Path} from '~/data'
import {getClientProjects} from '~/models/project.server'
import {json} from '@remix-run/server-runtime'
import {redirect} from '@remix-run/server-runtime'
import styled from 'styled-components'
import {useLoaderData} from '@remix-run/react'

type LoaderData = {
  projects: Awaited<ReturnType<typeof getClientProjects>>
}

export const loader: LoaderFunction = async args => {
  const id = args.params.customerId
  if (!id) return redirect(Path.Clients)
  const projects = await getClientProjects(id)
  return json<LoaderData>({projects})
}

export default function Customer() {
  const loader = useLoaderData<LoaderData>()
  const customer = React.useMemo(
    () => loader.projects.map(p => p.client.name)[0],
    [loader.projects]
  )

  return (
    <Wrapper>
      <h3>{customer}</h3>
      <ul>
        {loader.projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 50%;
`
