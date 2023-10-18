import { style } from '@vanilla-extract/css'
import { vars } from '../themes/theme.css'

export const wrapper = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
    padding: vars.space.medium,
  },
])
export const box = style({
  marginTop: vars.space.medium,
})
