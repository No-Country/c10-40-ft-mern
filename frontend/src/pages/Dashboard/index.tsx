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

const Dashboard = (): JSX.Element => {
  return (
    <aside className="w-72 bg-[#1c212c] min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7">
      {/* ACA EMPIEZA EL MENÚ! */}
      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
          Menu
        </div>
        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/dashboard"
            className="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImHome3 size={20} />
            </svg>

            <span className="font-QuicksandMedium">Home</span>
          </Link>
          <div />
        </div>
        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>

          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImHome3 size={20} />
            </svg>

            <span className="font-QuicksandMedium">
              Resumen semanal de ejercicios
            </span>
          </Link>
          <div />
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImStatsBars size={20} />
            </svg>

            <span className="font-QuicksandMedium">Estadisticas</span>
          </Link>
          <div />
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImCalendar size={20} />
            </svg>

            <span className="font-QuicksandMedium">Schedule</span>
          </Link>
          <div />
        </div>
      </div>

      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
          Profile
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImNotification size={20} />
            </svg>

            <span className="font-QuicksandMedium">Notificaciones</span>
          </Link>
          <div />
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImProfile size={20} />
            </svg>

            <span className="font-QuicksandMedium">Configuracion</span>
          </Link>
          <div />
        </div>

        <div className="w-full flex items-center gap-x-1.5 group select-none">
          <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/"
            className="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
            <svg
              className="h-5 w-5 !fill-red-500 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImUnlocked size={20} />
            </svg>
            <span className="font-QuicksandMedium">Log out</span>
          </Link>
          <div />
        </div>

        {/* ACA EMPIEZAN LAS CARDS! */}
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
              <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
                STATS
              </div>
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
      </div>
    </aside>
  )
}
export default Dashboard
