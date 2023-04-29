import { useState, useEffect } from 'react'
import { Carousel, Charac, Compromise, Objetive, Promo } from 'components'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
const images = [
  {
    id: 0,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682113473/fondos%20ex/banner2_ezocgl.jpg',
    nombre: 'banner1'
  },
  {
    id: 1,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682122083/banner7_h0v0tx.jpg',
    nombre: 'banner2'
  },
  {
    id: 2,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682113469/fondos%20ex/banner3_ypffn5.jpg',
    nombre: 'banner3'
  },
  {
    id: 3,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682113469/fondos%20ex/banner4_lq07wb.jpg',
    nombre: 'banner4'
  },
  {
    id: 5,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682121912/banner5_hqwio3.jpg',
    nombre: 'banner5'
  },
  {
    id: 6,
    imagen:
      'https://res.cloudinary.com/dnqmez68n/image/upload/v1682121912/banner6_v9tqat.webp',
    nombre: 'banner7'
  }
]
const Home = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentIndex])

  return (
    <div className="h-full w-full">
      {images.map((img, index) => (
        <div key={index} className="w-full h-full relative">
          <div
            className={`slide transition-all h-screen duration-500 ease-in-out flex flex-col justify-center items-center md:items-start ${
              index === currentIndex ? 'block' : 'hidden'
            }`}>
            <CSSTransition
              key={index}
              timeout={500}
              classNames="images"
              appear={true}
              in={index === currentIndex}>
              <img
                className="w-full h-full object-cover aspect-auto"
                src={img.imagen}
                alt={img.nombre}
              />
            </CSSTransition>
            <div className="w-full absolute inset-y-0 flex flex-col items-center justify-center md:items-start md:px-8 lg:px-16 bg-primary-bg/40">
              <h1 className="text-shadow shadow-black/60 text-4xl font-Barlow p-7 md:text-6xl font-bold uppercase max-w-lg text-white">
                Conocé nuestros planes de entrenamiento
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 md:mt-10 text-center p-7">
                <Link
                  to="/register"
                  className="border-2 md:w-48 px-10 p-3 uppercase font-Barlow font-bold md:text-xl rounded-md bg-primary-400/80 border-transparent text-primary-bg hover:bg-primary-400 hover:text-primary-bg  ease-in-out duration-500">
                  Comenzá
                </Link>
                <a
                  href="#objective"
                  className="border-2 md:w-48 px-10 p-3 font-Barlow uppercase font-bold md:text-xl rounded-md bg-transparent text-primary-100 hover:bg-primary-400 hover:text-primary-bg hover:border-transparent ease-in-out duration-500">
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Objetive />

      <Charac />

      <Compromise />

      <div
        id="testimonios"
        className="w-full flex flex-col items-center justify-center my-10">
        <h1 className="heading text-primary-400/60 border-b-primary-400/60">
          Nuestros clientes nos recomiendan
        </h1>
        <Carousel />
      </div>

      <Promo />
    </div>
  )
}

export default Home
