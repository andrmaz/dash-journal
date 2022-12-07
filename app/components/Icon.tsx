import * as React from 'react'
import * as icon from 'react-feather'

export type Name =
  | 'Activity'
  | 'BarChart'
  | 'CreditCard'
  | 'AlertCircle'
  | 'Settings'
  | 'LogOut'
  | 'X'

export interface IconProps extends icon.IconProps {
  name: Name
}

export const Icon = (props: IconProps) => {
  const {name, ...delegated} = props
  const Component = icon[name]
  return <Component {...delegated} />
}
