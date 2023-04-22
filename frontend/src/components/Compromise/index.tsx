import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useRef } from 'react'

const Compromise = (): JSX.Element => {
  const ref = useRef(null)

  const isVisible = useIntersectionObserver(ref)

  return (
    <div className="h-screen py-6 flex flex-col items-center justify-center px-5 lg:gap-12 bg-primary-400/60">
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-6 text-primary-bg text-lg font-medium">
          <h1
            ref={ref}
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } heading text-primary-bg border-primary-bg`}>
            {' '}
            Compromiso
          </h1>
          <p
            ref={ref}
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } max-w-lg`}>
            Estamos comprometidos en hacer el ejercicio fácilmente accesible y
            personalizado para nuestros usuarios, proporcionando rutinas
            adaptadas a sus necesidades y objetivos específicos para mejorar su
            bienestar general. Creemos que el ejercicio regular es clave para un
            estilo de vida saludable y nuestra aplicación está diseñada para
            motivar y ayudar a las personas a mantenerse en forma de manera
            efectiva y conveniente.
          </p>
        </div>
        <div
          className={`${
            isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
          }`}>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/bicycle-crunch.jpg?quality=82&strip=1"
            alt=""
            className="h-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Compromise
