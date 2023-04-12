import Loader from 'components/Loader'
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
    const loading = true
    
  const { name, exercises, img, explanation } = exercise
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
    
    {loading ? (<Loader type={'routine'} />) : ''}
    <div className="flex flex-col p-6 border sm:w-1/3  lg:w-1/5 m-5 bg-[#1c212c] rounded-lg h-fit">
      <div className="flex justify-center">
        <img className="rounded-sm w-auto" src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-5 pt-6">
        <p className="text-white ">
          Musculo trabajado: <span className="font-semibold">{name}</span>{' '}
        </p>
        <p className="text-white">
          Ejercicio: <span className="font-semibold">{exercises}</span>
        </p>
        <p className="text-white mx-auto">Como realizarlo?</p>

        <p className="font-semibold text-white">{explanation}</p>
        <div
          className={`${
            isChecked
              ? 'bg-green-700 '
              : 'bg-[#fb8500] hover:scale-105  cursor-pointer'
          } rounded-md font-semibold ease-in duration-200`}>
          <label
            className={`${
              isChecked ? 'cursor-not-allowed w-full ' : 'text-sm'
            } flex items-center justify-center py-2 px-4 rounded-md`}>
            <input
              onChange={() => {
                setIsChecked(!isChecked)
              }}
              type="checkbox"
              disabled={isChecked}
              className={
                isChecked
                  ? "appearance-none form-checkbox h-5 w-5  text-gray-600 transition  hover:skew-x-1-100 ease-in duration-200 rounded-md cursor-not-allowed bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://th.bing.com/th/id/OIP.yrs3ANXk_pfFmkRnu6Xv2AHaGo?pid=ImgDet&w=860&h=771&rs=1')] bg-center bg-cover"
                  : 'appearance-none form-checkbox h-5 w-5  text-gray-600 transition bg-[#fb5500] focus:ring-red-800 ring-2 hover:scale-105 ease-in duration-200 font-semibold rounded-md cursor-pointer'
              }
              checked={isChecked}
            />
            <span className={`${isChecked ? 'line-through' : ''} ml-2`}>
              {isChecked ? 'Ejercicio Completado' : 'Completar Ejercicio'}
            </span>
          </label>
        </div>
      </div>
    </div>
    </>
  )
}
export default ExerciseCard
