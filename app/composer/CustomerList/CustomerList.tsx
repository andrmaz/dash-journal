import * as React from 'react'

import type {Client} from '@prisma/client'
import {Form} from '@remix-run/react'
import * as styles from './customer-list.css'

interface CustomerListProps<T> {
  title: string
  list: T[]
  loading: boolean
  disabled: boolean
}

export function CustomerList<T extends Client>(props: CustomerListProps<T>) {
  return (
    <section>
      <h3>{props.title}</h3>
      {props.loading ? (
        <>Loading ...</>
      ) : (
        <ul className={styles.list}>
          {props.list.map(client => {
            const to = `/profile/customers/${client.id}`
            return (
              <li key={client.id}>
                <a href={to}>{client.name}</a>
                <Form method='post' action={to} style={{display: 'inline'}}>
                  <input type='hidden' name='id' value={client.id} />
                  <button
                    type='submit'
                    aria-label='delete'
                    disabled={props.disabled}
                    className={styles.button}
                  >
                    &#88;
                  </button>
                </Form>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
