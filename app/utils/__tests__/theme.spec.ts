import {formatFactor} from '../theme'

const FACTOR = 4
const random = 2

it('should properly format a single factor spacing', () => {
  const space = FACTOR * random
  expect(formatFactor(random)).toBe(`${space}px`)
})

it('should properly format a list of factor spacing', () => {
  const space = FACTOR * random
  expect(formatFactor([random, random])).toBe(`${space}px ${space}px`)
})
