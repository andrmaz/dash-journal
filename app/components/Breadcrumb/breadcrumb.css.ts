import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    padding: '0.8em 1em',
    border: '1px solid',
    /* selectors: {
    'aria-current=page': {
      color: 'var(--color-dark)',
      fontWeight: 'var(--font-weight-bold)',
      textDecoration: 'none',
    },
  }, */
  },
  /* sprinkles({
    backgroundColor: 'backdrop',
    borderColor: 'gray-700',
    borderRadius: 'medium',
  }), */
  {
    backgroundColor: 'var(--color-backdrop)',
    borderColor: 'var(--color-backdrop)',
    borderRadius: 'var(--space-medium)',
  },
])
export const list = style([
  {
    listStyle: 'none',
  },
  /* sprinkles({
    margin: 'none',
    paddingLeft: 'none',
  }), */
  {
    margin: 0,
    paddingLeft: 0,
  },
])
export const item = style({
  display: 'inline',
  textTransform: 'capitalize',
  '::before': {
    display: 'inline-block',
    margin: '0 0.25em',
    transform: 'rotate(15deg)',
    borderRight: '0.1em solid currentcolor',
    height: '0.8em',
    content: '',
  },
})
