import { ExerciseCard, Loader } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const translate: Record<string, string> = {
  '2 days': '2 días',
  '3 days': '3 días',
  '5 days': '5 días'
}

const Routine = (): JSX.Element => {
  const { user, isLoading, hasRoutine } = useUser()
  const [openDays, setOpenDays] = useState<boolean[]>([])

  const handleDayClick = (index: number): void => {
    setOpenDays((prevOpenDays) => {
      const newOpenDays = [...prevOpenDays]
      newOpenDays[index] = !newOpenDays[index]
      return newOpenDays
    })
  }

  useEffect(() => {
    if (!isLoading && user?.routines && user.routines.length) {
      setOpenDays(() => new Array(user?.routines?.length).fill(true))
    }
  }, [isLoading, user?.routines?.length])

  if (isLoading) {
    return <Loader type="spinner" />
  }

  return (
    <div className="w-full h-max">
      {!hasRoutine ? (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 text-center">
            Por el momento no tenés rutinas por hacer.
          </h2>
          <Link
            to="/dashboard/create-routine"
            className="button bg-primary-400/60 hover:bg-primary-400 text-primary-bg px-6">
            Nueva Rutina
          </Link>
        </div>
      ) : user?.routines ? (
        <div>
          <h2 className="font-Barlow font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase border-b-2 border-primary-400/60 py-2">
            Rutina: {translate[user.routines[0].name]}
          </h2>
          {user?.routines[0].days.map((day, index) => (
            <div key={day.id} className="w-full flex flex-col mt-4 gap-4">
              <h3
                onClick={() => {
                  handleDayClick(index)
                }}
                className="flex items-center justify-between font-WS px-4 py-4 bg-primary-100/10 text-primary-100 text-sm md:text-base lg:text-xl xl:text-2xl font-semibold cursor-pointer hover:bg-primary-100/20 rounded-md transition-all">
                Día {index + 1}
                <IoIosArrowDown
                  className={`text-primary-400 transition-all ${
                    openDays[index] ? 'rotate-180' : 'rotate-0'
                  }`}
                  size={24}
                />
              </h3>
              <div
                className={`flex flex-col gap-4 max-h-0 transition-all overflow-y-auto ${
                  openDays[index] ? 'max-h-[1000px] opacity-1' : ''
                }`}>
                {day.exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercises={exercise} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Routine
