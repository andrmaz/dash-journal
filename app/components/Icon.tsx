import * as feather from 'react-feather'

import React from 'react'

export type Name = 'Activity' | 'Airplay' | 'AlertCircle'

interface IconProps extends feather.IconProps {
  name: Name
}

export const Icon = ({name, ...delegated}: IconProps) => {
  const Component = feather[name]
  return <Component {...delegated} />
}
