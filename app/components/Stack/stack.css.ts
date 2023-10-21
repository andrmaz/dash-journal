import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style([
  {
    alignItems: 'center',
    boxShadow: 'var(--shadow)',
    border: 'var(--border)',
    color: 'var(--color)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    height: '3.5rem',
    placeContent: 'center',
    width: '10rem',
    backgroundColor: vars.theme.background,
    borderRadius: vars.corner.medium,
    padding: vars.space.medium,
  },
])
export const label = style([
  {
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 'calc(10rem * 0.66)',
    fontSize: vars.size.small,
    letterSpacing: vars.spacing.dense,
    marginLeft: vars.space.medium,
  },
])
export const variants = styleVariants({
  text: {
    color: vars.theme.foreground,
    backgroundColor: vars.theme.background,
    border: 0,
    boxShadow: vars.shadow['x-large'],
  },
  contained: {
    color: vars.theme.foreground,
    backgroundColor: vars.theme.primary,
    border: '0',
    boxShadow: vars.shadow['x-large'],
  },
  outlined: {
    color: vars.theme.foreground,
    backgroundColor: vars.theme.background,
    border: `1px solid ${vars.theme.primary}`,
    boxShadow: vars.shadow.outline,
  },
  none: {
    color: vars.theme.foreground,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
})
