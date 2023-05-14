import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    height: '100%',
  },
  /* sprinkles({
    padding: 'medium',
  }), */
  {
    padding: 'var(--space-medium)',
  },
])
export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})
export const title = style({
  textTransform: 'capitalize',
})
export const content = style({
  width: '100%',
  height: '400px',
})
