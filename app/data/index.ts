export enum Path {
  Clients = '/profile/customers',
  Dashboard = '/dashboard',
  Overview = '/profile/overview',
  Payments = '/payments',
  Profile = '/profile',
  Settings = '/settings',
  Statistics = '/statistics',
  Support = '/support',
}

export const routes = new Map<string, string>([
  [Path.Clients, 'profile'],
  [Path.Dashboard, 'dashboard'],
  [Path.Overview, 'profile'],
  [Path.Payments, 'payments'],
  [Path.Profile, 'profile'],
  [Path.Settings, 'settings'],
  [Path.Support, 'support'],
  [Path.Statistics, 'statistics'],
])

export const icons = {
  header: [
    {label: 'notification', name: 'AlertCircle', pathname: Path.Support},
    {label: 'settings', name: 'Settings', pathname: Path.Settings},
  ],
  navbar: [
    {label: 'dashboard', name: 'Activity', pathname: Path.Dashboard},
    {label: 'statistics', name: 'BarChart', pathname: Path.Statistics},
    {label: 'payments', name: 'CreditCard', pathname: Path.Payments},
    {label: 'profile', name: 'User', pathname: Path.Profile},
  ],
} as const

export const links = {
  profile: [
    {pathname: Path.Overview, label: 'overview'},
    {pathname: Path.Clients, label: 'clients'},
  ],
} as const
