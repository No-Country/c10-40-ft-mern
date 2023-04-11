import { useState } from 'react'
import { getMonth } from 'components/Calendar/CalendarComp/calendarUtils'
import CalendarHeader from './CalendarComp/CalendarHeader'
import CalendarSidebar from './CalendarComp/CalendarSidebar'
import CalendarMonth from './CalendarComp/CalendarMonth'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

const Calendar = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [date, setDate] = useState(dayjs())
  return (
    <>
      <div className="w-screen flex flex-col">
        <CalendarHeader date={date} setDate={setDate} />
        <div className="flex flex-1">
          <CalendarSidebar />
          <CalendarMonth month={currentMonth} />
        </div>
      </div>
    </>
  )
}

export default Calendar
