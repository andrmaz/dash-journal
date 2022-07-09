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

export const Tab = React.forwardRef<Ref, TabProps>(
  ({label, selected, onClick, ...delegated}, ref) => {
    return (
      <Button
        role='tab'
        aria-selected={selected}
        onClick={onClick}
        {...delegated}
        type='button'
        tabIndex={-1}
        ref={ref}
      >
        <Label>{label}</Label>
      </Button>
    )
  }
)
Tab.displayName = 'Tab'

const Button = styled.button`
  background-color: ${p => p.theme.colors.white};
  padding: 4px 16px;
  &:hover,
  &:focus {
    border-radius: var(--border-radius-tab);
    font-weight: var(--font-weight-medium);
    outline: none;
  }
  &[aria-selected='true'] {
    border-bottom-color: ${p => p.theme.colors.cyan_blue};
    border-width: 0;
    border-bottom-width: 4px;
  }
  &[aria-selected='false'] {
    border: none;
  }
`
const Label = styled.span`
  &:focus {
    display: inline-block;
    padding: 4px 6px;
  }
  ${Button}:hover, ${Button}:focus & {
    border-radius: 3px;
    border: 2px solid ${p => p.theme.colors.cyan_blue};
    padding: 2px 4px;
  }
  ${Button}[aria-selected='true'] & {
    color: ${p => p.theme.colors.cyan_blue};
  }
`
