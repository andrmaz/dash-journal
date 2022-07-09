import * as React from 'react'

import {Icon} from './Icon'
import type {Name} from './Icon'
import styled from 'styled-components'

interface StackProps {
  /**
   * What aspect variant to use
   */
  variant: 'text' | 'contained' | 'outlined'
  /**
   * The text to describe the tab
   */
  label: string
  /**
   * The name of the icon to show in the tab
   */
  icon: Name
}

const STYLES = {
  text: {
    '--color': 'var(--color-cyan_blue)',
    '--bg-color': 'inherit',
    '--border': '0',
  },
  contained: {
    '--color': 'var(--color-base)',
    '--bg-color': 'var(--color-cyan_blue)',
    '--border': '0',
  },
  outlined: {
    '--color': 'var(--color-cyan_blue)',
    '--bg-color': 'var(--color-base)',
    '--border': '1px solid var(--color-cyan_blue)',
  },
} as Record<string, React.CSSProperties>

export const Stack = ({variant, label, icon}: StackProps) => {
  const style = STYLES[variant]
  return (
    <Wrapper style={style}>
      <Icon name={icon} size='small' />
      <Label>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  --width: 160px;
  height: 40px;
  display: grid;
  place-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: var(--width);
  padding: 8px;
  background-color: var(--bg-color);
  color: var(--color);
  border: var(--border);
  border-radius: 2px;
  box-shadow: 4px 2px 2px ${p => p.theme.colors.grayish_blue};
`
const Label = styled.span`
  font-size: 0.8rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(var(--width) * 0.66);
  margin-left: 8px;
`
