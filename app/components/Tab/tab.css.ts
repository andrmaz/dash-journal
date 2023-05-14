import {style} from '@vanilla-extract/css'

export const button = style([
  {
    padding: '4px 16px',
    selectors: {
      '&:hover': {
        borderRadius: 'var(--border-radius-tab)',
        fontWeight: 'var(--font-weight-medium)',
        outline: 'none',
      },
      '&:focus': {
        borderRadius: 'var(--border-radius-tab)',
        fontWeight: 'var(--font-weight-medium)',
        outline: 'none',
      },
      '&[aria-selected=true]': {
        borderBottomColor: 'var(--color-secondary)',
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
      border: '2px solid var(--color-tertiary)',
      padding: '2px 4px',
    },
    [`${button}:focus &`]: {
      borderRadius: '4px',
      border: '2px solid var(--color-tertiary)',
      padding: '2px 4px',
    },
    [`${button}[aria-selected='true'] &`]: {
      color: 'var(--color-primary)',
    },
  },
})
