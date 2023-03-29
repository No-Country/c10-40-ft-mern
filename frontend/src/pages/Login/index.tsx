import { BsGoogle, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Login = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5">
          <button
            onClick={() => {
              navigate(-1)
            }}>
            <BsFillArrowLeftCircleFill size={30} />
          </button>
        </div>
        <div>Imagen</div>
        <div className="my-5">Hola! Ingresa en tu cuenta</div>
        <form className="flex flex-col gap-4 text-center w-full p-10">
          <div className="relative">
            <input
              type="mail"
              id="mail"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="mail"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su mail
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su contraseña
            </label>
          </div>
          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            Ingresar
          </button>
          <Link
            to={'/'}
            className="my-10 hover:text-gray-500 ease-in-out duration-200">
            Olvidaste tu contraseña
          </Link>
          <p>Ingresa con: </p>

          <div className="flex gap-12 justify-center my-6">
            <BsGoogle />
            <FaFacebookF />
          </div>
          <Link
            to="/register"
            className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light pt-1.5">
            Registrate
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
