import { useMutation } from '@tanstack/react-query'
import { JWT_TOKEN } from 'app/constants'
import { type ILoginUser } from 'app/types'
import { Tooltip } from 'components'
import { Field, Formik, Form } from 'formik'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import { ImSpinner8 } from 'react-icons/im'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loginUser, googleCallback } from 'utils'
import * as Yup from 'yup'
import { sendNotification } from 'utils/sendNotification'
import { useAuth } from 'hooks/useAuth'
import { isAxiosError } from 'axios'
import { CSSTransition } from 'react-transition-group'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Requerido'),
  password: Yup.string().required('Requerido')
})

const INITIAL_STATE: ILoginUser = { email: '', password: '' }

const Login = (): JSX.Element => {
  const [rememberMe, setRememberMe] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { isAuthenticated, isLoading: authIsLoading } = useAuth()

  useEffect(() => {
    if (!authIsLoading && isAuthenticated) {
      navigate('/dashboard')
    }
  }, [authIsLoading, isAuthenticated])

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const session = rememberMe ? 1 : undefined
      Cookies.set(JWT_TOKEN, data, { sameSite: 'Lax', expires: session })
      navigate('/dashboard')
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          sendNotification('La contraseña es incorrecta', 'error')
        }
      }
    }
  })

  const handleUrl = (): void => {
    googleCallback()
      .then(({ data }: { data: string }) => {
        if (data) {
          window.location.href = `${data}/auth/google`
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-8 2xl:py-16">
      <CSSTransition key={location.key} timeout={300} classNames="page">
        <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
          <h1 className="uppercase font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
            Ingresá a tu cuenta
          </h1>
          <Formik
            initialValues={INITIAL_STATE}
            validationSchema={SignInSchema}
            onSubmit={async (values, actions) => {
              await mutateAsync(values)
              actions.resetForm({ values: INITIAL_STATE })
            }}>
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
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
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onClick={() => {
                      setRememberMe(!rememberMe)
                    }}
                    name="rememberMe"
                    className="w-4 h-4 text-primary-600 bg-primary-100 border-primary-300 rounded"
                  />
                  <label htmlFor="rememberMe">Recordarme</label>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center uppercase font-Barlow font-semibold py-2.5 lg:py-3 text-lg lg:text-xl bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md">
                  {isLoading ? (
                    <ImSpinner8 className="animate-spin" />
                  ) : (
                    'Ingresar'
                  )}
                </button>
                <Link
                  to={'/olvide-password'}
                  className="text-sm lg:text-base text-primary-400/80 hover:text-primary-400 ease-in duration-300">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Form>
            )}
          </Formik>
          <button
            onClick={handleUrl}
            className="flex items-center gap-2 border border-primary-400/60 text-sm lg:text-base justify-center w-full lg:w-max py-2 md:py-3 lg:px-8 lg:py-4 rounded-lg hover:text-primary-100 hover:bg-primary-400/60 ease-in duration-200 cursor-pointer">
            <BsGoogle />
            <span>Continuar con Google</span>
          </button>
          <div className="flex items-center justify-center text-sm lg:text-base pt-5 lg:pt-4 gap-2">
            <span>¿No tenés cuenta?</span>
            <Link
              to="/register"
              className="text-primary-400/80 hover:text-primary-400 ease-in duration-300">
              Registrate
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Login
