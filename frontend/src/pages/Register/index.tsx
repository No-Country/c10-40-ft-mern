import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import type { INewUser } from 'app/types'
import { Formik, Field, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from 'utils'
import { Tooltip, MyModal } from 'components'
import { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { sendNotification } from 'utils/sendNotification'
import { isAxiosError } from 'axios'
import { useAuth } from 'hooks/useAuth'
import { JWT_TOKEN } from 'app/constants'
import Cookies from 'js-cookie'
import { CSSTransition } from 'react-transition-group'

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
  const [modal, setModal] = useState(false)
  const { isAuthenticated, isLoading } = useAuth()
  const [formVisible, setFormVisible] = useState(true)

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isLoading, isAuthenticated])

  const { mutate, isLoading: mutationIsLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      const { token } = data.data
      if (token) {
        Cookies.set(JWT_TOKEN, token, { sameSite: 'Lax' })
      }
      sendNotification('Registro realizado con exito.', 'success')
      setFormVisible(false)
      setTimeout(() => {
        navigate('/completeprofile')
      }, 500)
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          sendNotification(
            'Ya hay una cuenta con esa dirección de email.',
            'error'
          )
        }
      }
    }
  })

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-10 2xl:py-16">
      <CSSTransition
        in={formVisible}
        timeout={500}
        classNames="form"
        unmountOnExit>
        <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
          <h1 className="uppercase font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
            Registrate
          </h1>
          <Formik
            initialValues={INITIAL_STATE}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              mutate(values)
            }}>
            {({ errors, touched, setFieldValue }) => (
              <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
                <div className="relative">
                  <Field
                    name="firstName"
                    id="firstName"
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
                    id="email"
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
                    id="password"
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
                    id="repassword"
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
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="w-4 h-4 text-primary-600 bg-primary-100 border-primary-300 rounded "
                      placeholder=" "
                    />
                    <label
                      htmlFor="terms"
                      className="flex text-sm items-center gap-2 text-gray-600">
                      Acepto los
                      <button
                        onClick={() => {
                          setModal(true)
                        }}
                        className="text-primary-400/80 hover:text-primary-400 ease-in duration-300">
                        {' '}
                        términos y condiciones
                      </button>
                    </label>
                  </div>
                  {errors.terms && touched.terms ? (
                    <span className="text-secondary-400 text-xl self-end">
                      <Tooltip message={errors.terms} />
                    </span>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={mutationIsLoading}
                  className="flex items-center justify-center uppercase font-Barlow font-semibold py-2.5 lg:py-3 text-lg lg:text-xl bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md">
                  {mutationIsLoading ? (
                    <ImSpinner8 className="animate-spin" />
                  ) : (
                    'Registrate'
                  )}
                </button>

                <div className="flex items-center justify-center text-sm lg:text-base pt-5 lg:pt-4 gap-2">
                  <span>¿Ya tenés cuenta?</span>
                  <Link
                    to="/login"
                    className="text-primary-400/80 hover:text-primary-400 ease-in duration-300">
                    Ingresar
                  </Link>
                </div>
                {modal && (
                  <MyModal setModal={setModal} setFieldValue={setFieldValue} />
                )}
              </Form>
            )}
          </Formik>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Register
