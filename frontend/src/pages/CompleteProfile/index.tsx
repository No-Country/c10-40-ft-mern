import { useMutation } from '@tanstack/react-query'
import { type IUserProfile } from 'app/types'
import * as Yup from 'yup'
import { Tooltip } from 'components'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { completeProfile } from 'utils'
import { ImSpinner8 } from 'react-icons/im'
import { sendNotification } from 'utils/sendNotification'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useState } from 'react'

const CompleteSchema = Yup.object().shape({
  gender: Yup.string()
    .required('Required')
    .oneOf(['Masculino', 'Femenino', 'Otro']),
  age: Yup.number()
    .min(10, 'You must have 10 years')
    .max(100, 'Too old, not recommended')
    .nullable()
    .required('Age required'),
  weight: Yup.number()
    .min(30, 'Weight must be more than 30kg')
    .nullable()
    .required('Weight required'),
  height: Yup.number()
    .nullable()
    .min(70, 'Greater than 70cm')
    .required('Height required')
})

const INITIAL_STATE: IUserProfile = {
  gender: '',
  age: null,
  weight: null,
  height: null
}

const CompleteProfile = (): JSX.Element => {
  const navigate = useNavigate()
  const [formVisible, setFormVisible] = useState(false)

  const { mutate, isLoading, error } = useMutation({
    mutationFn: async (user: IUserProfile) => await completeProfile(user),
    onSuccess: () => {
      sendNotification('Datos guardados con éxito!', 'success')
      navigate('/dashboard')
    },
    onError: () => {
      sendNotification('Hubo un error al guardar los datos', 'error')
      console.log(error)
    }
  })

  useEffect(() => {
    setFormVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-8 2xl:py-16 overflow-x-hidden">
      <CSSTransition
        in={formVisible}
        timeout={500}
        classNames="form"
        appear={true}>
        <>
          {formVisible && (
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
                        id="gender"
                        className={`input focus:border-white peer ${
                          errors.gender && touched.gender
                            ? 'border-2 border-secondary-400'
                            : 'border-2 border-primary-100 text-primary-100'
                        }`}>
                        <option
                          className="bg-white font-WS text-black disabled"
                          value="">
                          Seleccione su género
                        </option>
                        <option
                          className="bg-white font-WS text-black"
                          value="Masculino">
                          Masculino
                        </option>
                        <option
                          className="bg-white font-WS text-black"
                          value="Femenino">
                          Femenino
                        </option>
                        <option
                          className="bg-white font-WS text-black"
                          value="Otro">
                          Otro
                        </option>
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
                        id="age"
                        min={10}
                        max={100}
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
                          <Tooltip message="Edad Requerida" />
                        </span>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Field
                        type="number"
                        name="weight"
                        id="weight"
                        min={30}
                        max={200}
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
                          <Tooltip message="Peso Requerido" />
                        </span>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Field
                        type="number"
                        name="height"
                        id="height"
                        placeholder=" "
                        min={70}
                        max={250}
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
                          <Tooltip message="Altura Requerida" />
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
          )}
        </>
      </CSSTransition>
    </div>
  )
}

export default CompleteProfile
