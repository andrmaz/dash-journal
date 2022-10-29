import {validateEmail} from '../auth'

it('should not validate wrong email formats', () => {
  expect(validateEmail(undefined)).toBe(false)
  expect(validateEmail(null)).toBe(false)
  expect(validateEmail('')).toBe(false)
  expect(validateEmail('not-an-email')).toBe(false)
  expect(validateEmail('n@')).toBe(false)
})

it('should validate correct email format', () => {
  expect(validateEmail('kody@example.com')).toBe(true)
})
