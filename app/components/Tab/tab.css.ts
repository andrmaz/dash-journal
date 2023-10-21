import { style } from '@vanilla-extract/css'
import { vars } from '../../themes/theme.css'

export const button = style([
  {
    padding: '4px 16px',
    selectors: {
      '&:hover': {
        borderRadius: vars.corner.tab,
        fontWeight: vars.weight.medium,
        outline: 'none',
      },
      '&:focus': {
        borderRadius: vars.corner.tab,
        fontWeight: vars.weight.medium,
        outline: 'none',
      },
      '&[aria-selected=true]': {
        borderBottomColor: vars.theme.secondary,
        borderWidth: 0,
        borderBottomWidth: '4px',
      },
      '&[aria-selected=false]': {
        border: 'none',
      },
    },
  },
])
export const label = style({
  selectors: {
    '&:focus': {
      display: 'inline-block',
      padding: '4px 6px',
    },
    [`${button}:hover &`]: {
      borderRadius: '4px',
      border: `2px solid ${vars.theme.tertiary}`,
      padding: '2px 4px',
    },
    [`${button}:focus &`]: {
      borderRadius: '4px',
      border: `2px solid ${vars.theme.tertiary}`,
      padding: '2px 4px',
    },
    [`${button}[aria-selected='true'] &`]: {
      color: vars.theme.primary,
    },
  },
})
