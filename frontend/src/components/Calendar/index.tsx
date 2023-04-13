import { useState } from 'react'
import { getMonth } from 'components/Calendar/CalendarComp/calendarUtils'
import CalendarHeader from './CalendarComp/CalendarHeader'
import CalendarSidebar from './CalendarComp/CalendarSidebar'
import CalendarMonth from './CalendarComp/CalendarMonth'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

const Calendar = (): JSX.Element => {
  const calendarMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const a = calendarMonths[2]
  const [currentMonth, setCurrentMonth] = useState(getMonth(a))
  const [date, setDate] = useState(dayjs())
  const [clickCount, setClickCount] = useState(0);

  const handleActualMonth = () => {
    setCurrentMonth(getMonth())
  }
  const handlePrevMonth = (a: number) => {
    setCurrentMonth(getMonth(a - (clickCount + 1)))
  }
  const handleNextMonth = (a: number) => {
    setCurrentMonth(getMonth(a + (clickCount + 1)))
  }
  const handleActualMonthWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClickCount(0)
    handleActualMonth()
  }
  const handlePrevMonthWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClickCount(clickCount - 1)
    handlePrevMonth(a)
  }
  const handleNextMonthWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClickCount(clickCount + 1)
    handleNextMonth(a)
  }
  return (
    <>
      <div className="w-screen flex flex-col">

        <CalendarHeader date={date} setDate={setDate} />
        <button onClick={handlePrevMonthWrapper}>Anterior</button>
        <button onClick={handleActualMonthWrapper}>Actual</button>
        <button onClick={handleNextMonthWrapper}>Siguiente</button>
        <div className="flex flex-1">
          <CalendarSidebar />
          <CalendarMonth month={currentMonth}/>
        </div>
      </div>
    </>
  )
}

export default Calendar
