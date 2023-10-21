import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
})
export const title = style({
  fontSize: vars.size.small,
})
export const date = style({
  fontSize: vars.size.small,
})
