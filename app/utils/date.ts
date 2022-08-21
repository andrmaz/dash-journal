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

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    'en-US': enUS,
  },
})
