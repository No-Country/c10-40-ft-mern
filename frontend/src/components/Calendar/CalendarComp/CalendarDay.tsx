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

        <div
          className={`text-sm p-2 flex flex-col h-full text-center ${getCurrentDayClass()}`}>
          <p>{day.format('DD')}</p>
          {day.format('DD') === '04' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '07' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '10' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '13' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '18' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '21' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '24' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '28' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
          {day.format('DD') === '30' && (
            <Link
              to="/dashboard/routine"
              className="text-sm my-auto p-2 rounded-md text-white bg-blue-500 hover:bg-green-600 ease-in duration-200">
              Rutina de Hoy
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}

export default CalendarDay
