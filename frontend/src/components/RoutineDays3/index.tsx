import { useState } from 'react'
import { useRoutine } from 'hooks/useRoutine'
import ExerciseCard from 'components/ExerciseCard'
import Loader from 'components/Loader'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const RoutineDays3 = (): JSX.Element => {
  const { data, isLoading } = useRoutine()
  return (
    <>
      {isLoading ? (
        <Loader type={'routine'} />
      ) : (
        <div className="flex flex-col">
          {data?.[1].days.map((dia3: any) => {
            const [showRut, setShowRut] = useState(false)

            return (
              <div className="flex flex-col " key={dia3.id}>
                <div className="flex items-center md:justify-center mx-5 w-72">
                  <p className="font-semibold text-2xl py-5 w-full">
                    Día {dia3.day}
                  </p>
                  {showRut ? (
                    <AiOutlineClose
                      className="text-primary-400 ml-5"
                      size={24}
                      onClick={() => {
                        setShowRut(!showRut)
                      }}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="text-primary-400 ml-5"
                      size={30}
                      onClick={() => {
                        setShowRut(!showRut)
                      }}
                    />
                  )}
                </div>
                {showRut && (
                  <div className="grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 md:mx-auto justify-center gap-5">
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
