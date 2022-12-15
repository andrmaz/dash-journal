import * as React from 'react'

import type {ActionFunction, LoaderFunction} from '@remix-run/server-runtime'
import {useLoaderData, useParams, useTransition} from '@remix-run/react'

import {Accordion} from '~/components/Accordion'
import {Path} from '~/data'
import {Project} from '~/components/Project'
import {ProjectList} from '~/composer/ProjectList'
import {deleteClient} from '~/models/client.server'
import {getClientProjects} from '~/models/project.server'
import {json} from '@remix-run/server-runtime'
import {redirect} from '@remix-run/server-runtime'
import styled from 'styled-components'

type LoaderData = {
  projects: Awaited<ReturnType<typeof getClientProjects>>
}

export const loader: LoaderFunction = async args => {
  const id = args.params.customerId
  if (!id) return redirect(Path.Clients)
  const projects = await getClientProjects(id)
  return json<LoaderData>({projects})
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
  const loader = useLoaderData<LoaderData>()

  const transition = useTransition()
  const disabled = transition.state === 'submitting'

  const customer = React.useMemo(
    () => loader.projects[0].client.name,
    [loader.projects]
  )

  return (
    <Wrapper>
      <ProjectList title={customer} list={loader.projects} />
      <Accordion title='add a new project'>
        <Project id={params.customerId!} disabled={disabled} />
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 50%;
`
