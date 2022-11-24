import * as React from 'react'

import type {Client, Project} from '@prisma/client'

import {useFetcher} from '@remix-run/react'

interface SelectProps {
  defaultValue?: string
  value: Client['id']
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const SelectClients = (props: SelectProps) => {
  const fetcher = useFetcher<Client[]>()

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/clients')
    }
  }, [fetcher])

  return (
    <div>
      <label htmlFor='client'>Client:</label>
      <select
        id='client'
        name='client'
        value={props.value || props.defaultValue}
        onChange={props.onChange}
        required
      >
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {!fetcher.data ? (
          <>Failed to load clients </>
        ) : fetcher.data.length ? (
          <>
            <option value='' />
            {fetcher.data.map(client => (
              <option value={client.id} key={client.id}>
                {client.name}
              </option>
            ))}
          </>
        ) : (
          <>No results found</>
        )}
      </select>
    </div>
  )
}

export const SelectProjects = (props: Omit<SelectProps, 'onChange'>) => {
  const fetcher = useFetcher<Project[]>()

  const [value, setValue] = React.useState<Project['id']>('')

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = event =>
    setValue(event.target.value)

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      const params = new URLSearchParams()
      if (props.value) {
        params.append('clientId', props.value)
        fetcher.load(`/projects?${params}`)
      }
    }
  }, [fetcher, props.value])

  return (
    <div>
      <label htmlFor='project'>Project:</label>
      <select
        id='project'
        name='project'
        value={value || props.defaultValue}
        onChange={onChange}
        required
      >
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {!fetcher.data ? (
          <>Failed to load projects </>
        ) : fetcher.data.length ? (
          <>
            <option value='' />
            {fetcher.data.map(project => (
              <option value={project.id} key={project.id}>
                {project.name}
              </option>
            ))}
          </>
        ) : (
          <>No results found</>
        )}
      </select>
    </div>
  )
}
