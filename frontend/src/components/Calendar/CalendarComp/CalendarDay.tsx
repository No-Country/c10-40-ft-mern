import React from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { Link } from 'react-router-dom'

const CalendarDay = ({
  day,
  rowIdx,
  date,
  routineDay
}: {
  day: Dayjs
  rowIdx: React.Key
  date: Dayjs
  routineDay: number[]
}): JSX.Element => {
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

  return (
    <div
      className={`border border-primary-bg flex flex-col  w-full ${getCurrentMonthClass()}`}>
      <div className="flex flex-col items-center h-full">
        {rowIdx === 0 && (
          <div className="text-lg bg-primary-400/60 w-full text-center py-2 font-Barlow font-bold">
            {day.format('ddd').toUpperCase()}
          </div>
        )}
        <div className="w-full h-full min-h-[6rem] group relative">
          <div
            className={`w-full h-full text-sm p-2 flex flex-col gap-4 items-center ${getCurrentDayClass()}`}>
            <p className="text-start">{day.format('DD')}</p>
            {routineDay && routineDay.length > 0 ? (
              day.format('MM-YY') === date.format('MM-YY') &&
              routineDay.includes(day.day()) ? (
                <Link
                  to={'/dashboard/routine'}
                  className="flex items-center justify-center text-primary-bg absolute top-2/4 -translate-y-2/4 w-4 h-4 rounded-full bg-primary-400/80 group-hover:rounded-none group-hover:w-full group-hover:h-full group-hover:bg-primary-400 transition-all">
                  <p className="text-lg opacity-0 group-hover:opacity-100">
                    Ir a rutina
                  </p>
                </Link>
              ) : null
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarDay
