import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style([
  {
    height: 'auto',
    width: 'min(300px, 100%)',
    border: 'solid 1px',
  },
  /* sprinkles({
    borderRadius: 'medium',
    borderColor: 'gray-300',
  }), */
  {
    borderRadius: 'var(--border-radius-medium)',
    borderColor: 'var(--color-backdrop)',
  },
])
export const header = style({
  display: 'flex',
  alignItems: 'center',
})
export const button = style([
  {
    width: '100%',
  },
  /* sprinkles({
    backgroundColor: 'background',
  }), */
  {
    backgroundColor: 'var(--color-background)',
  },
])
export const title = style([
  {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  /* sprinkles({
    fontSize: 'small',
    color: 'foreground',
  }), */
  {
    fontSize: 'var(--font-size-small)',
    color: 'var(--color-foreground)',
  },
])
/* export const container = sprinkles({
  paddingLeft: 'small',
  paddingRight: 'medium',
}) */
export const container = style({
  paddingLeft: 'var(--space-small)',
  paddingRight: 'var(--space-medium)',
})
export const content = style([
  {
    borderTop: 'solid 1px',
  },
  /* sprinkles({
    borderColor: 'gray-300',
    paddingTop: 'medium',
    paddingBottom: 'large',
  }), */
  {
    borderColor: 'var(--color-backdrop)',
    paddingTop: 'var(--space-medium)',
    paddingBottom: 'var(--space-large)',
  },
])
export const icon = style({
  marginLeft: 'auto',
})
