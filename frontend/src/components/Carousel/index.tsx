import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Carousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 0,
      testimonio:
        'Después de usar Exercify, mi capacidad física ha mejorado aún más. La aplicación me ha ayudado a establecer una rutina diaria de ejercicios, aumentando mi resistencia y mejorando mi fuerza y flexibilidad. Es fácil de usar y tiene una amplia variedad de ejercicios para elegir. Recomiendo Exercify a cualquier persona que quiera mejorar su estado físico.',
      imagen:
        'https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      nombre: 'Juan Dumblendore',
      trabajo: 'Arquitecto'
    },
    {
      id: 1,
      testimonio:
        'Uso Exercify y mi capacidad física ha mejorado mucho. Antes me cansaba rápido y tenía poca energía, pero ahora tengo más resistencia y fuerza. Los ejercicios de la app han mejorado mi flexibilidad y estoy muy satisfecho con los resultados. Recomiendo Exercify a cualquiera que quiera mejorar su estado físico.',
      imagen:
        'https://image-cdn.essentiallysports.com/wp-content/uploads/20200322130152/LeBron-James-LA-Lakers.jpg',
      nombre: 'Lebron James',
      trabajo: 'Deportista'
    },
    {
      id: 2,
      testimonio:
        'Exercify mejoró mi capacidad física. La app me permitió establecer una rutina de ejercicios diarios, aumentar mi resistencia, fuerza y flexibilidad. Es fácil de usar y tiene una amplia variedad de ejercicios. Lo recomiendo a cualquier persona que quiera mejorar su estado físico.',
      imagen:
        'https://i2-prod.mirror.co.uk/incoming/article13142117.ece/ALTERNATES/s1200d/1_Cristiano-Ronaldo-in-the-gym.jpg',
      nombre: 'Cristiano Ronaldo',
      trabajo: 'Futbolista'
    },
    {
      id: 3,
      testimonio:
        'Exercify mejoró mi capacidad física. La app me permitió establecer una rutina de ejercicios diarios, aumentar mi resistencia, fuerza y flexibilidad. Es fácil de usar y tiene una amplia variedad de ejercicios. Lo recomiendo a cualquier persona que quiera mejorar su estado físico.',
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
        'https://http2.mlstatic.com/D_NQ_NP_140901-MLA20441945472_102015-O.jpg',
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
    <div className="mx-auto max-w-5xl px-4 py-8">
      {slides.map((slide, index) => (
        <div className="w-full" key={index}>
          <div
            className={`slide transition-all duration-500 ease-in-out ${
              index === currentSlide ? 'block' : 'hidden'
            }`}>
            <section className="rounded-lg bg-primary-300/70 p-8 w-full md:flex md:gap-6">
              <img
                alt="Man"
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
      ))}
      <div className="flex justify-center mt-2">
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
    </div>
  )
}

export default Carousel
