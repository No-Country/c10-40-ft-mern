import React, { useEffect, useState } from 'react'
import CalendarDay from './CalendarDay'
import { type Dayjs } from 'dayjs'
import Loader from 'components/Loader'
import { useUser } from 'hooks/useUser'

interface Props {
  month: Dayjs[][]
  date: Dayjs
}

const CalendarMonth = ({ date, month }: Props): JSX.Element => {
  const { user, isLoading, hasRoutine } = useUser()
  const [routineDay, setRoutineDay] = useState<number[]>()

  if (isLoading) return <Loader type="spinner" />

  useEffect(() => {
    if (!isLoading && user && user.routines && user.routines[0]) {
      setRoutineDay(user.routines[0].days.map((d) => d.id))
    }
  }, [isLoading, user])

  return (
    <div className="w-full flex-1 grid grid-cols-7 grid-rows-7">
      {month.map((row: any[], i: React.Key) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay
              date={date}
              day={day}
              key={idx}
              rowIdx={i}
              routineDay={routineDay ?? []}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
export default CalendarMonth
