import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
  },
  /* sprinkles({
    padding: 'medium',
  }), */
  {
    padding: 'var(--space-medium)',
  },
])
