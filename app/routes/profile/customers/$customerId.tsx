import * as React from 'react'

import type {ActionFunction} from '@remix-run/server-runtime'
import {useParams, useNavigation} from '@remix-run/react'

import {Accordion} from '~/components/Accordion'
import {Path} from '~/data'
import {Project} from '~/components/Project'
import {ProjectList} from '~/composer/ProjectList'
import {deleteClient} from '~/models/client.server'
import {getClientProjects} from '~/models/project.server'
import {json, redirect} from '@remix-run/server-runtime'

import type {LoaderArgs} from '@remix-run/node'
import {typedjson, useTypedLoaderData} from 'remix-typedjson'

import * as styles from '~/styles/customer-id.css'

type LoaderData = {
  projects: Awaited<ReturnType<typeof getClientProjects>>
}

export const loader = async (args: LoaderArgs) => {
  const id = args.params.customerId
  if (!id) return redirect(Path.Clients)
  const projects = await getClientProjects(id)
  return typedjson<LoaderData>({projects})
}

interface ActionData {
  errors?: {
    title?: string
  }
}

export const action: ActionFunction = async args => {
  const formData = await args.request.formData()
  const clientId = formData.get('id')

  if (typeof clientId !== 'string') {
    return json<ActionData>({errors: {title: 'Invalid id'}}, {status: 400})
  }

  await deleteClient(clientId)
  return redirect(Path.Clients)
}

export default function Customer() {
  const params = useParams()
  const loader = useTypedLoaderData<LoaderData>()

  const transition = useNavigation()
  const disabled = transition.state === 'submitting'

  const customer = React.useMemo(
    () =>
      loader.projects.length
        ? loader.projects[0].client.name
        : 'No projects yet',
    [loader.projects]
  )

  return (
    <section className={styles.wrapper}>
      <ProjectList title={customer} list={loader.projects} />
      <Accordion title='add a new project'>
        <Project id={params.customerId!} disabled={disabled} />
      </Accordion>
    </section>
  )
}
