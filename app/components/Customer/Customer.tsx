import * as React from 'react'

import {Form} from '@remix-run/react'

interface CustomerProps {
  disabled: boolean
}

export const Customer = (props: CustomerProps) => {
  return (
    <Form method='post' action='/customers/new' reloadDocument>
      <fieldset disabled={props.disabled}>
        <div>
          <label htmlFor='name'>Client name:</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            style={{marginLeft: '0.5em'}}
          />
        </div>
        <input type='submit' value='Create' />
      </fieldset>
    </Form>
  )
}
