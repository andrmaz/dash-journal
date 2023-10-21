import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const wrapper = style([
  {
    gridArea: 'side',
    height: '100%',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    margin: 'auto 0',
    borderLeft: '1px solid',
    borderColor: vars.pallette.dark,
  },
])
