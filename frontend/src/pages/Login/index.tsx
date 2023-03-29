import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div>Imagen</div>
        <div className="my-5">Hola! Ingresa en tu cuenta</div>
        <form className="flex flex-col gap-4 text-center w-full p-10">
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'correo@correo.com'}
            value={''}
          />
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'*********'}
            value={''}
          />
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
          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            Registrate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
