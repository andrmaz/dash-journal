import {style} from '@vanilla-extract/css'
import {sprinkles} from '~/themes/sprinkles.css'

/* export const wrapper = sprinkles({
  padding: 'medium',
}) */
export const wrapper = style({
  padding: 'var(--space-medium)',
})
