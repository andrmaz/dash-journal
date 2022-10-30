import {getHours, getMinutes, setHours, setMinutes} from 'date-fns'

import {dateFnsLocalizer} from 'react-big-calendar'
import enUS from 'date-fns/locale/en-US'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'

export function formatDateEvent(date?: Date) {
  if (!date) return '-'
  return format(new Date(date), 'HH:mm')
}

export function formatDateInput(date: string, input: string) {
  const hours = Number(input.slice(0, 2))
  const minutes = Number(input.slice(3, 5))
  return setMinutes(setHours(new Date(date), hours), minutes)
}

export function formatDateDefault(date?: Date) {
  if (!date) return '--:--'
  const hours = getHours(date)
  const minutes = getMinutes(date)
  return `${hours}:${minutes}`
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
