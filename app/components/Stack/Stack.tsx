import * as React from 'react'

import {Icon} from '../Icon'
import type {Name} from '../Icon'
import * as styles from './stack.css'

interface StackProps {
  /**
   * What aspect variant to use
   */
  variant: keyof typeof styles.variants
  /**
   * The text to describe the tab
   */
  label: string
  /**
   * The name of the icon to show in the tab
   */
  name: Name
}

export const Stack = (props: StackProps) => {
  const {variant, label, name} = props

  return (
    <article className={styles.wrapper + ' ' + styles.variants[variant]}>
      <Icon name={name} size='small' />
      <span className={styles.label}>{label}</span>
    </article>
  )
}
