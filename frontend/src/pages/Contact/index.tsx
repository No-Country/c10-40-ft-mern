import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Tooltip } from 'components'
import { useMutation } from '@tanstack/react-query'
import { ImSpinner8 } from 'react-icons/im'
import { sendEmail } from 'utils'
import { type IContact } from 'app/types'
import { useState } from 'react'

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
  const [result, setResult] = useState()
  const navigate = useNavigate()

  const { mutate, isLoading, error } = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      setResult(data)
    }
  })
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5">
          <button
            onClick={() => {
              navigate(-1)
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
          Envianos un Mensaje
        </div>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            mutate(values)
            actions.resetForm({ values: INITIAL_STATE })
          }}>
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 text-center w-full p-10">
              <div className="relative">
                <Field
                  name="name"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.name && touched.name
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su nombre
                </label>
                {errors.name && touched.name ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.name} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  type="email"
                  name="email"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.name && touched.name
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Ingrese su mail
                </label>
                {errors.email && touched.email ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.email} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  name="subject"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.subject && touched.subject
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Asunto
                </label>
                {errors.subject && touched.subject ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.subject} />
                  </span>
                ) : null}
              </div>
              <div className="relative">
                <Field
                  as={'textarea'}
                  rows={4}
                  name="message"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg  appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer ${
                    errors.message && touched.message
                      ? 'border border-red-500'
                      : 'border border-gray-300'
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="mesagge"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Mensaje
                </label>
                {errors.message && touched.message ? (
                  <span className="text-red-500 text-xl absolute right-4 top-2/4 -translate-y-2/4">
                    <Tooltip message={errors.message} />
                  </span>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
                {isLoading ? <ImSpinner8 className="animate-spin" /> : 'Enviar'}
              </button>
              {error ? (
                <span className="text-red-500">
                  Hubo un error enviando el email.
                </span>
              ) : null}
              {result ? (
                <span className="text-green-500">
                  Email enviado correctamente
                </span>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Contact
