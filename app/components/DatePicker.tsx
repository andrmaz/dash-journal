import * as React from 'react'

import ReactDatePicker from 'react-datepicker'
import type {ReactDatePickerProps} from 'react-datepicker'

interface DatePickerProps extends Partial<ReactDatePickerProps> {
  defaultDate?: Date
}

export const DatePicker = ({defaultDate, ...delegated}: DatePickerProps) => {
  const today = new Date()
  const [startDate, setStartDate] = React.useState(defaultDate || today)
  const handleDateChange = (date: Date) => setStartDate(date)
  const handleDateSelect = (date: Date) => console.info(date)

  return (
    <ReactDatePicker
      {...delegated}
      selected={startDate}
      onChange={handleDateChange}
      onSelect={handleDateSelect}
      inline
      ariaLabelledBy='date-picker'
      ariaDescribedBy='date-and-time-picker'
      id='react-date-picker'
    />
  )
}
