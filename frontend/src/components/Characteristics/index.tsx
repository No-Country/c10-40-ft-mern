import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useRef } from 'react'

const Charac = (): JSX.Element => {
  const ref = useRef(null)

  const isVisible = useIntersectionObserver(ref)

  return (
    <div className="py-10 flex flex-col w-full h-screen items-center justify-center gap-12 px-5">
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div
          className={`${
            isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
          }`}>
          <img
            src="https://onecms-res.cloudinary.com/image/upload/s--1glYCO-K--/c_crop,h_1191,w_2119,x_1,y_114/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2022/05/18/running_exercise.jpg?itok=FC1K927e"
            alt=""
            className="h-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6 text-primary-400 text-lg font-medium py-8">
          <h1
            ref={ref}
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } heading text-primary-400 border-b-primary-400`}>
            {' '}
            Características
          </h1>
          <p
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } max-w-lg`}>
            Nuestra aplicación ofrece un sistema de registro y un calendario
            interactivo para ayudar a los usuarios a mantenerse motivados y
            responsables de su progreso en la rutina de ejercicios. La opción de
            elegir la cantidad de días a la semana para hacer ejercicio permite
            que la aplicación se adapte a las necesidades individuales y
            facilite la integración del ejercicio en la vida cotidiana de manera
            conveniente.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Charac
