import {style} from '@vanilla-extract/css'

export const navigation = style({
  width: '17.5%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'pink' /* ${p => p.theme.colors.tuscany['500']} */,
  padding: '32px' /* ${p => p.theme.spacing(8)} */,
})
export const list = style({
  height: '60%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px' /* ${p => p.theme.spacing(4)} */,
})
export const button = style({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
})
