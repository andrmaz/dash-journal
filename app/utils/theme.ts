export function formatFactor(factor: number | number[]): string {
  return Array.isArray(factor)
    ? factor.map(f => `${4 * f}px `).join(' ')
    : `${4 * factor}px`
}
