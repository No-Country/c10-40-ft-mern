import { SiBookmeter } from 'react-icons/si'
import {
  ImStatsBars,
  ImHome3,
  ImCalendar,
  ImProfile,
  ImNotification,
  ImUnlocked
} from 'react-icons/im'
import { Link } from 'react-router-dom'

const Cards = (): JSX.Element => {
  return (
    <div className="flex h-auto w-auto p-6 justify-center lg:flex mt-auto ml-96 mr-auto">
      <div className="h-48 lg:h-auto lg:w-48 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="rounded-xl bg-white p-4">
        <div className="mb-8">
          <SiBookmeter size={10} />
          <p className="text-sm text-gray-600 flex items-center">
            Workout Tracker
          </p>
          <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
            Resumen semanal de ejercicios
          </div>
          <p className="text-gray-700 text-base">
            Aca van los ejercicios que hiciste
          </p>
        </div>
      </div>
      <div className="h-48 lg:h-auto lg:w-48 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="rounded-xl bg-white p-4">
        <div className="mb-8">
          <SiBookmeter size={10} />
          <p className="text-sm text-gray-600 flex items-center">
            Workout Tracker
          </p>
          <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
            Resumen semanal de grupos musculares trabajados
          </div>
          <p className="text-gray-700 text-base">
            Aca van los ejercicios que trabajaste
          </p>
        </div>
      </div>
      <div className="h-48 lg:h-auto lg:w-48 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="rounded-xl bg-white p-4">
        <div className="mb-8">
          <SiBookmeter size={10} />
          <p className="text-sm text-gray-600 flex items-center">
            Workout Tracker
          </p>
          <div className=" p-2 text-gray-900 font-bold text-xl mb-2">STATS</div>
          <p className="text-gray-700 text-base">Aca van los stats</p>
        </div>
      </div>
      <div className="h-48 lg:h-auto lg:w-48 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="rounded-xl bg-white p-4">
        <div className="mb-8">
          <SiBookmeter size={10} />
          <p className="text-sm text-gray-600 flex items-center">
            Workout Tracker
          </p>
          <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
            Schedule
          </div>
          <p className="text-gray-700 text-base">Aca van el calendario</p>
        </div>
      </div>
      <div className="h-1 p-6">
        <div className="lg:w-10 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="rounded-xl bg-white p-4">
          <div className="mb-8">
            <div className=" p-2 text-gray-900 font-bold text-l mb-2">
              Mi cuenta
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 p-6">
        <div className="lg:w-10 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="rounded-xl bg-white p-4">
          <div className="mb-8">
            <div className=" p-2 text-gray-900 font-bold text-l mb-2">
              Mis amigos
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 p-6">
        <div className="lg:w-10 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="rounded-xl bg-white p-4">
          <div className="mb-8">
            <div className=" p-2 text-gray-900 font-bold text-l mb-2">
              Notificaciones
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards
