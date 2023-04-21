import { useState } from 'react'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Carousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 0,
      testimonio:
        'Desde que empecé a utilizar Exercify, he notado un gran progreso en mi estado físico. Ahora tengo más resistencia y fuerza, además de haber mejorado mi flexibilidad. La aplicación ofrece una amplia variedad de ejercicios y es muy fácil de usar. ¡La recomiendo sin duda a cualquiera que quiera mejorar su condición física!',

      imagen:
        'https://media.tenor.com/jgdF6Vjn3cUAAAAC/push-up-dwayne-johnson.gif',
      nombre: 'Juan Dumblendore',
      trabajo: 'Arquitecto'
    },
    {
      id: 1,
      testimonio:
        'Gracias a Exercify, he experimentado una gran mejora en mi estado físico. Los ejercicios de la app me han ayudado a aumentar mi resistencia, fuerza y flexibilidad. Además, es muy sencillo de usar y cuenta con una amplia selección de rutinas de ejercicios. ¡Se la recomiendo a todo el mundo que quiera mejorar su salud y bienestar!',
      imagen:
        'https://media.tenor.com/42JIUEKRHZQAAAAC/lebron-james-working-out.gif',
      nombre: 'Lebron James',
      trabajo: 'Deportista'
    },
    {
      id: 2,
      testimonio:
        'Exercify ha sido una herramienta valiosa para mejorar mi condición física. Gracias a la aplicación, he logrado aumentar mi resistencia, fuerza y flexibilidad, y ahora me siento más en forma que nunca. La app es muy fácil de usar y ofrece una gran variedad de ejercicios para adaptarse a cualquier nivel de habilidad. ¡La recomiendo encarecidamente a cualquiera que busque mejorar su salud y bienestar!',
      imagen:
        'https://i2-prod.mirror.co.uk/incoming/article13142117.ece/ALTERNATES/s1200d/1_Cristiano-Ronaldo-in-the-gym.jpg',
      nombre: 'Cristiano Ronaldo',
      trabajo: 'Futbolista'
    },
    {
      id: 3,
      testimonio:
        'Desde que comencé a utilizar Exercify, he notado una gran diferencia en mi estado físico. Gracias a la variedad de ejercicios que ofrece la aplicación, he aumentado mi resistencia, fuerza y flexibilidad. Además, la app es muy fácil de usar y me ha ayudado a establecer una rutina diaria de ejercicios. Estoy muy contento con los resultados obtenidos y recomiendo Exercify a cualquiera que quiera mejorar su salud y bienestar.',
      imagen:
        'https://i2-prod.mirror.co.uk/incoming/article23879953.ece/ALTERNATES/s615b/0_Hafthor-Bjornsson-shares-fresh-weight-loss-update-ahead-of-Eddie-Hall-bout.jpg',
      nombre: 'Thor Björnsson',
      trabajo: 'Atleta, Actor'
    },
    {
      id: 5,
      testimonio:
        '¡Gente! Les tiro la posta, Exercify me salvó el culo para entrenar y olvidarme de la palta que está más cara que el dólar en Argentina. Con las rutinas personalizadas y la opción de acomodar mi entrenamiento a mi agenda, pude ponerme en forma sin sufrir por los precios altos. Resumiendo, si querés ponerle ganas al entrenamiento y no comerse el garrón de la inflación, bajate Exercify, que te va a cambiar la vida. ¡Dale que va!',
      imagen:
        'https://thumbs.gfycat.com/AccurateBonyHadrosaurus-size_restricted.gif',
      nombre: 'Vicente Viloni',
      trabajo: 'Luchador Profesional'
    }
  ]
  const handleNextSlide = (): void => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevSlide = (): void => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8">
      {slides.map((slide, index) => (
        <CSSTransition
          key={index}
          timeout={500}
          classNames="slide"
          appear={true}
          in={index === currentSlide}>
          <div className="w-full">
            <div
              className={`slide transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}>
              <section className="rounded-lg bg-primary-300/70 py-8 px-12 w-full md:flex md:gap-6">
                <img
                  alt={slide.nombre}
                  src={slide.imagen}
                  className="aspect-square mx-auto w-auto md:max-w-xs mb-5 md:mb-0 rounded-lg object-cover"
                />
                <blockquote className="sm:col-span-2 flex flex-col justify-around items-center">
                  <p className="text-xl font-medium text-black">
                    {slide.testimonio}
                  </p>
                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-primary-900 sm:inline-block"></span>
                    <p className="text-sm uppercase text-primary-900 sm:ms-3">
                      <strong>{slide.nombre}</strong>, {slide.trabajo}.
                    </p>
                  </cite>
                </blockquote>
              </section>
            </div>
          </div>
        </CSSTransition>
      ))}
      {/* <div className="flex justify-center mt-2">
        <button
          onClick={handlePrevSlide}
          className="p-2 rounded-full hover:scale-110 hover:text-primary-400 ease-in-out duration-200">
          <AiOutlineArrowLeft size={32} />
        </button>
        <button
          onClick={handleNextSlide}
          className="p-2 rounded-full hover:scale-110 hover:text-primary-400 ease-in-out duration-200 ml-4">
          <AiOutlineArrowRight size={32} />
        </button>
      </div>
    </div> */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-2">
        <div className="block">
          <button
            onClick={handlePrevSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 left-0">
            <BsFillArrowLeftCircleFill size={28} />
          </button>
        </div>
        <div className="block">
          <button
            onClick={handleNextSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 right-0">
            <BsFillArrowRightCircleFill size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
