import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const C = (): JSX.Element => {
  return (
    <div className="flex flex-col p-5 h-[89vh] items-center justify-center max-w-md m-auto">
      <p className="bg-gradient-to-br from-[#fb8500] to-black/80 text-transparent bg-clip-text font-bold text-5xl text-center">
        404 Page not Found
      </p>
      <img
        src="https://res.cloudinary.com/dnqmez68n/image/upload/v1680705785/gim404_afhiwc.png"
        alt="gim-404"
      />
      <Link
        to="/"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#fb8500] to-black/80 hover:text-white  focus:ring-4 focus:outline-none">
        <span className="relative flex gap-3 items-center px-5 py-2.5 transition-all ease-in duration-200 bg-gray-200 rounded-md group-hover:bg-opacity-0">
          <FaHome size={20} />
          Back to Home
        </span>
      </Link>
    </div>
  )
}
export default C
