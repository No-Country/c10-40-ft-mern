import { Link } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full px-16 py-6 flex justify-between items-center shadow-sm bg-white h-[8vh]">
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
