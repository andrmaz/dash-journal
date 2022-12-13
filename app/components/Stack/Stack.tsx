import * as React from 'react'

import {Icon} from '../Icon'
import type {Name} from '../Icon'
import styled from 'styled-components'

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
    <Wrapper style={style}>
      <Icon name={name} size='small' />
      <Label>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  --width: 10rem;
  height: 3.5rem;
  display: grid;
  place-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: var(--width);
  padding: ${p => p.theme.spacing(2)};
  background-color: var(--background);
  color: var(--color);
  border: var(--border);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow);
`
const Label = styled.span`
  font-size: var(--font-size-small);
  text-transform: capitalize;
  letter-spacing: var(--font-spacing-normal);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(var(--width) * 0.66);
  margin-left: ${p => p.theme.spacing(2)};
`
