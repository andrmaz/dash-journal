import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'transparent',
  display: 'flex',
  justifyContent: 'flex-end',
})
export const backdrop = style([
  {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    animation: 'fadeIn',
  },
  /* sprinkles({
    backgroundColor: 'backdrop',
    animationDuration: 'medium',
  }), */
  {
    backgroundColor: 'var(--color-backdrop)',
    animationDuration: 'var(--duration-medium)',
  },
])
export const content = style([
  {
    position: 'relative',
    width: '25%',
    height: '100%',
    padding: '24px 32px',
  },
  /* sprinkles({
    backgroundColor: 'background',
  }), */
  {
    backgroundColor: 'var(--color-background)',
  },
])
export const wrapper = style([
  {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeIn both',
  },
  /* sprinkles({
    animationDuration: 'long',
    animationDelay: 'short',
  }), */
  {
    animationDuration: 'var(--duration-long)',
    animationDelay: 'var(--duration-short)',
  },
])
export const button = style([
  {
    position: 'absolute',
    top: '8px',
    right: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    font: 'inherit',
    color: 'inherit',
    selectors: {
      '&:focus': {
        outlineOffset: '2px',
      },
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
  /* sprinkles({
    margin: 'none',
    padding: 'large',
  }), */
  {
    margin: 0,
    padding: 'var(--space-large)',
  },
])
