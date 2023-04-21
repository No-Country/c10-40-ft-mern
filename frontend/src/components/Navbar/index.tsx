import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AiOutlineForm, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsBook, BsPerson } from 'react-icons/bs'
import { useAuth } from 'hooks/useAuth'

const NavbarResponsive = (): JSX.Element => {
  const { isAuthenticated, isLoading } = useAuth()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [show, setShow] = useState(true)
  const [menu, setMenu] = useState(false)

  const controlNavbar = (): void => {
    if (window) {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])
  return (
    <nav
      className={`w-full top-0 bg-primary-bg/90 backdrop-blur sticky flex z-20 items-center justify-between py-5 px-8 md:px-10 transition-all ${
        lastScrollY !== 0 ? 'shadow-lg' : 'shadow-none'
      } ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center flex-shrink-0 text-white">
        <Link to="/" className="font-semibold text-xl">
          <img
            className="h-14"
            src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
            alt=""
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-8 text-base md:text-center lg:flex-grow text-primary-100">
        <Link
          to="/"
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
        {!isLoading && isAuthenticated ? (
          <Link
            to={'/dashboard'}
            className="inline-block text-lg px-4 py-2 leading-none font-semibold uppercase bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md lg:mt-0">
            Ir al Dashboard
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
              className="inline-block text-lg px-4 py-2 leading-none font-semibold uppercase bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md lg:mt-0">
              Registrate
            </Link>
          </div>
        )}
      </div>
      <div className="border border-primary-400 p-2 cursor-pointer rounded-lg hover:scale-95 ease-in-out duration-300 lg:hidden">
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
            ? 'fixed top-0 left-0 w-full md:w-1/3 h-screen bg-primary-bg z-50 duration-300 flex flex-col items-center justify-center'
            : 'fixed top-0 left-[-200%] w-[300px] h-screen bg-primary-bg z-50 duration-300'
        }>
        <span className="group absolute flex items-center justify-center bg-transparent p-2.5 rounded-full right-6 top-6 cursor-pointer ease-in duration-200 hover:bg-primary-400 rotate-0 hover:rotate-90">
          <TfiClose
            size={24}
            className="fill-primary-400 group-hover:fill-primary-bg"
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </span>
        <img
          className="h-14 absolute top-16"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt=""
        />

        <div className="flex flex-col font-Barlow uppercase font-medium text-2xl gap-6">
          <div className="w-full flex items-center justify-center group select-none">
            <Link
              to="/"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/'
                  ? 'text-primary-400'
                  : 'text-primary-100'
              } flex items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
              <BsBook size={24} />
              <span
                className={`${
                  location.pathname === '/'
                    ? 'border-b-2 border-primary-400'
                    : 'border-b-2 border-transparent '
                } flex items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                Inicio
              </span>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center group select-none">
            <Link
              to="/about"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/about'
                  ? 'text-primary-400'
                  : 'text-primary-100'
              } flex items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
              <HiOutlineUserGroup size={24} />
              <span
                className={`${
                  location.pathname === '/about'
                    ? 'border-b-2 border-primary-400'
                    : 'border-b-2 border-transparent '
                } flex items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                Nosotros
              </span>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center group select-none">
            <Link
              to="/contact"
              onClick={() => {
                setMenu(!menu)
              }}
              className={`${
                location.pathname === '/contact'
                  ? 'text-primary-400'
                  : 'text-primary-100'
              } flex items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
              <AiOutlineMail size={24} />
              <span
                className={`${
                  location.pathname === '/contact'
                    ? 'border-b-2 border-primary-400'
                    : 'border-b-2 border-transparent '
                } flex items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                Contacto
              </span>
            </Link>
          </div>
          <div className="w-full flex items-center gap-x-1.5 group select-none">
            {!isLoading && isAuthenticated ? (
              <Link
                to="/dashboard"
                onClick={() => {
                  setMenu(!menu)
                }}
                className={
                  'flex text-primary-100 items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300'
                }>
                <BsPerson size={24} />

                <span className="flex border-b-2 border-transparent items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300">
                  Dashboard
                </span>
              </Link>
            ) : (
              <div className="w-full flex flex-col gap-6 items-center justify-center group select-none">
                <Link
                  to="/login"
                  onClick={() => {
                    setMenu(!menu)
                  }}
                  className={`${
                    location.pathname === '/login'
                      ? 'text-primary-400'
                      : 'text-primary-100'
                  } flex items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                  <FiLogIn size={24} />
                  <span
                    className={`${
                      location.pathname === '/login'
                        ? 'border-b-2 border-primary-400'
                        : 'border-b-2 border-transparent '
                    } flex items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                    Iniciar sesión
                  </span>
                </Link>
                <Link
                  to="/register"
                  onClick={() => {
                    setMenu(!menu)
                  }}
                  className={`${
                    location.pathname === '/register'
                      ? 'text-primary-400'
                      : 'text-primary-100'
                  } flex items-center gap-3 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                  <AiOutlineForm size={24} />
                  <span
                    className={`${
                      location.pathname === '/register'
                        ? 'border-b-2 border-primary-400'
                        : 'border-b-2 border-transparent '
                    } flex items-center gap-2 hover:text-primary-400 hover:border-primary-400 ease-in duration-300`}>
                    Registrate
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarResponsive
