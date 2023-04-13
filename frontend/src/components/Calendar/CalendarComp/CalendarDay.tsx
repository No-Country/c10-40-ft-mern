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
      ? 'bg-gray-400'
      : 'bg-white' 
  }
  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-green-500/70 text-black w-full font-bold'
      : ''
  }

  return (
    <div
      className={`border border-black flex flex-col h-full w-full ${getCurrentMonthClass()}`}>
      <header className="flex flex-col items-center h-full max-h-36">
        {rowIdx === 0 && (
          <div className="text-sm bg-green-500 w-full text-center my-0 py-1 border-b-2 border-black font-bold">{day.format('ddd').toUpperCase()}</div>
        )}
        <div className={`text-sm p-2 flex flex-col h-full text-center ${getCurrentDayClass()}`}>
          <p>{day.format('DD')}</p>
          {day.format('DD')==='01' && <button className='text-sm my-auto p-2 bg-blue-500'>Rutina de Hoy</button> }
          {day.format('DD')==='04' && <button className='text-sm my-auto p-2 rounded-md border-white border text-white bg-blue-400 hover:bg-green-600 ease-in duration-200'>Rutina de Hoy</button> }
          {day.format('DD')==='12' && <button className='text-sm my-auto p-2 bg-blue-500'>Rutina de Hoy</button> }
          {day.format('DD')==='19' && <button className='text-sm my-auto p-2 bg-blue-500'>Rutina de Hoy</button> }
          {day.format('DD')==='23' && <button className='text-sm my-auto p-2 bg-blue-500'>Rutina de Hoy</button> }
        </div>
      </header>
    </div>
  )
}

export default CalendarDay
