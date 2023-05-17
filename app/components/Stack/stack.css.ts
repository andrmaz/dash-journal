import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    vars: {
      '--width': '10rem',
    },
    alignItems: 'center',
    boxShadow: 'var(--shadow)',
    border: 'var(--border)',
    color: 'var(--color)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    height: '3.5rem',
    placeContent: 'center',
    width: 'var(--width)',
  },
  /* sprinkles({
    backgroundColor: 'background',
    borderRadius: 'medium',
    padding: 'medium',
  }), */
  {
    backgroundColor: 'var(--color-background)',
    borderRadius: 'var(--border-radius-medium)',
    padding: 'var(--space-medium)',
  },
])
export const label = style([
  {
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 'calc(var(--width) * 0.66)',
  },
  /* sprinkles({
    fontSize: 'small',
    letterSpacing: 'normal',
    marginLeft: 'medium',
  }), */
  {
    fontSize: 'var(--font-size-small)',
    letterSpacing: 'var(--font-spacing-normal)',
    marginLeft: 'var(--space-medium)',
  },
])
