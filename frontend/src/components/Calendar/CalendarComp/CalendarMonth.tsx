import React from 'react'
import CalendarDay from './CalendarDay'
import { type Dayjs } from 'dayjs'

interface Props {
  month: Dayjs[][]
  date: Dayjs
}

const CalendarMonth = ({ date, month }: Props): JSX.Element => {
  return (
    <div className="w-full flex-1 grid grid-cols-7 grid-rows-7">
      {month.map((row: any[], i: React.Key) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay date={date} day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
export default CalendarMonth
