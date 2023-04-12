import { ExerciseCard, SideBarMenu } from 'components'

const Routine = (): JSX.Element => {
  const exercise = {
    name: 'Brazos',
    exercises: 'Estiramiento de Codo',
    explanation:
      'Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo. Se hace asi, de la siguiente, manera, solo estoy escribiendo para llegar a tener un texto largo.',
    img: 'https://res.cloudinary.com/dnqmez68n/image/upload/v1680622304/festejo_ieviva.jpg'
  }
  return (
    <div className="flex justify-start h-screen max-w-screen">
      <SideBarMenu />
      <ExerciseCard exercise={exercise} />
    </div>
  )
}

export default Routine
