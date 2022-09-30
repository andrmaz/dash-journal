import {formatDateEvent} from '../date'

it('should correctly format the event date', () => {
  const date = formatDateEvent(new Date())
  expect(date).toMatch(/\d{2}:\d{2}/)
})

it('should return a placeholder if no date is provided', () => {
  const date = formatDateEvent()
  expect(date).toMatch('-')
})
