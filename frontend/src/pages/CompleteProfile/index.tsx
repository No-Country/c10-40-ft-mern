import { useMutation } from '@tanstack/react-query'
import { type IUserProfile } from 'app/types'
import * as Yup from 'yup'
import { Tooltip } from 'components'
import { Field, Form, Formik } from 'formik'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { completeProfile } from 'utils'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'

const CompleteProfile = (): JSX.Element => {
  const { data } = useUser()
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken')
    if (jwtToken) {
      setToken(jwtToken)
    }
  }, [data])

  const CompleteSchema = Yup.object().shape({
    age: Yup.number()
      .min(10, 'U must have 10 years')
      .max(100, 'Too old, not recommended')
      .required('Age required'),
    weight: Yup.number()
      .min(30, 'Weight must be more than 30kg')
      .required('Weight required'),
    height: Yup.number()
      .min(70, 'Greater than 70cm')
      .required('Height required')
  })

  const INITIAL_STATE: IUserProfile = {
    gender: '',
    age: null,
    weight: null,
    height: null
  }

  const navigate = useNavigate()
  const { mutate, isLoading, error } = useMutation({
    mutationFn: async (user: IUserProfile) =>
      await completeProfile(user, { token }),
    onSuccess: (data) => {
      navigate('/dashboard/profile', { state: { someData: data } })
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
        <div className="mt-7 font-bold text-gray-500 text-lg">
          Completá tu perfil
        </div>

        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={CompleteSchema}
          onSubmit={(values, actions) => {
            mutate({ ...values, token })
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ values, errors, touched }) => (
            <Form className="flex flex-col text-center gap-4 w-full p-10">
              <div className="relative">
                <Field
                  as="select"
                  name="gender"
                  className={`block mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.gender && touched.gender
                      ? 'border border-red-500'
                      : ''
                  }`}>
                  <option value="">Seleccione su genero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </Field>
                {errors.gender && touched.gender ? (
                  <div className="mt-1 text-sm text-red-600">
                    {errors.gender}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="age"
                  value={values.age ?? ''}
                  placeholder={
                    values.age === null || values.age === undefined
                      ? 'Ingrese su edad'
                      : ''
                  }
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.age && touched.age
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                />
                <label
                  htmlFor="age"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su edad
                </label>
                {errors.age && touched.age ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.age} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="weight"
                  value={values.weight ?? ''}
                  placeholder={
                    values.weight === null || values.weight === undefined
                      ? 'Ingrese su Peso en Kg'
                      : ''
                  }
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.weight && touched.weight
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                />
                <label
                  htmlFor="weight"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su Peso en kg
                </label>
                {errors.weight && touched.weight ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.weight} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="height"
                  value={values.height ?? ''}
                  placeholder={
                    values.height === null || values.height === undefined
                      ? 'Ingrese su altura en cm'
                      : ''
                  }
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.height && touched.height
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                />
                <label
                  htmlFor="height"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su altura en cm
                </label>
                {errors.height && touched.height ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.height} />
                  </span>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
                Guardar
              </button>
              {error ? <p className="text-red-500">Hubo un error</p> : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CompleteProfile
