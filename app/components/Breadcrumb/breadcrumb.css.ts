import {style} from '@vanilla-extract/css'

export const wrapper = style({
  padding: '0.8em 1em',
  border: '1px solid gray' /* ${p => p.theme.colors.gray['700']} */,
  borderRadius: 'var(--border-radius-medium)',
  backgroundColor: 'gray' /* ${p => p.theme.colors.gray['300']} */,
  /* selectors: {
    'aria-current=page': {
      color: 'var(--color-dark)',
      fontWeight: 'var(--font-weight-bold)',
      textDecoration: 'none',
    },
  }, */
})
export const list = style({
  margin: 0,
  paddingLeft: 0,
  listStyle: 'none',
})
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
