import * as React from 'react'

import {Form} from '@remix-run/react'

interface ProjectProps {
  id: string
  disabled: boolean
}

export const Project = (props: ProjectProps) => {
  return (
    <Form method='post' action='/projects/new' reloadDocument>
      <fieldset disabled={props.disabled} style={{paddingLeft: '0.5em'}}>
        <div>
          <label htmlFor='id'></label>
          <input type='hidden' id='id' name='id' value={props.id} />
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
  )
}
