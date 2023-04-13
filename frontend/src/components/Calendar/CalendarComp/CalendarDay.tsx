import React from 'react'
import dayjs, { type Dayjs } from 'dayjs'

const CalendarDay = ({
  day,
  rowIdx,
  date
}: {
  day: Dayjs
  rowIdx: React.Key
  date: Dayjs
}): JSX.Element => {
  function getCurrentMonthClass(): string {
    return day.format('MM-YY') === date.format('MM-YY')
      ? 'bg-orange-500'
      : 'bg-white'
  }
  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }

  return (
    <div
      className={`border border-black flex flex-col ${getCurrentMonthClass()}`}>
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
