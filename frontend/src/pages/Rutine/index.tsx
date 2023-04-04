import { ExerciseCard, SideBarMenu } from 'components'

const Rutine: React.FC = () => {
  const exercise = {
    name: 'Brazos',
    exercises: 'Estiramiento de Codo',
    img: 'https://res.cloudinary.com/dnqmez68n/image/upload/v1680622304/festejo_ieviva.jpg'
  }
  return (
    <div className="flex justify-start h-[89vh] max-w-screen">
      <SideBarMenu />
      <ExerciseCard exercise={exercise} />
    </div>
  )
}

export default Rutine
