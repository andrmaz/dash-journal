import * as React from 'react'

export const useTabsKey = (
  tabCount: number,
  tab: number,
  setTab: React.Dispatch<React.SetStateAction<number>>
) => {
  const tabRef = React.useRef<HTMLButtonElement | null>(null)
  //* focus on the correct element programmatically when a user presses either one of the arrow keys
  React.useEffect(() => {
    tabRef.current?.focus()
  }, [tab])

  /**
   * Helper function to handle focusing the correct tab
   * @param  {number} firstTabInRound - The number of the tab that is "first" in the round
   * @param  {number} nextTab - The tab where the focus should go next if the selected tab is not the last in the round
   * @param  {number} lastTabInRound - with right arrow, this would be the first tab, and with the left arrow - the last
   * @see {@link https://dev.to/eevajonnapanula/keyboard-accessible-tabs-with-react-5ch4}
   * @returns void
   */
  const handleNextTab = (
    firstTabInRound: number,
    nextTab: number,
    lastTabInRound: number
  ): void => {
    const tabToSelect = tab === lastTabInRound ? firstTabInRound : nextTab
    setTab(tabToSelect)
  }

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === 'ArrowLeft') {
      const last = tabCount
      const next = tab - 1
      handleNextTab(last, next, 0)
    }
    if (event.key === 'ArrowRight') {
      const first = 0
      const next = tab + 1
      handleNextTab(first, next, tabCount)
    }
  }
  return [handleKeyPress, tabRef] as const
}
