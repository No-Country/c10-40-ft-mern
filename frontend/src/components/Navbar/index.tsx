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
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
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
        <div className="text-sm md:text-center lg:text-end lg:flex-grow text-white">
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
            ¿Cómo funciona?
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
            Nosotros
          </Link>
          {data ? (
            ''
          ) : (
            <Link
              to="/register"
              className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
              Comenzá
            </Link>
          )}

          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 p-2 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
            Contacto
          </Link>
        </div>
        <div className="md:text-center lg:text-end ">
          {!isLoading && data ? (
            <Link
              to={'/dashboard'}
              className="block mt-4 lg:inline-block lg:mt-0 p-2 text-white border-b-2 border-transparent hover:text-green-500 hover:border-green-500 mr-4 ease-in duration-300">
              {data.firstName.toUpperCase()}
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:scale-110 hover:bg-green-400 hover:text-black ease-in duration-200 mt-4 mr-4 lg:mt-0">
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavbarResponsive
