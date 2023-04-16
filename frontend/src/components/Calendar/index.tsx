import { useState } from 'react'
import { getMonth } from 'utils/calendarUtils'
import CalendarHeader from './CalendarComp/CalendarHeader'
import CalendarMonth from './CalendarComp/CalendarMonth'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

const Calendar = (): JSX.Element => {
  const calendarMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const a = calendarMonths[2]
  const [currentMonth, setCurrentMonth] = useState(getMonth(a))
  const [date, setDate] = useState(dayjs())

  return (
    <>
      <div className="w-screen flex flex-col">
        <CalendarHeader
          setCurrentMonth={setCurrentMonth}
          date={date}
          setDate={setDate}
        />
        <div className="flex flex-1">
          <CalendarMonth date={date} month={currentMonth} />
        </div>
      </div>
    </>
  )
}

export default Calendar
