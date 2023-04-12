import React from 'react'
import dayjs, { type Dayjs } from 'dayjs'

const CalendarDay = ({
  day,
  rowIdx
}: {
  day: Dayjs
  rowIdx: React.Key
}): JSX.Element => {
  function getCurrentMonthClass(): string {
    return day.format('MM') === dayjs().format('MM')
      ? 'bg-orange-500'
      : ''
  }
  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }
  return (
    <div className={`bg-white border border-black flex flex-col ${getCurrentMonthClass()}`}>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}

export default CalendarDay
