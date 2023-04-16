import { useMutation } from '@tanstack/react-query'
import { JWT_TOKEN } from 'app/constants'
import { type ILoginUser } from 'app/types'
import { Tooltip } from 'components'
import { Field, Formik, Form } from 'formik'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { BsGoogle, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { ImSpinner8 } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from 'utils'
import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required')
})

const INITIAL_STATE: ILoginUser = { email: '', password: '' }

const Login = (): JSX.Element => {
  const navigate = useNavigate()

  const userQuery = useUser()
  useEffect(() => {
    if (!userQuery.isLoading && userQuery.data) {
      navigate('/dashboard')
    }
  }, [userQuery.data])

  const { mutateAsync, isLoading, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ data }) => {
      localStorage.setItem(JWT_TOKEN, data)
      navigate('/dashboard')
    }
  })

  return (
    <div className="flex items-center justify-center h-screen w-full my-8">
      <div className="flex flex-col items-center py-6 bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5">
          <button
            onClick={() => {
              navigate(-1)
            }}>
            <BsFillArrowLeftCircleFill size={30} />
          </button>
        </div>
        <img
          className="h-14 invert"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt="exercify-logo"
        />
        <div className="my-5">Ingresá a tu cuenta</div>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignInSchema}
          onSubmit={async (values, actions) => {
            await mutateAsync(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 text-center w-full p-8">
              <div className="relative">
                <Field
                  type="email"
                  name="email"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.email && touched.email
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su mail
                </label>
                {errors.email && touched.email ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.email} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="password"
                  name="password"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.password && touched.password
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su contraseña
                </label>
                {errors.password && touched.password ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.password} />
                  </span>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
                {isLoading ? (
                  <ImSpinner8 className="animate-spin" />
                ) : (
                  'Ingresar'
                )}
              </button>
              {error ? <span>Error in the petition</span> : null}
            </Form>
          )}
        </Formik>
        <Link
          to={'/'}
          className="underline cursor-pointer hover:text-gray-500 ease-in-out duration-200">
          ¿Olvidaste tu contraseña?
        </Link>
        <p className="mt-4">Ingresa con: </p>
        <div className="my-4 border border-gray-600 p-4 rounded-lg hover:text-white hover:bg-gray-600 transition-all cursor-pointer">
          <BsGoogle />
        </div>
        <div className=" flex items-center gap-2">
          <span>¿No tenés cuenta?</span>
          <Link to="/register" className="underline">
            Registrate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
