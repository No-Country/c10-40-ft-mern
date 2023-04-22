import { useMutation } from '@tanstack/react-query'
import { TOKEN_PW } from 'app/constants'
import { type IForgotPassword } from 'app/types'
import { Tooltip } from 'components'
import { Field, Formik, Form } from 'formik'
import { useState } from 'react'
import { ImSpinner8 } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import { forgotPw } from 'utils'
import { sendNotification } from 'utils/sendNotification'
import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required')
})

const INITIAL_STATE: IForgotPassword = { email: '' }
const Password = (): JSX.Element => {
  const navigate = useNavigate()
  const [tokenSend, setTokenSend] = useState(false)
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: forgotPw,
    onSuccess: ({ data }) => {
      localStorage.setItem(TOKEN_PW, data)
      setTokenSend(true)
      sendNotification('Se han enviado instrucciones a su email!', 'success')
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }
  })

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-8 2xl:py-16">
      <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignInSchema}
          onSubmit={async (values, actions) => {
            await mutateAsync(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
              <h1 className="uppercase self-start font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
                Recuperar contraseña
              </h1>
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
                  Ingrese su mail
                </label>
                {errors.email && touched.email ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.email} />
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
                  'Enviar instrucciones'
                )}
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex items-center justify-center text-sm lg:text-base pt-5 lg:pt-4 gap-2">
          <span>¿No tenés cuenta?</span>
          <Link
            to="/register"
            className="text-primary-400/80 hover:text-primary-400 ease-in duration-300">
            Registrate
          </Link>
        </div>
      </div>
      <Toaster closeButton />
    </div>
  )
}

export default Password
