import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Attach the passed-in className to the DOM node
   */
  className?: string
}

const MODES = {
  primary: {
    '--color': 'var(--color-base)',
    '--bg-color': 'var(--color-cyan_blue)',
    '--box-shadow': 'none',
  },
  secondary: {
    '--color': 'var(--color-grayish_blue)',
    '--bg-color': 'transparent',
    '--box-shadow': 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  },
}
const SIZES = {
  small: {
    '--font-size': '0.75rem',
    '--padding': '10px 16px',
  },
  medium: {
    '--font-size': '0.875rem',
    '--padding': '11px 20px',
  },
  large: {
    '--font-size': '1rem',
    '--padding': '12px 24px',
  },
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...delegated
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary'
  const action = MODES[mode]
  const dimension = SIZES[size]
  const styles = {...action, ...dimension, backgroundColor}
  return (
    <Base type='button' style={styles} className={className} {...delegated}>
      {label}
    </Base>
  )
}

const Base = styled.button`
  background-color: var(--bg-color);
  border: 0;
  border-radius: 3em;
  box-shadow: var(--box-shadow);
  color: var(--color);
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  font-size: var(--font-size);
  line-height: 1;
  padding: var(--padding);
`
