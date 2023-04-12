import { ExerciseCard } from 'components'

const Routine = (): JSX.Element => {
  const exercise = {
    name: 'Brazos',
    exercises: 'Estiramiento de Codo',
    explanation:
      'Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo. Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo.',
    img: 'https://res.cloudinary.com/dnqmez68n/image/upload/v1680622304/festejo_ieviva.jpg'
  }
  return (
      <ExerciseCard exercise={exercise} />
  )
}

export default Routine
