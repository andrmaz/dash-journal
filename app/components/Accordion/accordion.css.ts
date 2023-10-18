import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style([
  {
    height: 'auto',
    width: 'min(300px, 100%)',
    border: 'solid 1px',
    borderRadius: vars.corner.medium,
    borderColor: vars.theme.backdrop,
  },
])
export const header = style({
  display: 'flex',
  alignItems: 'center',
})
export const button = style([
  {
    width: '100%',
    backgroundColor: vars.theme.backdrop,
  },
])
export const title = style([
  {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontSize: vars.size.small,
    color: vars.theme.foreground,
  },
])
export const container = style({
  paddingLeft: vars.space.small,
  paddingRight: vars.space.medium,
})
export const content = style([
  {
    borderTop: 'solid 1px',
    borderColor: vars.pallette['gray-300'],
    paddingTop: vars.space.medium,
    paddingBottom: vars.space.large,
  },
])
export const icon = style({
  marginLeft: 'auto',
})
