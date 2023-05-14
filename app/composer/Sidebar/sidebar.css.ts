import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    gridArea: 'side',
    height: '100%',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    margin: 'auto 0',
    borderLeft: '1px solid',
  },
  /* sprinkles({
    borderColor: 'dark',
  }), */
  {
    borderColor: 'var(--color-foreground)',
  },
])
