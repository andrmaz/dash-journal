import * as React from 'react'

import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderFunction} from '@remix-run/server-runtime'
import {getProjectList} from '~/models/project.server'
import {getUserId} from '~/session.server'
import styled from 'styled-components'
import {useLoaderData} from '@remix-run/react'

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectList>>
}

export const loader: LoaderFunction = async args => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const projects = await getProjectList()
  return json<LoaderData>({projects})
}

export default function Payments() {
  const loader = useLoaderData<LoaderData>()

  return (
    <Wrapper>
      {loader.projects.map(project => (
        <article key={project.id}>
          <h3>Client: {project.client.name}</h3>
          <p>
            Project: {project.name} - {project.description}
          </p>
          <p>Last invoice status: PAID - Due date: December 15, 2022</p>
        </article>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: ${p => p.theme.spacing(3)};
`
