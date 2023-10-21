import { style } from '@vanilla-extract/css'
import { vars } from '~/themes/theme.css'

export const wrapper = style({
  padding: vars.space.medium,
})
export const item = style({
  marginBottom: vars.space.medium,
})
