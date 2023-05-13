import {style} from '@vanilla-extract/css'

export const wrapper = style({
  gridArea: 'head',
  height: '5rem',
  width: '100%',
  alignItems: 'center',
  borderBottom: '1px solid black' /* ${p => p.theme.colors.black} */,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px 20px',
  backgroundColor: 'sand' /* ${p => p.theme.colors.catawba['1000']} */,
})
export const title = style({
  display: 'inline-block',
  fontWeight: 'var(--font-weight-bold)',
  fontSize: 'var(--font-size-large)',
  lineHeight: 'var(--font-height-normal)',
  margin: '6px 0 6px 10px',
  verticalAlign: 'top',
  textTransform: 'capitalize',
})
export const container = style({
  display: 'flex',
  gap: '16px' /* ${p => p.theme.spacing(4)} */,
})
