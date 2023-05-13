import * as React from 'react'

import {Button} from '../Button'
import type {ButtonProps} from '../Button'
import {Icon} from '../Icon'
import type {IconProps} from '../Icon'
import VisuallyHidden from '@reach/visually-hidden'
import * as styles from './chip.css'

interface ChipProps extends ButtonProps {
  /**
   * Provides text for screen readers that is visually hidden
   */
  label: string
  /**
   * Overrides the icon properties
   */
  icon: IconProps
}

export const Chip = ({label, icon, ...delegated}: ChipProps) => {
  return (
    <Button {...delegated} className={styles.button}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon {...icon} color='grey' className={styles.icon} />
    </Button>
  )
}
