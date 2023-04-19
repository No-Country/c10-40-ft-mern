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
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  console.log(data)

  return (
    <div className="w-full h-[6vh] flex items-center justify-between bg-slate-800">
      <div>
        <img
          onClick={() => {
            navigate('/')
          }}
          className="h-12 mx-4 my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />
      </div>
      <div className="mx-5 border border-green-300 p-1 cursor-pointer rounded-lg hover:scale-95 ease-in-out duration-300 lg:hidden">
        <AiOutlineMenu
          size={26}
          color="white"
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
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#1c212c] z-50 duration-300 pt-6'
            : 'fixed top-0 left-[-200%] w-[300px] h-screen bg-[#1c212c] z-50 duration-300'
        }>
        <AiFillCloseCircle
          size={32}
          color="white"
          className="absolute right-4 top-6 cursor-pointer"
          onClick={() => {
            setMenu(!menu)
          }}
        />
        <img
          className="h-14 mx-auto my-3"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />
        <div className="flex flex-col gap-4 mt-14">
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            <div
              className={
                'w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden'
              }>
              <div
                className={`${
                  location.pathname === '/about'
                    ? 'bg-green-600 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-green-600 transition-all duration-300`}></div>
            </div>
            <Link
              to="/about"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/about' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
              <svg
                className="group-hover:animate-bounce h-5 w-5 group-hover:fill-green-600 dark:fill-gray-600  transition-colors duration-200"
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
                    ? 'bg-green-600 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-green-600 transition-all duration-300`}></div>
            </div>
            <Link
              to="/about"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/about' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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
                    ? 'bg-green-600 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-green-600 transition-all duration-300`}></div>
            </div>
            <Link
              to="/register"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/register' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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
                    ? 'bg-green-600 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-green-600 transition-all duration-300`}></div>
            </div>
            <Link
              to="/contact"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/contact' ? 'bg-white/10' : ''
              } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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
                    ? 'bg-green-600 translate-y-0  transition-all'
                    : 'translate-y-full group-hover:translate-y-0'
                } absolute top-0 left-0 w-full h-full   bg-green-600 transition-all duration-300`}></div>
            </div>
            {!isLoading && data ? (
              <Link
                to="/dashboard"
                onClick={() => {
                  setMenu(!menu)
                }}
                className={`${
                  location.pathname === '/dashboard' ? 'bg-white/10' : ''
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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
                } text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm`}>
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
            <div />
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="hidden md:text-center lg:text-end lg:flex mr-5">
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent text-white hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
          Como Funciona?
        </Link>
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent text-white hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
          Nosotros
        </Link>
        <Link
          to="/register"
          className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent text-white hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
          Registrate
        </Link>
        <Link
          to="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent text-white hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
          Contacto
        </Link>
        {!isLoading && data ? (
          <Link
            to="/dashboard"
            className="block mt-4 lg:inline-block lg:mt-0 p-2 text-white border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
            {data.firstName.toUpperCase()}
          </Link>
        ) : (
          <Link
            to="/login"
            className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent text-white hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
            Iniciar Sesion
          </Link>
        )}
      </div>
    </div>
  )
}

export default NavbarResponsive
