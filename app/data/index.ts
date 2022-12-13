enum Path {
  dashboard = '/dashboard',
  payments = '/payments',
  profile = '/profile',
  settings = '/settings',
  statistics = '/statistics',
  support = '/support',
}

export const routes = new Map<string, string>([
  [Path.dashboard, 'dashboard'],
  [Path.payments, 'payments'],
  [Path.profile, 'profile'],
  [Path.settings, 'settings'],
  [Path.support, 'support'],
  [Path.statistics, 'statistics'],
])

export const icons = {
  header: [
    {label: 'notification', name: 'AlertCircle', pathname: Path.support},
    {label: 'settings', name: 'Settings', pathname: Path.settings},
  ],
  navbar: [
    {label: 'dashboard', name: 'Activity', pathname: Path.dashboard},
    {label: 'statistics', name: 'BarChart', pathname: Path.statistics},
    {label: 'payments', name: 'CreditCard', pathname: Path.payments},
    {label: 'profile', name: 'User', pathname: Path.profile},
  ],
} as const
