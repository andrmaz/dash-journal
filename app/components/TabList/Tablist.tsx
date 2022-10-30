import * as React from 'react'

import {Tab} from '../Tab'
import {addTabProps} from '~/utils/a11y'
import styled from 'styled-components'
import {useTabsKey} from '~/hooks/useTabsKey'

interface TablistProps {
  labels: string[]
}

export const Tablist = (props: TablistProps) => {
  const initial = 0
  const [selected, setSelected] = React.useState<number>(initial)
  const [handleKeyPress, tabRef] = useTabsKey(
    props.labels.length - 1,
    selected,
    setSelected
  )
  return (
    <Wrapper
      role='tablist'
      aria-labelledby='tablist'
      aria-orientation='horizontal'
      onKeyDown={handleKeyPress}
    >
      {props.labels.map((label, index) => (
        <Tab
          key={`${label}-${index}`}
          label={label}
          selected={selected === index}
          onClick={() => setSelected(index)}
          ref={selected === index ? tabRef : null}
          {...addTabProps(index)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: ${p => p.theme.spacing(140)};
`
