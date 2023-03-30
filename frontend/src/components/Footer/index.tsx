import { Link } from 'react-router-dom'

const Footer = (): JSX.Element => {
  return (
    <footer className="w-full border border-red-500 h-full bottom-0">
      <div>
        <ul>
          <li className="underline text-blue-400 cursor-pointer">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="underline text-blue-400 cursor-pointer">
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </div>
      <div className="w-full py-4 text-center">
        <p>
          &#169; {new Date().getFullYear()}.<span> Workout Tracker</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
