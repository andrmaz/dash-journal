import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const button = style([
  {
    backgroundColor: 'var(--background)',
    boxShadow: 'var(--shadow)',
    border: 0,
    color: 'var(--color)',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'var(--font-size)',
    padding: 'var(--padding)',
    borderRadius: vars.space.large,
    fontWeight: vars.size.medium,
    lineHeight: vars.height.normal,
  },
])
