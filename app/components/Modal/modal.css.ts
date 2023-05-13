import {style} from '@vanilla-extract/css'

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
export const backdrop = style({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'var(--color-backdrop)',
  animation: 'fadeIn var(--duration-medium)',
})
export const content = style({
  position: 'relative',
  background: 'var(--color-background)',
  width: '25%',
  height: '100%',
  padding: '24px 32px',
})
export const wrapper = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  animation: 'fadeIn var(--duration-long) both',
  animationDelay: 'var(--duration-short)',
})
export const button = style({
  position: 'absolute',
  top: '8px',
  right: 0,
  margin: 0,
  padding: '16px',
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
})
