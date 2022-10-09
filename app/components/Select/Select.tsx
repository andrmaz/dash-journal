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
    <div>
      <label htmlFor='client'>Client:</label>
      <select id='client' name='client'>
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {fetcher.data?.error ? (
          <>Failed to load clients </>
        ) : fetcher.data?.length ? (
          <>
            {fetcher.data?.map((client: string) => (
              <option value={client} defaultValue={defaultValue} key={client}>
                {client}
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

export const SelectProjects = ({defaultValue}: SelectProps) => {
  const fetcher = useFetcher()

  React.useEffect(() => {
    if (fetcher.type === 'init') {
      fetcher.load('/projects')
    }
  }, [fetcher])

  return (
    <div>
      <label htmlFor='project'>Project:</label>
      <select id='project' name='project'>
        {fetcher.state === 'submitting' ? <>Loading ...</> : null}
        {fetcher.data?.error ? (
          <>Failed to load projects </>
        ) : fetcher.data?.length ? (
          <>
            {fetcher.data?.map((project: string) => (
              <option value={project} defaultValue={defaultValue} key={project}>
                {project}
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
