import { JWT_TOKEN } from 'app/constants'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { MdFitnessCenter } from 'react-icons/md'
import { ImCalendar, ImHome3, ImProfile, ImUnlocked } from 'react-icons/im'
import { TfiClose } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from 'hooks/useUser'

const AltSideBar = (): JSX.Element => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const [ad, setAd] = useState(true)
  const { isLoading, hasRoutine } = useUser()

  return (
    <div className="flex w-full lg:w-max justify-between">
      <div className="w-full h-16 flex items-center justify-between cursor-pointer lg:hidden">
        <img
          onClick={() => {
            navigate('/dashboard')
          }}
          className="h-12 mx-4 my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt="logo"
        />
        <div className="border border-primary-400 p-2 cursor-pointer rounded-lg hover:scale-95 ease-in-out duration-300 lg:hidden mr-5">
          <AiOutlineMenu
            size={26}
            className="text-primary-400"
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </div>
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
            ? 'fixed top-0 left-0 w-full sm:w-72 h-screen bg-[#1c212c] z-10 duration-300 pt-6'
            : 'fixed top-0 left-[-200%] w-[300px] h-screen bg-[#1c212c] z-10 duration-300'
        }>
        {/* <AiFillCloseCircle
          size={32}
          color="white"
          className="absolute right-4 top-6 cursor-pointer"
          onClick={() => {
            setMenu(!menu)
            setAd(true)
          }}
        /> */}
        <span className="group absolute flex items-center justify-center bg-transparent p-2.5 rounded-full right-2 top-2 cursor-pointer ease-in duration-200 hover:bg-primary-400 rotate-0 hover:rotate-90">
          <TfiClose
            size={18}
            className="fill-primary-400 group-hover:fill-primary-bg"
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </span>
        <img
          className="h-14 mx-auto my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
          onClick={() => {
            navigate('/')
          }}
        />

        <aside className="md:w-72 bg-[#1c212c] flex flex-col items-center pt-5 pb-2 gap-5">
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
                      ? 'bg-primary-400 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard"
                onClick={() => {
                  setMenu(false)
                }}
                className={`${
                  location.pathname === '/dashboard' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <ImHome3 size={20} />
                </svg>

                <span className="font-QuicksandMedium">Home</span>
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
                      ? 'bg-primary-400 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/schedule"
                onClick={() => {
                  setMenu(false)
                }}
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
                      ? 'bg-primary-400 translate-y-0  transition-all'
                      : 'translate-y-full group-hover:translate-y-0'
                  } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
              </div>
              <Link
                to="/dashboard/profile"
                onClick={() => {
                  setMenu(false)
                }}
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

            {/* logout */}
            <div className="w-full flex items-center gap-x-1.5 group select-none">
              <div
                className={
                  'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
                }>
                <div className="absolute top-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0  bg-red-400/70 transition-all duration-300"></div>
              </div>
              <button
                onClick={() => {
                  Cookies.remove(JWT_TOKEN)
                  navigate('/login')
                }}
                className={`${
                  location.pathname === '/dashboard/logout' ? 'bg-white/10' : ''
                } text-white group-hover:bg-red-400/70 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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

          <div className="mt-5 hover:scale-110 ease-in duration-200">
            {!isLoading && !hasRoutine ? (
              <Link
                onClick={() => {
                  setMenu(false)
                }}
                to="/dashboard/create-routine"
                className="button bg-primary-400/60 hover:bg-primary-400 text-primary-bg px-4 self-start mx-4">
                Crear Rutina
              </Link>
            ) : null}
          </div>
          {ad && (
            <div className="p-4 mx-4 mt-6 rounded-lg bg-[#3b455a]">
              <div className="flex items-center mb-3 justify-between">
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  + Info
                </span>
                <button
                  className="group flex items-center justify-center bg-transparent rounded-full cursor-pointer ease-in duration-200 text-primary-400 hover:text-red-400 rotate-0 hover:-rotate-180 hover:scale-110"
                  onClick={() => {
                    setAd(false)
                  }}>
                  <AiOutlineCloseCircle className="cursor-pointer" size={20} />
                </button>
              </div>
              <p className="mb-3 text-sm text-primary-400 pb-4 border-b-2 ">
                Si estás buscando llevar tu rutina de ejercicios al siguiente
                nivel, queres estar enterado de las ultimas noticias del mundo
                fitness, desde <span className="text-white">Exerci</span>Fy te
                recomendamos gymcompany
              </p>
              <a
                href="https://www.gymcompany.es/blog/"
                target="_blank"
                className="text-sm text-primary-400 underline underline-offset-4 font-medium uppercase text-center cursor-pointer"
                rel="noreferrer">
                Clickea aca para las ultimas noticias de entrenamiento
              </a>
            </div>
          )}
        </aside>
      </div>

      {/* Side Menu en Large screen */}
      <aside className="md:w-72 h-screen bg-[#1c212c] hidden lg:flex flex-col items-center mr-3 pt-5 pb-2 gap-5 ">
        {/* ACA EMPIEZA EL MENÚ! */}
        <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
          <img
            className="h-14 mx-auto my-3"
            src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
            alt=""
            onClick={() => {
              navigate('/')
            }}
          />
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
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
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
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div
              className={
                'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
              }>
              <div
                className={`${
                  location.pathname === '/dashboard/routine'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/dashboard/routine"
              className={`${
                location.pathname === '/dashboard/routine' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600  transition-colors duration-200"
                viewBox="0 0 24 24">
                <MdFitnessCenter size={20} />
              </svg>
              <span>Mis Rutinas</span>
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
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
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
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div
              className={
                'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
              }>
              <div
                className={`${
                  location.pathname === '/dashboard/profile'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/dashboard/profile"
              className={`${
                location.pathname === '/dashboard/profile' ? 'bg-white/10' : ''
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

          {/* logout */}
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div
              className={
                'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
              }>
              <div className="absolute top-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0  bg-red-400/70 transition-all duration-300"></div>
            </div>
            <button
              onClick={() => {
                Cookies.remove(JWT_TOKEN)
                navigate('/login')
              }}
              className={`${
                location.pathname === '/dashboard/logout' ? 'bg-white/10' : ''
              } text-white group-hover:bg-red-400/70 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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

        {!isLoading && !hasRoutine ? (
          <Link
            to="/dashboard/create-routine"
            className="button bg-primary-400/60 hover:bg-primary-400 text-primary-bg px-4 self-start mx-4">
            Crear Rutina
          </Link>
        ) : null}
        {ad && (
          <div className="p-4 mx-4 mt-6 rounded-lg bg-[#3b455a]">
            <div className="flex items-center mb-3 justify-between">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                + Info
              </span>
              <button
                className="group flex items-center justify-center bg-transparent rounded-full cursor-pointer ease-in duration-200 text-primary-400 hover:text-red-400 rotate-0 hover:-rotate-180 hover:scale-110"
                onClick={() => {
                  setAd(false)
                }}>
                <AiOutlineCloseCircle className="cursor-pointer" size={20} />
              </button>
            </div>
            <p className="mb-3 text-sm text-primary-400 pb-4 border-b-2 ">
              Si estás buscando llevar tu rutina de ejercicios al siguiente
              nivel, queres estar enterado de las ultimas noticias del mundo
              fitness, desde <span className="text-white">Exerci</span>Fy te
              recomendamos gymcompany
            </p>
            <a
              href="https://www.gymcompany.es/blog/"
              target="_blank"
              className="text-sm text-primary-400 underline underline-offset-4 font-medium uppercase text-center cursor-pointer"
              rel="noreferrer">
              Clickea aca para las ultimas noticias de entrenamiento
            </a>
          </div>
        )}
      </aside>
    </div>
  )
}

export default AltSideBar
