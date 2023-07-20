import {style, styleVariants} from '@vanilla-extract/css'
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
export const variants = styleVariants({
  text: {
    color: 'var(--color-foreground)',
    backgroundColor: 'var(--color-background)',
    border: 0,
    boxShadow: 'var(--shadow-x-large)',
  },
  contained: {
    color: 'var(--color-foreground)',
    backgroundColor: 'var(--color-primary)',
    border: '0',
    boxShadow: 'var(--shadow-x-large)',
  },
  outlined: {
    color: 'var(--color-foreground)',
    backgroundColor: 'var(--color-background)',
    border: '1px solid var(--color-primary)',
    boxShadow: 'var(--shadow-outline)',
  },
  none: {
    color: 'var(--color-foreground)',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
})
