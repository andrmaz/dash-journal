import type {ComponentPropsWithoutRef} from 'react'
import * as styles from './button.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
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
   * Attach the passed-in className to the DOM node
   */
  className?: string
}

const MODES = {
  primary: {
    '--color': 'var(--color-foreground)',
    '--background': 'var(--color-primary)',
    '--shadow': 'none',
  },
  secondary: {
    '--color': 'var(--color-foreground)',
    '--background': 'var(--color-secondary)',
    '--shadow': 'var(--shadow-medium) inset',
  },
}
const SIZES = {
  small: {
    '--font-size': 'var(--font-size-small)',
    '--padding': '10px 16px',
  },
  medium: {
    '--font-size': 'var(--font-size-medium)',
    '--padding': '11px 20px',
  },
  large: {
    '--font-size': 'var(--font-size-large)',
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
  className,
  children,
  ...delegated
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary'
  const action = MODES[mode]
  const dimension = SIZES[size]
  const style = {...action, ...dimension, backgroundColor}
  return (
    <button
      type='button'
      className={styles.button + className}
      style={style}
      {...delegated}
    >
      {children}
    </button>
  )
}
