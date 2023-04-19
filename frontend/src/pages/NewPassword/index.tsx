import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import type { INewPassword } from 'app/types'
import { Formik, Field, Form } from 'formik'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { resetPassword } from 'utils'
import { Tooltip } from 'components'
import { useState } from 'react'
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
  repassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
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
  const [isLoad, setisLoad] = useState(false)
  const [pwChanged, setPwChanged] = useState(false)
  const [errorPw, setErrorPw] = useState<string | null>(null)
  const { mutate, isLoading } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      setisLoad(false)
      setErrorPw(null)
      sendNotification(
        'Contraseña cambiada satisfactoriamente, espere un momento!',
        'success'
      )
      setPwChanged(true)
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    },
    onError: (error: Error) => {
      setisLoad(false)
      sendNotification(
        'Ocurrio un error al intentar cambiar su Contraseña, intente nuevamente',
        'error'
      )
      setErrorPw(
        error.message || 'Ocurrio un error al intentar cambiar su Contraseña'
      )
      toast.error(errorPw)
    }
  })

  return (
    <div className="flex items-center justify-center h-[91vh] w-full">
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
        <div className="mt-7 font-bold text-gray-500 text-lg">
          Elegi tu nueva contraseña
        </div>

        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            mutate(values)
            setisLoad(true)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col text-center gap-4 w-full p-10">
              {!isLoad ? (
                <>
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
                    {isLoad ? (
                      <ImSpinner8 className="animate-spin mx-auto" />
                    ) : (
                      'Guardar Contraseña'
                    )}
                  </button>
                </>
              ) : (
                <ImSpinner8 className="animate-spin mx-auto" />
              )}

              <div className="flex items-center justify-center my-4 gap-2">
                <span>¿Ya tenés cuenta?</span>
                <Link
                  to="/login"
                  className=" border-b-2 border-black hover:text-green-600 hover:border-green-600 hover:scale-105 ease-in duration-300">
                  Ingresa
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewPassword
