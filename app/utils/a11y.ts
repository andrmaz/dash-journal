function addTabProps(index: number, selected: boolean) {
  return {
    id: `tab-${index}`,
    'data-testid': `tab-${index}`,
    'aria-controls': `tabpanel`,
    'aria-selected': selected,
    tabIndex: selected ? undefined : -1,
  }
}

function addTabpanelProps(index: number) {
  return {
    id: 'tabpanel',
    role: 'tabpanel',
    'aria-labelledby': `tab-${index}`,
  }
}

export {addTabProps, addTabpanelProps}
