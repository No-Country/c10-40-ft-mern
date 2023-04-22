import { useState } from 'react'
import { type IExercise } from 'app/types'

interface ExerciseProps {
  exercises: IExercise
}
const ExerciseCard: React.FC<ExerciseProps> = ({
  exercises
}: ExerciseProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const { series, bodyPart, repetitions, description, name, imageUrl } =
    exercises

  return (
    <div className="w-full flex items-center flex-col-reverse md:flex-row relative overflow-hidden rounded-lg border border-gray-100">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-300 via-blue-500 to-purple-600"></span>

      <div className="w-full h-2/4 md:w-2/4 flex flex-col gap-4 justify-between py-6 md:py-8 px-6">
        <div>
          <h3 className="text-2xl font-semibold text-primary-100">{name}</h3>
          <p className="text-xs font-medium text-gray-600">{bodyPart}</p>
        </div>
        <p className="max-w-[40ch] text-sm text-gray-500">{description}</p>

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-medium text-gray-600">
              Repeticiones
            </div>
            <dd className="text-xs text-primary-500">{repetitions}</dd>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-sm font-medium text-gray-600">Series</div>
            <div className="text-xs text-primary-500">{series}</div>
          </div>
          <div className="flex flex-col items-center gap-1 justify-center">
            <div className="text-sm font-medium text-gray-600">Ejercicio</div>
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
      <img
        alt={name}
        src={imageUrl}
        className="w-full h-2/4 md:w-2/4 aspect-auto object-cover shadow-sm"
      />
    </div>
  )
}
export default ExerciseCard
