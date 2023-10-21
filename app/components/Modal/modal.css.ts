import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

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
    backgroundColor: vars.theme.backdrop,
    animationDuration: vars.duration.medium,
  },
])
export const content = style([
  {
    position: 'relative',
    width: '25%',
    height: '100%',
    padding: '24px 32px',
    backgroundColor: vars.theme.background,
  },
])
export const wrapper = style([
  {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeIn both',
    animationDuration: vars.duration.long,
    animationDelay: vars.duration.short,
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
    margin: 0,
    padding: vars.space.large,
  },
])
