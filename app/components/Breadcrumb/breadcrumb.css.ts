import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style([
  {
    padding: '0.8em 1em',
    border: '1px solid',
    selectors: {
      [`&:has(aria-current=page)`]: {
        color: vars.pallette.dark,
        fontWeight: vars.weight.bold,
        textDecoration: 'none',
      },
    },
    backgroundColor: vars.theme.backdrop,
    borderColor: vars.pallette['gray-700'],
    borderRadius: vars.space.medium,
  },
])
export const list = style([
  {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
  },
])
export const item = style({
  display: 'inline',
  textTransform: 'capitalize',
  '::before': {
    display: 'inline-block',
    margin: '0 0.25em',
    transform: 'rotate(15deg)',
    borderRight: '0.1em solid currentcolor',
    height: '0.8em',
    content: '',
  },
})
