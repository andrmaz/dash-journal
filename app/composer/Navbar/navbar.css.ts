import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const navigation = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '17.5%',
  },
  /* sprinkles({
    backgroundColor: 'secondary',
    padding: 'x-large',
  }), */
  {
    backgroundColor: 'var(--color-secondary)',
    padding: 'var(--space-x-large)',
  },
])
export const list = style([
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '60%',
    width: '100%',
  },
  /* sprinkles({
    gap: 'large',
  }), */
  {
    gap: 'var(--space-large)',
  },
])
export const button = style([
  {
    backgroundColor: 'transparent',
    border: 'none',
  },
  /* sprinkles({
    padding: 'none',
  }), */
  {padding: 0},
])
