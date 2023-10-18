import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const button = style([
  {
    width: '48px',
    height: '44px',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: vars.theme.background,
    borderRadius: vars.corner.medium,
    boxShadow: vars.shadow.small,
    padding: vars.space.small,
  },
])
export const icon = style({
  height: '100%',
})
