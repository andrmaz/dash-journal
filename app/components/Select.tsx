import * as React from 'react'

import {useFetcher} from '@remix-run/react'

interface SelectProps {
  defaultValue?: string
}

export const SelectClients = ({defaultValue}: SelectProps) => {
  const fetcher = useFetcher()

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/clients')
    }
  }, [fetcher])

  return (
    <fetcher.Form method='get' action='/clients'>
      <label htmlFor='client'>Client:</label>
      <select
        id='client'
        name='client'
        onChange={event => fetcher.submit(event.target.form)}
      >
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {fetcher.data?.error ? (
          <p>Failed to load clients </p>
        ) : fetcher.data?.length ? (
          <>
            {fetcher.data?.map((client: string) => (
              <option value={client} defaultValue={defaultValue} key={client}>
                {client}
              </option>
            ))}
          </>
        ) : (
          <span>No results found</span>
        )}
      </select>
    </fetcher.Form>
  )
}

export const SelectProjects = ({defaultValue}: SelectProps) => {
  const fetcher = useFetcher()

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/projects')
    }
  }, [fetcher])

  return (
    <fetcher.Form method='get' action='/projects'>
      <label htmlFor='project'>Project:</label>
      <select
        id='project'
        name='project'
        onChange={event => fetcher.submit(event.target.form)}
      >
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {fetcher.data?.error ? (
          <p>Failed to load projects </p>
        ) : fetcher.data?.length ? (
          <>
            {fetcher.data?.map((project: string) => (
              <option value={project} defaultValue={defaultValue} key={project}>
                {project}
              </option>
            ))}
          </>
        ) : (
          <span>No results found</span>
        )}
      </select>
    </fetcher.Form>
  )
}
