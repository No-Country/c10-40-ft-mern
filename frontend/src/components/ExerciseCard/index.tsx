import Loader from 'components/Loader'
import { useState } from 'react'
import { type IExercise } from 'app/types'

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

  return (
    <>
      {isLoading ? (
        <Loader type={'routine'} />
      ) : (
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 min-h-full max-h-96 min-w-full md:max-w-sm">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-300 via-blue-500 to-purple-600"></span>

          <div className="flex justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {name}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                {bodyPart}
              </p>
            </div>

            <div className="sm:block sm:shrink-0">
              <img
                alt={name}
                src={imageUrl}
                className="h-16 w-16 rounded-lg object-cover shadow-sm hover:scale-[4] hover:-translate-x-[180%] hover:translate-y-[140%] duration-200 ease-in"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">{description}</p>
          </div>

          <div className="mt-6 flex gap-4 sm:gap-6">
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
