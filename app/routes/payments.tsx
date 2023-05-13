import * as React from 'react'

import {redirect} from '@remix-run/server-runtime'

import {getProjectList} from '~/models/project.server'
import {getUserId} from '~/session.server'

import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '~/styles/payments.css'

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectList>>
}

export const loader = async (args: LoaderArgs) => {
  const userId = await getUserId(args.request)
  if (!userId) return redirect('/login')
  const projects = await getProjectList()
  return typedjson<LoaderData>({projects})
}

export default function Payments() {
  const loader = useTypedLoaderData<LoaderData>()

  return (
    <section className={styles.wrapper}>
      {loader.projects.map(project => (
        <article key={project.id}>
          <h3>Client: {project.client.name}</h3>
          <p>
            Project: {project.name} - {project.description}
          </p>
          <p>Last invoice status: PAID - Due date: December 15, 2022</p>
        </article>
      ))}
    </section>
  )
}
