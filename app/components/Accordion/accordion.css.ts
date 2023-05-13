import {style} from '@vanilla-extract/css'

export const wrapper = style({
  height: 'auto',
  width: 'min(300px, 100%)',
  borderRadius: 'var(--border-radius-medium)',
  border: 'solid 1px gray' /* ${p => p.theme.colors.gray['300']} */,
})
export const header = style({
  display: 'flex',
  alignItems: 'center',
})
export const button = style({
  width: '100%',
  backgroundColor: 'var(--color-background)',
})
export const title = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 'var(--font-size-small)',
  color: 'black' /* ${p => p.theme.colors.black} */,
  textTransform: 'capitalize',
})
export const container = style({
  paddingLeft: '8px' /* ${p => p.theme.spacing(6)} */,
  paddingRight: '10px' /* ${p => p.theme.spacing(6.5)} */,
})
export const content = style({
  borderTop: 'solid 1px' /* ${ p => p.theme.colors.gray['300']} */,
  paddingTop: '16px' /* ${p => p.theme.spacing(4)} */,
  paddingBottom: '18px' /* ${p => p.theme.spacing(4.5)} */,
})
export const icon = style({
  marginLeft: 'auto',
})
