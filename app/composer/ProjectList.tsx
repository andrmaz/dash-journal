import * as React from 'react'

import type {Project} from '@prisma/client'

interface ProjectListProps<T> {
  title: string
  list: T[]
}

export function ProjectList<T extends Project>(props: ProjectListProps<T>) {
  return (
    <section style={{marginBottom: '1.2em'}}>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map(project => (
          <li key={project.id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
