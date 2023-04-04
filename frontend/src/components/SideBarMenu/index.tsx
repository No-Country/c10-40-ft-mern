// import { SiBookmeter } from 'react-icons/si'
import {
  ImStatsBars,
  ImHome3,
  ImCalendar,
  ImProfile,
  ImNotification,
  ImUnlocked,
  ImHourGlass
} from 'react-icons/im'
import { Link, useLocation } from 'react-router-dom'

const SideBarMenu = (): JSX.Element => {
  const location = useLocation()
  return (
    <aside className="w-72 bg-[#1c212c] flex flex-col items-center pt-5 pb-2">
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
          </div>
          <Link
            to="/dashboard"
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
          </div>
          <Link
            to="/dashboard/summary"
            className={`${
              location.pathname === '/dashboard/summary' ? 'bg-white/10' : ''
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
          </div>
          <Link
            to="/dashboard/schedule"
            className={`${
              location.pathname === '/dashboard/schedule' ? 'bg-white/10' : ''
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
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
              } absolute top-0 left-0 w-full h-[102%]   bg-red-600 transition-all duration-300`}></div>
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
            <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0  bg-red-600 transition-all duration-300"></div>
          </div>
          <Link
            to="/dashboard/logout"
            className={`${
              location.pathname === '/dashboard/logout' ? 'bg-white/10' : ''
            } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
            <svg
              className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
              viewBox="0 0 24 24">
              <ImUnlocked size={20} />
            </svg>

            <span className="font-QuicksandMedium">Log Out</span>
          </Link>
          <div />
        </div>
      </div>
    </aside>
  )
}

export default SideBarMenu
