import Loader from 'components/Loader'
import { useState } from 'react'
import { type IExercise } from 'app/types'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TfiClose } from 'react-icons/tfi'

interface ExerciseProps {
  exercises: IExercise
  isLoading: boolean
}
const ExerciseCard: React.FC<ExerciseProps> = ({
  exercises,
  isLoading
}: ExerciseProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const { series, bodyPart, repetitions, description, name, imageUrl } =
    exercises
  const [show, setShow] = useState(false)

  return (
    <>
      {isLoading ? (
        <Loader type={'routine'} />
      ) : (
        <div className="relative block overflow-hidden rounded-lg border border-gray-100  min-h-full max-h-96 min-w-full md:max-w-sm">
          {show && (
            <div>
              <TfiClose
                onClick={() => {
                  setShow(!show)
                }}
                size={30}
                className="absolute text-center text-black top-4 right-4 z-20"
              />
              <div className="absolute bg-white w-full h-full">
                <img src={imageUrl} alt={name} />
              </div>
            </div>
          )}
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-300 via-blue-500 to-purple-600"></span>

          <div className="flex justify-between sm:gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {name}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                {bodyPart}
              </p>
            </div>
            {!show && (
              <button
                className=" bg-primary-600 px-4 py-1 rounded-lg hover:scale-105 duration-100 ease-in text-black"
                onClick={() => {
                  setShow(!show)
                }}>
                Mostrar
              </button>
            )}
          </div>
          <div className="mt-4 p-4 sm:px-6 lg:px-8">
            <p className="max-w-[40ch] text-sm text-gray-500">{description}</p>
          </div>

          <div className="mt-6 flex gap-4 sm:gap-6 p-4 sm:px-6 lg:px-8 mb-10">
            <div className="flex flex-col items-center gap-3">
              <div className="text-sm font-medium text-gray-600">
                Repeticiones:
              </div>
              <dd className="text-xs text-primary-500">{repetitions}</dd>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="text-sm font-medium text-gray-600">Series:</div>
              <div className="text-xs text-primary-500">{series}</div>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center">
              <div className="text-sm font-medium text-gray-600">
                Ejercicio:
              </div>
              <div
                className={`${
                  isChecked
                    ? 'bg-primary-600 '
                    : 'bg-secondary-500 hover:scale-105  cursor-pointer'
                } rounded-md font-semibold ease-in duration-200 `}>
                <label
                  className={`${
                    isChecked ? 'cursor-not-allowed w-full ' : ''
                  } flex items-center justify-center py-1 px-4 rounded-md text-sm`}>
                  <input
                    className={`${isChecked ? 'hidden' : ''}`}
                    onChange={() => {
                      setIsChecked(!isChecked)
                    }}
                    type="checkbox"
                    disabled={isChecked}
                    checked={isChecked}
                  />
                  <span className={`${isChecked ? 'line-through' : ''} ml-2 `}>
                    {isChecked ? 'Completado' : 'Incompleto'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ExerciseCard
