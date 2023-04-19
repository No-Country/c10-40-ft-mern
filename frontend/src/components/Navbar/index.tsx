import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from 'hooks/useUser'
import {
  AiFillCloseCircle,
  AiOutlineForm,
  AiOutlineMail,
  AiOutlineMenu
} from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsBook, BsPerson } from 'react-icons/bs'

const NavbarResponsive = (): JSX.Element => {
  const { data, error, isLoading } = useUser()
  const [menu, setMenu] = useState(false)

  return (
    <nav className="w-full h-[7vh] flex items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link to="/" className="font-semibold text-xl tracking-tight uppercase">
          <img
            className="h-14 md:pl-10"
            src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-10 text-base md:text-center lg:flex-grow text-primary-100">
        <Link
          to="#"
          className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-transparent hover:text-primary-400 hover:border-primary-400 ease-in duration-300">
          ¿Cómo funciona?
        </Link>
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-transparent hover:text-primary-400 hover:border-primary-400 ease-in duration-300">
          Sobre Nosotros
        </Link>
        <Link
          to="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-transparent hover:text-primary-400 hover:border-primary-400 ease-in duration-300">
          Contacto
        </Link>
      </div>
      <div className="hidden lg:block font-Barlow md:text-center lg:text-end">
        {!isLoading && data ? (
          <Link
            to={'/dashboard'}
            className="block mt-4 lg:inline-block lg:mt-0 p-2 text-white border-b-2 border-transparent hover:text-primary-400 hover:border-primary-400 mr-4 ease-in duration-300">
            {data.firstName.toUpperCase()}
          </Link>
        ) : (
          <div className="flex items-center gap-1">
            <Link
              to="/login"
              className="inline-block text-lg py-2 leading-none text-primary-100 hover:text-primary-400 ease-in duration-200 mt-4 mr-4 lg:mt-0">
              Ingresar
            </Link>
            <Link
              to="/register"
              className="inline-block text-lg px-4 py-2 leading-none font-semibold uppercase bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md mt-4 mr-4 lg:mt-0">
              Registrate
            </Link>
          </div>
        )}
      </div>
      <div className="mx-5 border border-primary-400 p-1 cursor-pointer rounded-lg hover:scale-95 ease-in-out duration-300 lg:hidden">
        <AiOutlineMenu
          className="text-primary-400"
          size={26}
          onClick={() => {
            setMenu(!menu)
          }}
        />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {menu ? (
        <div className="bg-black/40 fixed w-full h-screen z-50 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* Side menu */}
      <div
        className={
          menu
            ? 'fixed top-0 left-0 w-full md:w-1/3 h-screen bg-[#1c212c] z-50 duration-300 pt-6'
            : 'fixed top-0 left-[-200%] w-[300px] h-screen bg-[#1c212c] z-50 duration-300'
        }>
        <AiFillCloseCircle
          size={28}
          className="absolute text-primary-400 right-4 top-6 cursor-pointer hover:scale-105 ease-in duration-200"
          onClick={() => {
            setMenu(!menu)
          }}
        />
        <img
          className="h-14 mx-auto my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />
        <div className="flex flex-col gap-4 mt-14 ">
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div
              className={
                'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
              }>
              <div
                className={`${
                  location.pathname === '/about'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/about"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/about' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-primary-400 dark:fill-gray-600  transition-colors duration-200"
                viewBox="0 0 24 24">
                <BsBook size={24} />
              </svg>

              <span className="font-QuicksandMedium text-lg">
                Como funciona?
              </span>
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
                  location.pathname === '/about'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/about"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/about' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                viewBox="0 0 24 24">
                <HiOutlineUserGroup size={24} />
              </svg>

              <span className="font-QuicksandMedium text-lg">Nosotros</span>
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
                  location.pathname === '/register'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/register"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/register' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                viewBox="0 0 24 24">
                <AiOutlineForm size={24} />
              </svg>

              <span className="font-QuicksandMedium text-lg">Registrate</span>
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
                  location.pathname === '/contact'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            <Link
              to="/contact"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/contact' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                viewBox="0 0 24 24">
                <AiOutlineMail size={24} />
              </svg>

              <span className="font-QuicksandMedium text-lg">Contactanos</span>
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
                  location.pathname === '/login'
                    ? 'bg-primary-400 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-primary-400 transition-all duration-300`}></div>
            </div>
            {!isLoading && data ? (
              <Link
                to="/dashboard"
                onClick={() => {
                  setMenu(!menu)
                }}
                className={`${
                  location.pathname === '/dashboard' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <BsPerson size={24} />
                </svg>

                <span className="font-QuicksandMedium text-lg">Dashboard</span>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => {
                  setMenu(!menu)
                }}
                className={`${
                  location.pathname === '/login' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex justify-center md:justify-start items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
                <svg
                  className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
                  viewBox="0 0 24 24">
                  <FiLogIn size={24} />
                </svg>

                <span className="font-QuicksandMedium text-lg">
                  Inicia Sesion
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarResponsive
