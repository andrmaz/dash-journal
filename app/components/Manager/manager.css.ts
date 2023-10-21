import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style({
  height: '100%',
  width: '100%',
  position: 'relative',
  padding: '12px 36px',
})
export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
})
export const title = style({
  marginBottom: vars.space.medium,
})
