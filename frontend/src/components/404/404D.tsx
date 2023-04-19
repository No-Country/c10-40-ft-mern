import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
const D = (): JSX.Element => {
  return (
    <div className="flex flex-col p-5 h-[91vh] items-center justify-center max-w-md m-auto">
      <img
        src="https://res.cloudinary.com/dnqmez68n/image/upload/v1680707354/404_pjo2fv.png"
        alt="gim-404"
        className="mb-5"
      />
      <p className="text-[#fb8500] font-bold text-5xl text-center mb-5">
        Page not Found
      </p>
      <Link
        to="/"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#fb8500] hover:text-white  focus:ring-4 focus:outline-none">
        <span className="relative flex gap-3 items-center px-5 py-2.5 transition-all ease-in duration-200 bg-gray-200 rounded-md group-hover:bg-opacity-0">
          <FaHome size={20} />
          Back to Home
        </span>
      </Link>
    </div>
  )
}
export default D
