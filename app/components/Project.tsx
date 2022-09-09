import React from 'react'
import {useFetcher} from '@remix-run/react'

interface ProjectProps {
  defaultValue?: string
}
export const Project = ({defaultValue}: ProjectProps) => {
  const projects = useFetcher()

  return (
    <projects.Form method='get' action='/projects'>
      <label htmlFor='project'>Project:</label>
      <select
        id='project'
        onChange={event => projects.submit(event.target.form)}
      >
        {projects.state === 'submitting' ? <>Loading ...</> : null}
        {projects.data?.error ? (
          <p>Failed to load projects </p>
        ) : projects.data?.length ? (
          <>
            {projects.data?.map((project: string) => {
              const selected = project === defaultValue
              return (
                <option value={project} selected={selected} key={project}>
                  {project}
                </option>
              )
            })}
          </>
        ) : (
          <span>No results found</span>
        )}
      </select>
    </projects.Form>
  )
}
