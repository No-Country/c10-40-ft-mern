/* eslint-disable react/prop-types */
interface Exercise {
  name: string
  exercises: string
  img: string
}

interface ExerciseProps {
  exercise: Exercise
}
const ExerciseCard: React.FC<ExerciseProps> = ({ exercise }) => {
  const { name, exercises, img } = exercise
  return (
    <div className="flex flex-col p-6 border max-w-lg sm:w-1/3 md:w-1/4 lg:w-auto m-5 bg-gray-700 rounded-lg h-1/2">
      <div className="flex justify-center lg:w-52">
        <img className="rounded-sm" src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-5 pt-6">
        <p className="text-white ">
          Musculo trabajado: <span className="font-semibold">{name}</span>{' '}
        </p>
        <p className="text-white">
          Ejercicio: <span className="font-semibold">{exercises}</span>
        </p>
      </div>
    </div>
  )
}

export default ExerciseCard
