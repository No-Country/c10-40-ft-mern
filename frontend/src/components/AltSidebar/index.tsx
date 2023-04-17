import { JWT_TOKEN } from 'app/constants'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {
  ImCalendar,
  ImHome3,
  ImHourGlass,
  ImNotification,
  ImProfile,
  ImStatsBars,
  ImUnlocked
} from 'react-icons/im'
import { Link } from 'react-router-dom'

const AltSideBar = (): JSX.Element => {
  const [menu, setMenu] = useState(false)
  console.log(menu)

  return (
    <div>
      <div
        className="absolute cursor-pointer my-6 mx-4"
        onClick={() => {
          setMenu(!menu)
        }}>
        <AiOutlineMenu size={30} color="white" />
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {menu ? (
        <div className="bg-black/40 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* Side menu */}
      <div
        className={
          menu
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#1c212c] z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[#1c212c] z-10 duration-300'
        }>
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setMenu(!menu)
          }}
        />
        <img
          className="h-14 mx-auto my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />
        <aside className="w-28 md:w-72 bg-[#1c212c] flex flex-col items-center pt-5 pb-2 gap-5">
          {/* ACA EMPIEZA EL MENÚ! */}
          <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
            <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-[11px] uppercase">
              Menu
            </div>
            {/* home */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard"
                onClick={() => {
                  setMenu(!menu)
                }}
                className={`${
                  location.pathname === '/dashboard' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImHome3 size={20} />
                </svg>

                <span className="font-QuicksandMedium">Home</span>
              </Link>
              <div />
            </div>
            {/* resumen */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/summary'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/summary"
                className={`${
                  location.pathname === '/dashboard/summary'
                    ? 'bg-white/10'
                    : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImHourGlass size={20} />
                </svg>

                <span className="font-QuicksandMedium">
                  Resumen semanal de ejercicios
                </span>
              </Link>
              <div />
            </div>
            {/* stats */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/stats'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/stats"
                className={`${
                  location.pathname === '/dashboard/stats' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImStatsBars size={20} />
                </svg>

                <span className="font-QuicksandMedium">Estadisticas</span>
              </Link>
              <div />
            </div>
            {/* schedule */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/schedule'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/schedule"
                className={`${
                  location.pathname === '/dashboard/schedule'
                    ? 'bg-white/10'
                    : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
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
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/profile'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/profile"
                className={`${
                  location.pathname === '/dashboard/profile'
                    ? 'bg-white/10'
                    : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImProfile size={20} />
                </svg>

                <span className="font-QuicksandMedium">Profile</span>
              </Link>
              <div />
            </div>
            {/* notifications */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/notifications'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/notifications"
                className={`${
                  location.pathname === '/dashboard/notifications'
                    ? 'bg-white/10'
                    : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImNotification size={20} />
                </svg>

                <span className="font-QuicksandMedium">Notificaciones</span>
              </Link>
              <div />
            </div>
            {/* configuration */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div
                  className={`${
                    location.pathname === '/dashboard/config'
                      ? 'bg-red-600 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-red-600 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/config"
                className={`${
                  location.pathname === '/dashboard/config' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImProfile size={20} />
                </svg>

                <span className="font-QuicksandMedium">Configuracion</span>
              </Link>
              <div />
            </div>
            {/* logout */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div className="absolute top-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0  bg-red-600 transition-all duration-300"></div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem(JWT_TOKEN)
                  window.location.reload()
                }}
                className={`${
                  location.pathname === '/dashboard/logout' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImUnlocked size={20} />
                </svg>

                <span className="font-QuicksandMedium">Log Out</span>
              </button>
              <div />
            </div>
          </div>

          <div className="mt-5">
            <Link
              to="/dashboard/createrutine"
              className="bg-[#0dff00] py-2 px-4 rounded-md font-semibold hover:scale-105 ease-in duration-200">
              Crear Rutina
            </Link>
          </div>
          <div
            id="dropdown-cta"
            className="p-4 mx-4 mt-6 rounded-lg bg-[#3b455a]"
            role="alert">
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Pro
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close">
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-green-500">
              Si estás buscando llevar tu rutina de ejercicios al siguiente
              nivel y obtener resultados significativos en tu salud y estado
              físico, te recomiendo que te suscribas a Pro en{' '}
              <span className="text-white">Exerci</span>Fy
            </p>
            <p className="text-sm text-green-600 underline font-medium uppercase text-center">
              Hacete PRO y ponete como un toro
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default AltSideBar
