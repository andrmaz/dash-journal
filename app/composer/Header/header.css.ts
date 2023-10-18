import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style([
  {
    gridArea: 'head',
    height: '5rem',
    width: '100%',
    alignItems: 'center',
    borderBottom: '1px solid',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    backgroundColor: vars.theme.quaternary,
    borderColor: vars.pallette.dark,
  },
])
export const title = style([
  {
    display: 'inline-block',
    margin: '6px 0 6px 10px',
    verticalAlign: 'top',
    textTransform: 'capitalize',
    fontWeight: vars.weight.bold,
    fontSize: vars.size.large,
    lineHeight: vars.height.normal,
  },
])
export const container = style([
  {
    display: 'flex',
    gap: vars.space.large
  },
])
