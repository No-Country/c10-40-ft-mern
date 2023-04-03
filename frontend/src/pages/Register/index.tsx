import { useMutation } from '@tanstack/react-query'
import type { INewUser } from 'app/types'
import { useFormik } from 'formik'
import { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { registerUser } from 'utils'

const INITIAL_STATE: INewUser = {
  firstName: '',
  email: '',
  password: ''
}

const Register = (): JSX.Element => {
  const navigate = useNavigate()
  const [user, setUser] = useState<INewUser>(INITIAL_STATE)

  const { mutate } = useMutation(registerUser)
  const formik = useFormik({
    initialValues: INITIAL_STATE,
    onSubmit: (values) => {
      mutate(values)
    }
  })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   e.preventDefault()
  //
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value
  //   })
  // }
  //
  // console.log(user)
  //
  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault()
  //
  //   mutate(user)
  // }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5">
          <button
            onClick={() => {
              navigate('/')
            }}>
            <BsFillArrowLeftCircleFill size={30} />
          </button>
        </div>
        <div>Imagen</div>
        <div className="my-5">Registrate</div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 text-center w-full p-10">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="firstName"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su nombre
            </label>
          </div>
          <div className="relative">
            <input
              type="mail"
              name="email"
              onChange={formik.handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su contraseña
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="repassword"
              onChange={formik.handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="repassword"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Reingrese su contraseña
            </label>
          </div>

          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
