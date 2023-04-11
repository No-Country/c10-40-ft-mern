import React from 'react'
import CalendarDay from './CalendarDay'
import { type Dayjs } from 'dayjs'

interface Props {
  month: Dayjs[][]
}

const CalendarMonth = ({ month }: Props): JSX.Element => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row: any[], i: React.Key) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay day={day} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
export default CalendarMonth
/* month is not an any tipe, i is not an any tipe */
