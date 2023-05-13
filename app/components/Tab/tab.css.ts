import {style} from '@vanilla-extract/css'

export const button = style({
  backgroundColor: 'var(--color-base)',
  padding: '4px 16px',
  selectors: {
    '&:hover' /* ,
        '&:focus' */: {
      borderRadius: 'var(--border-radius-tab)',
      fontWeight: 'var(--font-weight-medium)',
      outline: 'none',
    },
    '&[aria-selected=true]': {
      borderBottomColor: 'pink' /* ${p => p.theme.colors.tuscany['1000']} */,
      borderWidth: 0,
      borderBottomWidth: '4px',
    },
    '&[aria-selected=false]': {
      border: 'none',
    },
  },
})
export const label = style({
  selectors: {
    '&:focus': {
      display: 'inline-block',
      padding: '4px 6px',
    },
    [`${button}:hover &` /* , [`${button}:focus &`] */]: {
      borderRadius: '4px',
      border: '2px solid pink' /* ${theme.colors.tuscany['1000']}`} */,
      padding: '2px 4px',
    },
    [`${button}[aria-selected='true'] &`]: {
      color: 'pink' /* ${p => p.theme.colors.oldRose['1000']} */,
    },
  },
})
