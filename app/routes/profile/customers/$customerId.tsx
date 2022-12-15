import * as React from 'react'

import type {ActionFunction, LoaderFunction} from '@remix-run/server-runtime'
import {Form, useLoaderData, useParams, useTransition} from '@remix-run/react'

import {Accordion} from '~/components/Accordion'
import {Path} from '~/data'
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
    () => loader.projects.map(p => p.client.name)[0],
    [loader.projects]
  )

  return (
    <Wrapper>
      <section style={{marginBottom: '1.2em'}}>
        <h2>{customer}</h2>
        <ul>
          {loader.projects.map(project => (
            <li key={project.id}>
              {project.name} - {project.description}
            </li>
          ))}
        </ul>
      </section>
      <Accordion title='add a new project'>
        <Form method='post' action='/projects/new' reloadDocument>
          <fieldset disabled={disabled} style={{paddingLeft: '0.5em'}}>
            <div>
              <label htmlFor='id'></label>
              <input
                type='hidden'
                id='id'
                name='id'
                value={params.customerId}
              />
            </div>

            <div>
              <label htmlFor='name'>Project name:</label>
              <input type='text' id='name' name='name' required />
            </div>

            <div>
              <label htmlFor='description'>Project description:</label>
              <input type='text' id='description' name='description' required />
            </div>
            <input type='submit' value='Create' style={{marginTop: '0.7em'}} />
          </fieldset>
        </Form>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 50%;
`
