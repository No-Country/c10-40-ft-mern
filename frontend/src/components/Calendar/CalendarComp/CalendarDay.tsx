import React from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from 'hooks/useUser'

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
  const { user, isLoading } = useUser()

  function getCurrentMonthClass(): string {
    return day.format('MM-YY') === date.format('MM-YY')
      ? 'bg-primary-100/10'
      : 'bg-primary-bg'
  }
  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-primary-400/60 text-primary-bg w-full h-full'
      : ''
  }

  console.log(day.day())

  return (
    <div
      className={`border border-black flex flex-col h-full w-full ${getCurrentMonthClass()}`}>
      <header className="flex flex-col items-center h-full max-h-36">
        {rowIdx === 0 && (
          <div className="text-lg bg-primary-400/60 w-full text-center py-2 font-Barlow font-bold">
            {day.format('ddd').toUpperCase()}
          </div>
        )}
        <div
          className={`text-sm p-2 flex flex-col items-center ${getCurrentDayClass()}`}>
          <p className="text-start">{day.format('DD')}</p>
        </div>
      </header>
    </div>
  )
}

export default CalendarDay
