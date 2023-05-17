import {style} from '@vanilla-extract/css'

export const wrapper = style({
  height: '100%',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  backgroundColor: 'var(--background-color)',
})
export const container = style({
  height: '100%',
  flex: 1,
  flexBasis: 'fit-content',
  display: 'grid',
  gridTemplateAreas: "'head head' 'main side'",
  gridTemplateRows: '5rem auto',
  gridTemplateColumns: '3fr 2fr',
})
export const content = style({
  gridArea: 'main',
  height: '100%',
  width: '100%',
})
