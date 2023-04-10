import { useState } from 'react'
import { getMonth } from 'components/Calendar/CalendarComp/calendarUtils'
import CalendarHeader from './CalendarComp/CalendarHeader'
import CalendarSidebar from './CalendarComp/CalendarSidebar'
import CalendarMonth from './CalendarComp/CalendarMonth'

const Calendar = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  return (
    <>
      <div className="w-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <CalendarSidebar />
          <CalendarMonth month={currentMonth} />
        </div>
      </div>
    </>
  )
}

export default Calendar
