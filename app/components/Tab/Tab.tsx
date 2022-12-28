import * as React from 'react'

import styled from 'styled-components'

interface TabProps extends React.ButtonHTMLAttributes<{}> {
  /**
   * The text to display in the tab
   */
  label: string
  /**
   * Indicates the current "selected" state of the tab
   */
  selected: boolean
  /**
   * Tab select handler
   */
  onClick: () => void
}
type Ref = HTMLButtonElement

export const Tab = React.forwardRef<Ref, TabProps>((props, ref) => {
  const {label, selected, onClick, ...delegated} = props

  return (
    <Button type='button' role='tab' onClick={onClick} ref={ref} {...delegated}>
      <Label>{label}</Label>
    </Button>
  )
})
Tab.displayName = 'Tab'

const Button = styled.button`
  background-color: ${p => p.theme.colors.white};
  padding: ${({theme: {spacing}}) => `${spacing(1)} ${spacing(4)}`};
  &:hover,
  &:focus {
    border-radius: var(--border-radius-tab);
    font-weight: var(--font-weight-medium);
    outline: none;
  }
  &[aria-selected='true'] {
    border-bottom-color: ${p => p.theme.colors.tuscany['1000']};
    border-width: 0;
    border-bottom-width: ${p => p.theme.spacing(1)};
  }
  &[aria-selected='false'] {
    border: none;
  }
`
const Label = styled.span`
  &:focus {
    display: inline-block;
    padding: ${({theme: {spacing}}) => `${spacing(1)} ${spacing(1.5)}`};
  }
  ${Button}:hover, ${Button}:focus & {
    border-radius: ${p => p.theme.spacing(1)};
    border: ${({theme}) =>
      `${theme.spacing(0.5)} solid ${theme.colors.tuscany['1000']}`};
    padding: ${({theme: {spacing}}) => `${spacing(0.5)} ${spacing(1)}`};
  }
  ${Button}[aria-selected='true'] & {
    color: ${p => p.theme.colors.oldRose['1000']};
  }
`
