import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Register = (): JSX.Element => {
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
        <div className="my-5">Registrate</div>

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
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'*********'}
            value={''}
          />
          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
