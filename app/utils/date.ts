import {getHours, getMinutes, setHours, setMinutes} from 'date-fns'

import type {Interval} from '~/routes/dashboard'
import {dateFnsLocalizer} from 'react-big-calendar'
import enUS from 'date-fns/locale/en-US'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'

export function getIntervalDateRange(interval: Interval) {
  if (interval === 'remaining') return [now, future] as const
  if (interval === 'ongoing') return [now, now] as const
  if (interval === 'completed') return [past, now] as const
  return [past, future] as const
}

export function formatDateMeeting(date?: Date) {
  if (!date) return ''
  return formatDate(date, 'MMMM, do')
}

export function formatDateEvent(date?: Date) {
  if (!date) return '-'
  return formatDate(date, 'HH:mm')
}

export function formatDateInput(date: string, input: string) {
  const hours = Number(input.slice(0, 2))
  const minutes = Number(input.slice(3, 5))
  return setMinutes(setHours(new Date(date), hours), minutes)
}

export function formatDateTime(date?: Date | string) {
  if (!date) return
  const hours = String(getHours(new Date(date)))
  const minutes = String(getMinutes(new Date(date)))
  return `${format24Hour(hours)}:${format24Hour(minutes)}`
}

/**
 * Return a time value in 24-hour format that includes leading zeros.
 * @param  {string} time
 * @returns string
 */
function format24Hour(time: string): string {
  return time.length === 1 ? `0${time}` : time
}

function formatDate(date: Date | string, pattern: string): string {
  return format(new Date(date), pattern)
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    'en-US': enUS,
  },
})

const future = new Date(new Date().setFullYear(3000))
const now = new Date()
const past = new Date(0)
