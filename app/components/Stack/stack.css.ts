import {style} from '@vanilla-extract/css'

export const wrapper = style({
  vars: {
    '--width': '10rem',
  },
  height: '3.5rem',
  display: 'grid',
  placeContent: 'center',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: 'var(--width)',
  padding: '8px',
  backgroundColor: 'var(--background)',
  color: 'var(--color)',
  border: 'var(--border)',
  borderRadius: 'var(--border-radius-medium)',
  boxShadow: 'var(--shadow)',
})
export const label = style({
  fontSize: 'var(--font-size-small)',
  textTransform: 'capitalize',
  letterSpacing: 'var(--font-spacing-normal)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: 'calc(var(--width) * 0.66)',
  marginLeft: '8px',
})
