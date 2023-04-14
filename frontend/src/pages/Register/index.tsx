import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import type { INewUser } from 'app/types'
import { Formik, Field, Form } from 'formik'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { registerUser } from 'utils'
import { Tooltip } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'

/* TODO: add minimum length for password.
 * password: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 *                 ^ este regex es para testear que la contraseña tenga:
 *                 más de 8 caracteres, una letra mayúscula, una minúscula y un número
 *                 después vemos como lo manejamos
 */
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too Long')
    .required('Required')
    .matches(/[a-zA-Z\s:]/, 'Numbers and special characters forbbiden'),
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('Required'),
  repassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
})

const INITIAL_STATE: INewUser = {
  firstName: '',
  email: '',
  password: '',
  repassword: ''
}

const Register = (): JSX.Element => {
  const navigate = useNavigate()
  const userQuery = useUser()

  useEffect(() => {
    if (!userQuery.isLoading && userQuery.data) {
      navigate('/dashboard')
    }
  }, [userQuery.data])

  const { mutate, isLoading, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate('/completeprofile')
    }
  })

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5">
          <button
            onClick={() => {
              navigate('/')
            }}>
            <BsFillArrowLeftCircleFill size={30} color="gray" />
          </button>
        </div>
        <img
          className="h-14 invert"
          src="https://res.cloudinary.com/dnqmez68n/image/upload/v1681249456/exfy_tsvjx0.png"
          alt="exercify-logo"
        />
        <div className="mt-7 font-bold text-gray-500 text-lg">Registrate</div>

        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            mutate(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col text-center gap-4 w-full p-10">
              <div className="relative">
                <Field
                  name="firstName"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.firstName && touched.firstName
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su nombre
                </label>
                {errors.firstName && touched.firstName ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.firstName} />
                  </span>
                ) : null}
              </div>
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
                  Ingrese su email
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
              <div className="relative">
                <Field
                  type="password"
                  name="repassword"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.repassword && touched.repassword
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="repassword"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Reingrese su contraseña
                </label>
                {errors.repassword && touched.repassword ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.repassword} />
                  </span>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
                Registrarme
              </button>
              {error ? <p className="text-red-500">Hubo un error</p> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Register
