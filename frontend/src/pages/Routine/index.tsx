import { ExerciseCard, Loader } from 'components'
import { useRoutine } from 'hooks/useRoutine'
// import { type IBodyPart } from 'app/types'

const Routine = (): JSX.Element => {
  const { data, isLoading, error } = useRoutine()

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
      {data?.[0].rutinas.map((rut: any) => (
        // eslint-disable-next-line react/jsx-key
        <ExerciseCard isLoading={isLoading} exercise={rut} />
      ))}
    </>
  )
}

export default Routine
