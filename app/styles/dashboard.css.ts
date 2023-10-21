import { style } from '@vanilla-extract/css'
import { vars } from '../themes/theme.css'

export const wrapper = style([
  {
    height: '100%',
    padding: vars.space.medium,
  },
])
export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})
export const title = style({
  textTransform: 'capitalize',
})
export const content = style({
  width: '100%',
  height: '400px',
})
