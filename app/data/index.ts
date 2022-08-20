import type {Name} from '~/components/Icon'

export const items: {label: string; icon: Name; pathname: string}[] = [
  {label: 'dashboard', icon: 'Activity', pathname: '/'},
  {label: 'payments', icon: 'CreditCard', pathname: '/payments'},
  {label: 'statistics', icon: 'BarChart', pathname: '/statistics'},
]

export const routes = new Map([
  ['/', 'dashboard'],
  ['/payments', 'payments'],
  ['/statistics', 'statistics'],
])

export const icons: {action: string; name: Name}[] = [
  {action: 'Alert', name: 'AlertCircle'},
  {action: 'Settings', name: 'Settings'},
]
