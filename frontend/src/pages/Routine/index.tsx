/* eslint-disable array-callback-return */
import { ExerciseCard, Loader } from 'components'
import { useRoutines } from 'hooks/useRoutine'
// import { type IBodyPart } from 'app/types'

const Routine = (): JSX.Element => {
  const { data, isLoading, error } = useRoutines()
  return (
    <>
      {isLoading && (
        <>
          <Loader type={'routine'} />
          <Loader type={'routine'} />
          <Loader type={'routine'} />
          <Loader type={'routine'} />
          <Loader type={'routine'} />
        </>
      )}
      {data?.[2].days.map((dia3: any) => {
        return dia3?.exercises.map((ex: any) => (
          <ExerciseCard key={ex.id} isLoading={isLoading} exercises={ex} />
        ))
      })}
    </>
  )
}

export default Routine
