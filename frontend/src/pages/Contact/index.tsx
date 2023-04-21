import { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Tooltip } from 'components'
import { useMutation } from '@tanstack/react-query'
import { ImSpinner8 } from 'react-icons/im'
import { sendEmail } from 'utils'
import { type IContact } from 'app/types'
import { sendNotification } from 'utils/sendNotification'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too Long')
    .required('Required')
    .matches(/[a-zA-Z\s:]/, 'Numbers and special characters forbbiden'),
  email: Yup.string().email('Invalid Email').required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required')
})

const INITIAL_STATE: IContact = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = (): JSX.Element => {
  const location = useLocation()
  const [formVisible, setFormVisible] = useState(false)
  useEffect(() => {
    setFormVisible(true)
  }, [])
  const { mutate, isLoading, error } = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      sendNotification('Email enviado correctamente!', 'success')
    },
    onError: () => {
      sendNotification(
        'Hubo un error al enviar el email. Vuelve a intentarlo',
        'error'
      )
    }
  })

  return (
    <div className="flex items-center justify-center w-full font-WS px-6 py-10 2xl:py-16">
      <CSSTransition
        in={formVisible}
        timeout={500}
        classNames="contact-form"
        appear={true}>
        <>
          {formVisible && (
            <div className="flex flex-col gap-2 border-2 border-primary-100 text-primary-50 items-center px-6 py-8 lg:px-8 lg:py-16 rounded-xl w-full md:min-w-[50%] 2xl:min-w-[35%] md:w-max">
              <Formik
                initialValues={INITIAL_STATE}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                  mutate(values)
                  actions.resetForm({ values: INITIAL_STATE })
                }}>
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-5 text-center w-full py-6 lg:py-10 lg:px-10">
                    <h1 className="uppercase self-start font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl">
                      Envianos un Mensaje
                    </h1>
                    <div className="relative">
                      <Field
                        name="name"
                        className={`input focus:border-primary-100 peer ${
                          errors.name && touched.name
                            ? 'border-2 border-secondary-400'
                            : 'border-2 border-primary-100 text-primary-100'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className={`label peer-focus:text-primary-100 ${
                          errors.name && touched.name
                            ? 'text-secondary-400'
                            : 'text-primary-100/70'
                        }`}>
                        Ingrese su nombre
                      </label>
                      {errors.name && touched.name ? (
                        <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                          <Tooltip message={errors.name} />
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
                        Ingrese su mail
                      </label>
                      {errors.email && touched.email ? (
                        <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                          <Tooltip message={errors.email} />
                        </span>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Field
                        name="subject"
                        className={`input focus:border-primary-100 peer ${
                          errors.subject && touched.subject
                            ? 'border-2 border-secondary-400'
                            : 'border-2 border-primary-100 text-primary-100'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="subject"
                        className={`label peer-focus:text-primary-100 ${
                          errors.subject && touched.subject
                            ? 'text-secondary-400'
                            : 'text-primary-100/70'
                        }`}>
                        Asunto
                      </label>
                      {errors.subject && touched.subject ? (
                        <span className="text-secondary-400 absolute right-4 top-2/4 -translate-y-2/4">
                          <Tooltip message={errors.subject} />
                        </span>
                      ) : null}
                    </div>
                    <div className="relative">
                      <Field
                        as={'textarea'}
                        rows={4}
                        name="message"
                        className={`input focus:border-primary-100 peer ${
                          errors.message && touched.message
                            ? 'border-2 border-secondary-400'
                            : 'border-2 border-primary-100 text-primary-100'
                        }`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="mesagge"
                        className={`label peer-focus:text-primary-100 ${
                          errors.message && touched.message
                            ? 'text-secondary-400'
                            : 'text-primary-100/70'
                        }`}>
                        Mensaje
                      </label>
                      {errors.message && touched.message ? (
                        <span className="text-secondary-400 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                          <Tooltip message={errors.message} />
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
                        'Enviar'
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

export default Contact
