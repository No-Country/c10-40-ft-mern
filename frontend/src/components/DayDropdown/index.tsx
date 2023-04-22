import { type IDay } from 'app/types'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface Props {
  day: IDay
  days: number
  index: number
}

const DayDropdown = ({ day, days, index }: Props): JSX.Element => {
  const [openDays, setOpenDays] = useState(() => new Array(days).fill(false))

  const handleDayClick = (index: number): void => {
    setOpenDays((prevOpenDays) => {
      const newOpenDays = [...prevOpenDays]
      newOpenDays[index] = !newOpenDays[index]
      return newOpenDays
    })
  }

  return (
    <div key={day.id} className="w-full">
      <h4 className="flex items-center justify-between font-Barlow font-semibold my-2 text-2xl uppercase border-b-2 border-primary-400/60">
        <span>{day.day}</span>
        <IoIosArrowDown
          className={`text-primary-400 transition-all ${
            openDays[index] ? 'rotate-180' : 'rotate-0'
          }`}
          size={24}
          onClick={() => {
            handleDayClick(index)
          }}
        />
      </h4>
      <ul
        className={`flex flex-col gap-4 max-h-0 transition-all overflow-y-auto ${
          openDays[index] ? 'max-h-44 opacity-1' : ''
        }`}>
        {day.exercises.map((exercise) => (
          <li key={exercise.id} className="block">
            <div className="w-full flex flex-col">
              <h5 className="font-semibold text-lg">{exercise.name}</h5>
              <span className="text-xs text-primary-100/60">
                {exercise.bodyPart}
              </span>
            </div>
            <p className="text-sm mt-3 text-primary-100/60">
              {exercise.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DayDropdown
