import * as React from 'react'

import {Tab} from '../Tab'
import {addTabProps} from '~/utils/a11y'
import {useTabsKey} from '~/hooks/useTabsKey'

interface TablistProps {
  labels: string[]
  tab: number
  setTab: React.Dispatch<React.SetStateAction<number>>
}

export const Tablist = (props: TablistProps) => {
  const {labels, tab, setTab} = props
  const [handleKeyPress, tabRef] = useTabsKey(labels.length - 1, tab, setTab)
  return (
    <div
      role='tablist'
      aria-labelledby='tablist'
      aria-orientation='horizontal'
      onKeyDown={handleKeyPress}
    >
      {labels.map((label, index) => {
        const selected = tab === index
        return (
          <Tab
            key={`${label}-${index}`}
            label={label}
            selected={selected}
            onClick={() => setTab(index)}
            ref={selected ? tabRef : null}
            {...addTabProps(index, selected)}
          />
        )
      })}
    </div>
  )
}
