import * as React from 'react'

import {Button} from './Button'
import type {ButtonProps} from './Button'
import {Icon} from './Icon'
import type {IconProps} from './Icon'
import VisuallyHidden from '@reach/visually-hidden'
import styled from 'styled-components'

interface ChipProps extends ButtonProps {
  /**
   * Provides text for screen readers that is visually hidden
   */
  action: string
  /**
   * Overrides the icon properties
   */
  iconProps: IconProps
}

export const Chip = ({action, iconProps, ...delegated}: ChipProps) => {
  return (
    <StyledButton {...delegated}>
      <VisuallyHidden>{action}</VisuallyHidden>
      <StyledIcon {...iconProps} color='grey' />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: ${p => p.theme.spacing(12)};
  height: ${p => p.theme.spacing(11)};
  padding: ${p => p.theme.spacing(1)};
  display: grid;
  place-items: center;
  background-color: var(--color-base);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
`
const StyledIcon = styled(Icon)`
  height: 100%;
`
