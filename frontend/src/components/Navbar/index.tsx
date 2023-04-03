import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full px-16 py-6 flex justify-between items-center shadow-sm bg-white">
      <Link to="/" className="font-bold text-xl uppercase">
        Logo
      </Link>
      <div className="flex gap-12">
        <ul className="flex justify-center items-center gap-12">
          <li className="text-base cursor-pointer">
            <Link to="#">¿Cómo funciona?</Link>
          </li>
          <li className="text-base cursor-pointer">
            <Link to="/about">Nosotros</Link>
          </li>
          <li className="text-base cursor-pointer">
            <Link to="/register">Comenzá</Link>
          </li>
          <li className="text-base cursor-pointer">
            <Link to="#">Contactanos</Link>
          </li>
        </ul>
        <Link
          to="/login"
          className="flex items-center justify-center bg-gray-200 text-center font-medium shadow-lg rounded-3xl uppercase w-28 h-12 2xl:text-xl 2xl:w-36 2xl:h-16">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

const NavbarResponsive = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/explicit-function-return-type
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }
  const menuClasses = `w-full block flex-grow  lg:flex lg:items-center lg:w-auto ${
    isMenuOpen ? '' : 'hidden'
  }`
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#fb8500] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight uppercase">
          POWER PLAY
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
        <div className="text-sm md:text-center lg:text-end lg:flex-grow">
          <Link
            to="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            ¿Cómo funciona?
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            Nosotros
          </Link>
          <Link
            to="/register"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            Comenzá
          </Link>
        </div>
        <div className="md:text-center lg:text-end">
          <Link
            to="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 mr-4 lg:mt-0">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  )
}

export { NavbarResponsive }
