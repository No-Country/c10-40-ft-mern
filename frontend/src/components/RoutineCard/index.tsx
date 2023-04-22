import { type IRoutine } from 'app/types'
import DayDropdown from 'components/DayDropdown'
import { useMutation } from '@tanstack/react-query'
import { addRoutine } from 'utils'
import { sendNotification } from 'utils/sendNotification'
import Loader from 'components/Loader'

const translate: Record<string, string> = {
  '2 days': '2 días',
  '3 days': '3 días',
  '5 days': '5 días'
}

const RoutineCard = ({
  bgImage,
  routine
}: {
  bgImage: string
  routine: IRoutine
}): JSX.Element => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ['userRoutine'],
    mutationFn: addRoutine,
    onSuccess: () => {
      sendNotification('Rutina agregada con éxito!', 'success')
    },
    onError: (error) => {
      console.log(error)
      sendNotification('Error agregando la rutina', 'error')
    }
  })

  return (
    <div className="w-full h-max">
      <div
        className={`w-full h-max rounded-lg flex items-center justify-center cursor-pointer bg-center bg-cover ${bgImage}`}>
        <button
          onClick={() => {
            mutate(routine.id)
          }}
          className="flex flex-col items-center justify-center cursor-pointer w-full h-44 hover:scale-110 ease-in duration-200">
          {isLoading ? (
            <Loader type="spinner" />
          ) : (
            <h2 className="font-Barlow text-primary-100 font-bold text-4xl uppercase">
              {translate[routine.name]}
            </h2>
          )}
        </button>
      </div>
      <div className="w-full h-full flex flex-col gap-2 items-start justify-center py-4">
        {routine.days.map((day, index) => (
          <DayDropdown
            key={day.id}
            day={day}
            days={routine.days.length}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default RoutineCard
