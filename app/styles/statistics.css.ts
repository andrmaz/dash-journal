import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

/* export const wrapper = sprinkles({
  padding: 'medium',
}) */
export const wrapper = style({
  padding: 'var(--space-medium)',
})
/* export const item = sprinkles({
  marginBottom: 'medium',
}) */
export const item = style({
  marginBottom: 'var(--space-medium)',
})
