import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from 'hooks/useUser'

const NavbarResponsive = (): JSX.Element => {
  const { data, error, isLoading } = useUser()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }
  const menuClasses = `w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
    isMenuOpen ? '' : 'hidden'
  }`
  return (
    <nav className="w-full flex items-center justify-between flex-wrap p-6 font-Barlow">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link to="/" className="font-semibold text-xl tracking-tight uppercase">
          <img
            className="h-14 pl-10"
            src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
            alt=""
          />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black"
          onClick={toggleMenu}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={menuClasses}>
        <div className="flex justify-center items-center gap-10 text-base lg:text-xl md:text-center lg:flex-grow text-primary-100">
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
      </div>
      <div className="font-Barlow md:text-center lg:text-end">
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
    </nav>
  )
}

export default NavbarResponsive
