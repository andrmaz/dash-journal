import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const button = style([
  {
    width: '48px',
    height: '44px',
    display: 'grid',
    placeItems: 'center',
  },
  /* sprinkles({
    backgroundColor: 'background',
    borderRadius: 'medium',
    boxShadow: 'small',
    padding: 'small',
  }), */
  {
    backgroundColor: 'var(--color-background)',
    borderRadius: 'var(--border-radius-medium)',
    boxShadow: 'var(--shadow-small)',
    padding: 'var(--space-small)',
  },
])
export const icon = style({
  height: '100%',
})
