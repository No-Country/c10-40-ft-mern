import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import type { INewUser } from 'app/types'
import { Formik, Field, Form } from 'formik'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from 'utils'
import { Tooltip, MyModal } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'

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
  repassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
  terms: Yup.boolean().oneOf([true], 'Debe aceptar los terminos y condiciones')
})

const INITIAL_STATE: INewUser = {
  firstName: '',
  email: '',
  password: '',
  repassword: '',
  terms: false
}

const Register = (): JSX.Element => {
  const navigate = useNavigate()
  const userQuery = useUser()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!userQuery.isLoading && userQuery.data) {
      navigate('/dashboard')
    }
  }, [userQuery.data])

  const { mutate, isLoading, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate('/login')
    }
  })

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-10 2xl:py-16">
      <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
        <h1 className="uppercase font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
          Registrate
        </h1>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            mutate(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
              <div className="relative">
                <Field
                  name="firstName"
                  className={`input focus:border-primary-100 peer ${
                    errors.firstName && touched.firstName
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className={`label peer-focus:text-primary-100 ${
                    errors.firstName && touched.firstName
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su nombre
                </label>
                {errors.firstName && touched.firstName ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.firstName} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="email"
                  name="email"
                  className={`input focus:border-primary-100 peer ${
                    errors.email && touched.email
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`label peer-focus:text-primary-100 ${
                    errors.email && touched.email
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su email
                </label>
                {errors.email && touched.email ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.email} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="password"
                  name="password"
                  className={`input focus:border-primary-100 peer ${
                    errors.password && touched.password
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className={`label peer-focus:text-primary-100 ${
                    errors.password && touched.password
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su contraseña
                </label>
                {errors.password && touched.password ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.password} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="password"
                  name="repassword"
                  className={`input focus:border-primary-100 peer ${
                    errors.password && touched.password
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="repassword"
                  className={`label peer-focus:text-primary-100 ${
                    errors.repassword && touched.repassword
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su contraseña
                </label>
                {errors.repassword && touched.repassword ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.repassword} />
                  </span>
                ) : null}
              </div>
              {/* Terms  */}
              <div className="relative">
                <Field
                  type="checkbox"
                  name="terms"
                  className={`rounded-md font-semibold ease-in duration-200 flex mb-8 items-center w-3 h-3 ${
                    errors.terms && touched.terms
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="terms"
                  className="flex absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 px-0 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Acepto los{' '}
                  <p
                    onClick={() => {
                      setModal(true)
                    }}
                    className="pl-1 text-blue-600 hover:underline">
                    términos y condiciones
                  </p>
                </label>
                {errors.terms && touched.terms ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.terms} />
                  </span>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center uppercase font-Barlow font-semibold py-2.5 lg:py-3 text-lg lg:text-xl bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md">
                {isLoading ? (
                  <ImSpinner8 className="animate-spin" />
                ) : (
                  'Registrate'
                )}
              </button>

              {error ? <p className="text-red-500">Hubo un error</p> : null}
              <div className="flex items-center justify-center my-4 gap-2">
                <span>¿Ya tenés cuenta?</span>
                <Link
                  to="/login"
                  className=" hover:text-primary-400 hover:border-primary-400 hover:scale-105 ease-in duration-300">
                  Ingresa
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {modal && <MyModal setModal={setModal} />}
    </div>
  )
}

export default Register
