import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 max-w-xl mx-auto">
      <div>Imagen</div>
      <div className="my-5">Hola! Ingresa en tu cuenta</div>

      <form className="flex flex-col gap-4 text-center w-full">
        <input
          className="rounded-md h-10"
          placeholder={'correo@correo.com'}
          value={''}
        />
        <input
          className="rounded-md h-10"
          placeholder={'*********'}
          value={''}
        />
        <button className="uppercase bg-white hover:bg-gray-500 ease-in-out duration-300 text-black rounded-md h-10 font-light">
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
        <button className="uppercase bg-white hover:bg-gray-500 ease-in-out duration-300 text-black rounded-md h-10 font-light">
          Registrate
        </button>
      </form>
    </div>
  )
}

export default Login
