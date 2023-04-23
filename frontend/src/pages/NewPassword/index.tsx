import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import type { INewPassword } from 'app/types'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from 'utils'
import { Tooltip } from 'components'
import { ImSpinner8 } from 'react-icons/im'
import { sendNotification } from 'utils/sendNotification'

/* TODO: add minimum length for password.
 * password: /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 *                 ^ este regex es para testear que la contraseña tenga:
 *                 más de 8 caracteres, una letra mayúscula, una minúscula y un número
 *                 después vemos como lo manejamos
 */
const SignUpSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
  repassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required')
})

const INITIAL_STATE: INewPassword = {
  password: '',
  repassword: '',
  token: ''
}

const NewPassword = (): JSX.Element => {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')
  if (token) {
    localStorage.setItem('PwToken', token)
  }
  const { mutate, isLoading } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      sendNotification(
        'Contraseña cambiada satisfactoriamente, espere un momento!',
        'success'
      )
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    },
    onError: (error: Error) => {
      sendNotification(error.message, 'error')
    }
  })

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-8 2xl:py-16">
      <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            mutate(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
              <h1 className="uppercase self-start font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
                Elegí tu nueva contraseña
              </h1>
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
                  className={`input focus:border-primary-100 peer ${
                    errors.repassword && touched.repassword
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
                  Reingrese su contraseña
                </label>
                {errors.repassword && touched.repassword ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.repassword} />
                  </span>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center uppercase font-Barlow font-semibold py-2.5 lg:py-3 text-lg lg:text-xl bg-primary-400/60 hover:bg-primary-400 hover:text-primary-bg ease-in-out duration-300 text-primary-bg rounded-md">
                {isLoading ? (
                  <ImSpinner8 className="animate-spin mx-auto" />
                ) : (
                  'Guardar Contraseña'
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewPassword
