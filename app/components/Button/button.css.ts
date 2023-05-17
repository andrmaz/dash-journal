import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const button = style([
  {
    backgroundColor: 'var(--background)',
    boxShadow: 'var(--shadow)',
    border: 0,
    color: 'var(--color)',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'var(--font-size)',
    padding: 'var(--padding)',
  },
  /* sprinkles({
    borderRadius: 'large',
    fontWeight: 'medium',
    lineHeight: 'normal',
  }), */
  {
    borderRadius: 'var(--space-large)',
    fontWeight: 'var(--font-size-medium)',
    lineHeight: 'var(--font-height-normal)',
  },
])
