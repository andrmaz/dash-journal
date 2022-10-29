export function addTabProps(index: number) {
  return {
    id: `tab-${index}`,
    'data-testid': `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}
