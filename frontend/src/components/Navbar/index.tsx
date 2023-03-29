import { Link } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full border border-red-500 px-4 py-6 flex justify-between items-center">
      <div className="font-bold text-1xl">Logo</div>
      <ul className="flex justify-center items-center gap-4">
        <li className="underline text-blue-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="underline text-blue-400 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
