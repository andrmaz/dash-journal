import {Chip} from '~/components/Chip'
import * as React from 'react'
import {icons} from '~/data'
import * as styles from './header.css'

interface HeaderProps {
  title: string
}

export const Header = (props: HeaderProps) => (
  <header className={styles.wrapper}>
    <div>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
    <div className={styles.container}>
      {icons.header.map(({label, name}) => (
        <Chip label={label} icon={{name}} key={label} />
      ))}
    </div>
  </header>
)
