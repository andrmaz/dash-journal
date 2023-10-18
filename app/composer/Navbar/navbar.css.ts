import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const navigation = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '17.5%',
    backgroundColor: vars.theme.secondary,
    padding: vars.space['x-large'],
  },
])
export const list = style([
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '60%',
    width: '100%',
    gap: vars.space.large,
  },
])
export const button = style([
  {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0
  },
])
