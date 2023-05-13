import {style} from '@vanilla-extract/css'

export const button = style({
  width: '48px',
  height: '44px',
  padding: '4px',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: 'var(--color-base)',
  borderRadius: 'var(--border-radius-medium)',
  boxShadow: 'var(--shadow-small)',
})
export const icon = style({
  height: '100%',
})
