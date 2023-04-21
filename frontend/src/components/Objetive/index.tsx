import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useRef } from 'react'

const Objetives = (): JSX.Element => {
  const ref = useRef(null)

  const isVisible = useIntersectionObserver(ref)

  return (
    <div className="py-10 flex flex-col justify-center w-full h-screen px-5 lg:gap-12 bg-primary-400/60">
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-6 text-primary-bg text-lg font-medium py-8">
          <h1
            ref={ref}
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } heading text-primary-bg border-primary-bg`}>
            {' '}
            Nuestro objetivo
          </h1>
          <p
            ref={ref}
            className={`${
              isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
            } max-w-lg`}>
            Nuestra aplicación de ejercicio tiene como objetivo mejorar la salud
            física y mental de los usuarios, brindando una experiencia única y
            personalizada para cada usuario. Nos enfocamos en el ejercicio
            regular y una rutina personalizada para mejorar la calidad de vida
            de nuestros usuarios, ya que sabemos que estos factores tienen un
            impacto significativo en la salud y el bienestar general de las
            personas.
          </p>
        </div>
        <div
          className={`${
            isVisible ? 'fade-in-effect is-visible' : 'fade-in-effect'
          }`}>
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2023/02/NYPICHPDPICT000007191289.jpg?w=1024"
            alt=""
            className="h-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Objetives
