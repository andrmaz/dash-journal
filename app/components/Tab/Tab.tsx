import * as React from 'react'
import * as styles from './tab.css'

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
    <button
      type='button'
      role='tab'
      onClick={onClick}
      ref={ref}
      className={styles.button}
      {...delegated}
    >
      <span className={styles.label}>{label}</span>
    </button>
  )
})
Tab.displayName = 'Tab'
