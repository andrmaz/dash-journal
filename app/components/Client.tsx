import React from 'react'
import {useFetcher} from '@remix-run/react'

interface ClientProps {
  defaultValue?: string
}
export const Client = ({defaultValue}: ClientProps) => {
  const clients = useFetcher()

  return (
    <clients.Form method='get' action='/clients'>
      <label htmlFor='client'>Client:</label>
      <select id='client' onChange={event => clients.submit(event.target.form)}>
        {clients.state === 'submitting' ? <>Loading ...</> : null}
        {clients.data?.error ? (
          <p>Failed to load clients </p>
        ) : clients.data?.length ? (
          <>
            {clients.data?.map((client: string) => {
              const selected = client === defaultValue
              return (
                <option value={client} selected={selected} key={client}>
                  {client}
                </option>
              )
            })}
          </>
        ) : (
          <span>No results found</span>
        )}
      </select>
    </clients.Form>
  )
}
