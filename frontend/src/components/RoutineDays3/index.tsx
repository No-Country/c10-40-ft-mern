import { useRoutine } from 'hooks/useRoutine'
import ExerciseCard from 'components/ExerciseCard'
import Loader from 'components/Loader'

const RoutineDays3 = (): JSX.Element => {
  const { data, isLoading } = useRoutine()
  return (
    <>
      {isLoading ? (
        <Loader type={'routine'} />
      ) : (
        <div className="flex flex-col">
          {data?.[1].days.map((dia3: any) => {
            return (
              <div className="flex flex-col" key={dia3.id}>
                <h3 className="text-center font-bold">Día {dia3.day}</h3>
                <div className="flex justify-center">
                  {dia3?.exercises.map((ex: any) => {
                    return (
                      <div className="" key={ex.id}>
                        <ExerciseCard isLoading={isLoading} exercises={ex} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
export default RoutineDays3
