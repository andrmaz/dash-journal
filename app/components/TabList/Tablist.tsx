import * as React from 'react'

import {Tab} from '../Tab'
import {addTabProps} from '~/utils/a11y'
import {useTabsKey} from '~/hooks/useTabsKey'

interface TablistProps {
  labels: string[]
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export const Tablist = (props: TablistProps) => {
  const {labels, selected, setSelected} = props
  const [handleKeyPress, tabRef] = useTabsKey(
    labels.length - 1,
    selected,
    setSelected
  )
  return (
    <div
      role='tablist'
      aria-labelledby='tablist'
      aria-orientation='horizontal'
      onKeyDown={handleKeyPress}
    >
      {labels.map((label, index) => (
        <Tab
          key={`${label}-${index}`}
          label={label}
          selected={selected === index}
          onClick={() => setSelected(index)}
          ref={selected === index ? tabRef : null}
          {...addTabProps(index)}
        />
      ))}
    </div>
  )
}
