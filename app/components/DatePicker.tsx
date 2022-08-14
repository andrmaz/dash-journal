import * as React from 'react'

import ReactDatePicker from 'react-datepicker'
import type {ReactDatePickerProps} from 'react-datepicker'
import {createGlobalStyle} from 'styled-components'

interface DatePickerProps extends Partial<ReactDatePickerProps> {
  defaultDate?: Date
}

const DatePickerStyles = createGlobalStyle`
    .react-datepicker {
        height: 400px;
        width: 400px;
    }
    .react-datepicker__day-names {
      width: 100%;
    }
    .react-datepicker__day-name {
      width: calc(100% / 8);
    }
    .react-datepicker__month-container {
        height: 100%;
        width: 100%;
    }
    .react-datepicker__month,
    .react-datepicker__week {
        width: 100%;
    }
    .react-datepicker__day {
      height: 60px;
      width: calc(100% / 8);
    }
`

export const DatePicker = ({defaultDate, ...delegated}: DatePickerProps) => {
  const today = new Date()
  const [startDate, setStartDate] = React.useState(defaultDate || today)
  const handleDateChange = (date: Date) => setStartDate(date)
  const handleDateSelect = (date: Date) => console.info(date)

  return (
    <>
      <DatePickerStyles />
      <ReactDatePicker
        {...delegated}
        selected={startDate}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        inline
        ariaLabelledBy='date-picker'
        ariaDescribedBy='date-and-time-picker'
        id='react-date-picker'
        wrapperClassName='datepicker'
      />
    </>
  )
}
