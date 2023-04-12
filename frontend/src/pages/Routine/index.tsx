import { ExerciseCard } from 'components'
import { useRoutine } from 'hooks/useRoutine'
import { type IBodyPart } from 'app/types'

const Routine = (): JSX.Element => {
  const { data, isLoading, error } = useRoutine()

  const exercise = {
    name: 'Brazos',
    exercises: 'Estiramiento de Codo',
    explanation:
      'Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo. Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo.',
    img: 'https://res.cloudinary.com/dnqmez68n/image/upload/v1680622304/festejo_ieviva.jpg'
  }
  return (
    <>
      {data &&
        data.map((routines: IBodyPart) => (
           <ExerciseCard isLoading={isLoading} key={routines.rutinas[0].name} exercise={routines.rutinas[0]} />
           )
        )}
    </>
  )
}

export default Routine
