import { type IRoutine } from 'app/types'
import { Link } from 'react-router-dom'

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
  return (
    <div
      className={`w-full h-max rounded-lg flex items-center justify-center cursor-pointer bg-cover ${bgImage}`}>
      <Link
        to="/dashboard/routinedays5"
        className="flex flex-col items-center justify-center cursor-pointer w-full h-44 hover:scale-110 ease-in duration-200">
        <h2 className="font-Barlow text-primary-100 font-bold text-4xl uppercase">
          {translate[routine.name]}
        </h2>
      </Link>
    </div>
  )
}

export default RoutineCard
