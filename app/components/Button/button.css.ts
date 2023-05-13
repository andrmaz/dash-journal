import {style} from '@vanilla-extract/css'

export const button = style({
  backgroundColor: 'var(--background)',
  border: 0,
  borderRadius: 'var(--border-radius-xx-large)',
  boxShadow: 'var(--shadow)',
  color: 'var(--color)',
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: 'var(--font-size)',
  lineHeight: 'var(--font-height-normal)',
  padding: 'var(--padding)',
})
