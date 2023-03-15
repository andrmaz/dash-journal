import {formatDateEvent, format24Hour, getIntervalDateRange} from '../date'
import faker from '@faker-js/faker'

describe('date formatting', () => {
  it('should correctly format the event date', () => {
    const date = formatDateEvent(new Date())
    expect(date).toMatch(/\d{2}:\d{2}/)
  })
  it('should return a placeholder if no date is provided', () => {
    const date = formatDateEvent()
    expect(date).toMatch('-')
  })
  it('should format a digit to 24-hour value', () => {
    const digit = faker.datatype.number({max: 9}).toString()
    const num = format24Hour(digit)
    expect(num).toBe(`0${digit}`)
  })
})

describe('date calculation', () => {
  it('should retrieve the interval date range for remaining tasks', () => {
    const [start, end] = getIntervalDateRange('remaining')
    const now = new Date().getTime()
    expect(start.getTime()).toBeGreaterThanOrEqual(now)
    expect(end.getTime()).toBeGreaterThanOrEqual(now)
  })
  it('should retrieve the interval date range for ongoing tasks', () => {
    const [start, end] = getIntervalDateRange('ongoing')
    const now = new Date().getTime()
    expect(start.getTime()).toBeLessThanOrEqual(now)
    expect(end.getTime()).toBeGreaterThanOrEqual(now)
  })
  it('should retrieve the interval date range for completed tasks', () => {
    const [start, end] = getIntervalDateRange('completed')
    const now = new Date().getTime()
    expect(start.getTime()).toBeLessThanOrEqual(now)
    expect(end.getTime()).toBeLessThanOrEqual(now)
  })
})
