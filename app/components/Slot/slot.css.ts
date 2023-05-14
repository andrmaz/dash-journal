import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
})
/* export const title = sprinkles({
  fontSize: 'small',
}) */
export const title = style({
  fontSize: 'var(--font-size-small)',
})
/* export const date = sprinkles({
  fontSize: 'small',
}) */
export const date = style({
  fontSize: 'var(--font-size-small)',
})
