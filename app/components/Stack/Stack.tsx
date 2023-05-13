import * as React from 'react'

import {Icon} from '../Icon'
import type {Name} from '../Icon'
import * as styles from './stack.css'

interface StackProps {
  /**
   * What aspect variant to use
   */
  variant: 'text' | 'contained' | 'outlined' | 'none'
  /**
   * The text to describe the tab
   */
  label: string
  /**
   * The name of the icon to show in the tab
   */
  name: Name
}

const STYLES = {
  text: {
    '--color': 'var(--color-foreground)',
    '--background': 'var(--color-background)',
    '--border': '0',
    '--shadow': 'var(--shadow-x-large)',
  },
  contained: {
    '--color': 'var(--color-foreground)',
    '--background': 'var(--color-primary)',
    '--border': '0',
    '--shadow': 'var(--shadow-x-large)',
  },
  outlined: {
    '--color': 'var(--color-foreground)',
    '--background': 'var(--color-background)',
    '--border': '1px solid var(--color-primary)',
    '--shadow': 'var(--shadow-outline)',
  },
  none: {
    '--color': 'var(--color-foreground)',
    '--background': 'transparent',
    '--border': 'none',
    '--shadow': 'none',
  },
} as Record<string, React.CSSProperties>

export const Stack = (props: StackProps) => {
  const {variant, label, name} = props
  const style = STYLES[variant]

  return (
    <article style={style} className={styles.wrapper}>
      <Icon name={name} size='small' />
      <span className={styles.label}>{label}</span>
    </article>
  )
}
