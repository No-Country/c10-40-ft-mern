import { SiBookmeter } from 'react-icons/si'

const Dashboard = (): JSX.Element => {
  return (
    <div className="p-6 justify-center w-auto lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
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
      <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
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
      <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
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
      <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
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
        <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white">
          <div className="mb-8">
            <div className=" p-2 text-gray-900 font-bold text-l mb-2">
              Mi cuenta
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 p-6">
        <div className="lg:w-10 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white">
          <div className="mb-8">
            <div className=" p-2 text-gray-900 font-bold text-l mb-2">
              Mis amigos
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 p-6">
        <div className="lg:w-10 flex-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="rounded-xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white">
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
export default Dashboard
