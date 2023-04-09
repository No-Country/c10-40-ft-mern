import { useState } from 'react'
/* eslint-disable react/prop-types */
interface Exercise {
  name: string
  exercises: string
  img: string
  explanation: string
}

interface ExerciseProps {
  exercise: Exercise
}
const ExerciseCard: React.FC<ExerciseProps> = ({ exercise }) => {
  const { name, exercises, img, explanation } = exercise
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="flex flex-col p-6 border max-w-lg sm:w-1/3 md:w-1/4 lg:w-auto m-5 bg-[#1c212c] rounded-lg h-fit">
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
        <p className="text-white">
          Como realizarlo? <span className="font-semibold">{explanation}</span>
        </p>
        <div className="bg-[#fb8500] py-2 px-4 rounded-md font-semibold hover:scale-105 ease-in duration-200 cursor-pointer">
          <label className="inline-flex items-center">
            <input
              onChange={() => {
                setIsChecked(!isChecked)
              }}
              type="checkbox"
              className="appearance-none form-checkbox h-5 w-5 text-gray-600 transition bg-[#fb5500] checked:bg-green-500 focus:ring-red-800 ring-2 hover:scale-105 ease-in duration-200 font-semibold rounded-md cursor-pointer"
              checked={isChecked}
            />
            <span className="ml-2">
              {isChecked ? 'Ejercicio Completado' : 'Completar Ejercicio'}
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
export default ExerciseCard
