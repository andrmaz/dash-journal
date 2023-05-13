import {style} from '@vanilla-extract/css'

export const wrapper = style({
  gridArea: 'side',
  height: '100%',
  width: '100%',
  display: 'grid',
  placeItems: 'center',
  margin: 'auto 0',
  borderLeft: '1px solid var(--color-foreground)',
})
