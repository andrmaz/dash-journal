import * as icon from 'react-feather'

import React from 'react'

export type Name =
  | 'Activity'
  | 'BarChart'
  | 'CreditCard'
  | 'AlertCircle'
  | 'Settings'
  | 'LogOut'

export interface IconProps extends icon.IconProps {
  name: Name
}

export const Icon = ({name, ...delegated}: IconProps) => {
  const Component = icon[name]
  return <Component {...delegated} />
}
