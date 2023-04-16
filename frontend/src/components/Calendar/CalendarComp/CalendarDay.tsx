import React from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'

const CalendarDay = ({
  day,
  rowIdx,
  date
}: {
  day: Dayjs
  rowIdx: React.Key
  date: Dayjs
}): JSX.Element => {
  const navigate = useNavigate()
  console.log(getCurrentMonthClass())

  function getCurrentMonthClass(): string {
    return day.format('MM-YY') === date.format('MM-YY')
      ? 'bg-gray-400'
      : 'bg-white'
  }
  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-green-500/70 text-black w-full h-full font-bold'
      : ''
  }

  return (
    <div
      className={`border border-black flex flex-col h-full w-full ${getCurrentMonthClass()}`}>
      <header className="flex flex-col items-center h-full max-h-36">
        {rowIdx === 0 && (
          <div className="text-sm bg-green-500 w-full text-center p-1 border-b-2 border-black font-bold">
            {day.format('ddd').toUpperCase()}
          </div>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}

export default CalendarDay
