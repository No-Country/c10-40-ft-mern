import { useMutation } from '@tanstack/react-query'
import { type IUserProfile } from 'app/types'
import * as Yup from 'yup'
import { Tooltip } from 'components'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { completeProfile } from 'utils'
import { ImSpinner8 } from 'react-icons/im'
import { sendNotification } from 'utils/sendNotification'

const CompleteProfile = (): JSX.Element => {
  const CompleteSchema = Yup.object().shape({
    gender: Yup.string()
      .required('Required')
      .oneOf(['Masculino', 'Femenino', 'Otro']),
    age: Yup.number()
      .min(10, 'You must have 10 years')
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
    age: 0,
    weight: 0,
    height: 0
  }

  const navigate = useNavigate()
  const { mutate, isLoading, error } = useMutation({
    mutationFn: async (user: IUserProfile) => await completeProfile(user),
    onSuccess: () => {
      sendNotification(
        'Datos guardados con éxito! Te estamos redirigiendo...',
        'success'
      )
      navigate('/dashboard')
    },
    onError: () => {
      sendNotification('Hubo un error al guardar los datos', 'error')
      console.log(error)
    }
  })
  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-8 2xl:py-16">
      <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
        <h1 className="uppercase font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
          Completá tu perfil
        </h1>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={CompleteSchema}
          onSubmit={(values, actions) => {
            mutate({ ...values })
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col text-center gap-4 w-full p-10">
              <div className="relative">
                <Field
                  as="select"
                  name="gender"
                  className={`input focus:border-primary-100 peer ${
                    errors.gender && touched.gender
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}>
                  <option value="">Seleccione su género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </Field>
                {errors.gender && touched.gender ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.gender} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="age"
                  placeholder="Edad"
                  className={`input focus:border-primary-100 peer ${
                    errors.age && touched.age
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                />
                <label
                  htmlFor="age"
                  className={`label peer-focus:text-primary-100 ${
                    errors.age && touched.age
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su edad
                </label>
                {errors.age && touched.age ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.age} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="weight"
                  placeholder=" "
                  className={`input focus:border-primary-100 peer ${
                    errors.weight && touched.weight
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                />
                <label
                  htmlFor="weight"
                  className={`label peer-focus:text-primary-100 ${
                    errors.weight && touched.weight
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su Peso en kg
                </label>
                {errors.weight && errors.weight ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.weight} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="height"
                  placeholder=" "
                  className={`input focus:border-primary-100 peer ${
                    errors.height && touched.height
                      ? 'border-2 border-secondary-400'
                      : 'border-2 border-primary-100 text-primary-100'
                  }`}
                />
                <label
                  htmlFor="height"
                  className={`label peer-focus:text-primary-100 ${
                    errors.height && touched.height
                      ? 'text-secondary-400'
                      : 'text-primary-100/70'
                  }`}>
                  Ingrese su altura en cm
                </label>
                {errors.height && errors.height ? (
                  <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.height} />
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
                  'Guardar'
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CompleteProfile
