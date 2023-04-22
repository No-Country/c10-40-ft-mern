import { useState } from 'react'
import { useRoutines } from 'hooks/useRoutine'
import ExerciseCard from 'components/ExerciseCard'
import Loader from 'components/Loader'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

const RoutineDays3 = (): JSX.Element => {
  const { data, isLoading } = useRoutines()
  const [currentDay, setCurrentDay] = useState(-1)

  return (
    <>
      {isLoading ? (
        <Loader type={'routine'} />
      ) : (
        <div className="flex flex-col">
          {data?.[1].days.map((dia3: any, index: number) => {
            return (
              <div className="flex flex-col " key={dia3.id}>
                <div className="flex items-center md:justify-center max-w-lg">
                  <p className="font-semibold text-2xl mx-5 py-5">
                    Día {dia3.day}
                  </p>
                  {currentDay === index ? (
                    <AiOutlineClose
                      className="text-primary-400 ml-5"
                      size={24}
                      onClick={() => {
                        setCurrentDay(-1)
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="text-primary-400 ml-5"
                      size={30}
                      onClick={() => {
                        setCurrentDay(index)
                      }}
                    />
                  )}
                </div>
                {currentDay === index && (
                  <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:mx-auto justify-center gap-5">
                    {dia3?.exercises.map((ex: any) => {
                      return (
                        <ExerciseCard
                          isLoading={isLoading}
                          exercises={ex}
                          key={ex.id}
                        />
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default RoutineDays3
