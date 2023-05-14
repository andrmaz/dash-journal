import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    gridArea: 'head',
    height: '5rem',
    width: '100%',
    alignItems: 'center',
    borderBottom: '1px solid',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
  },
  /* sprinkles({
    backgroundColor: 'quaternary',
    borderColor: 'dark',
  }), */
  {
    backgroundColor: 'var(--color-quaternary)',
    borderColor: 'var(--color-dark)',
  },
])
export const title = style([
  {
    display: 'inline-block',
    margin: '6px 0 6px 10px',
    verticalAlign: 'top',
    textTransform: 'capitalize',
  },
  /* sprinkles({
    fontWeight: 'bold',
    fontSize: 'large',
    lineHeight: 'normal',
  }), */
  {
    fontWeight: 'var(--font-weight-bold)',
    fontSize: 'var(--font-size-large)',
    lineHeight: 'var(--font-height-normal)',
  },
])
export const container = style([
  {
    display: 'flex',
  },
  /* sprinkles({
    gap: 'large',
  }), */
  {gap: 'var(--space-large)'},
])
