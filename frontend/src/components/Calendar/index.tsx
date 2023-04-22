import { useState } from 'react'
import { getMonth } from 'utils/calendarUtils'
import CalendarHeader from './CalendarComp/CalendarHeader'
import CalendarMonth from './CalendarComp/CalendarMonth'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

const Calendar = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [date, setDate] = useState(dayjs())

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <CalendarHeader
        setCurrentMonth={setCurrentMonth}
        date={date}
        setDate={setDate}
      />
      <CalendarMonth date={date} month={currentMonth} />
    </div>
  )
}

export default Calendar
