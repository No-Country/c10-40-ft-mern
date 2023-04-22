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
    nombre: 'banner6'
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
        <CSSTransition
          key={index}
          timeout={500}
          classNames="images"
          appear={true}
          in={index === currentIndex}>
          <div className="w-full h-full">
            <div
              className={`slide transition-all duration-500 ease-in-out bg-cover bg-center h-[60vh] flex flex-col justify-center items-center md:items-start ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
              style={{ backgroundImage: `url(${img.imagen})` }}>
              <p className="text-4xl font-Barlow p-7 md:text-6xl font-bold uppercase max-w-lg text-white">
                Conocé nuestros planes de entrenamiento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 md:mt-10 text-center p-7">
                <Link
                  to="/register"
                  className="border-2 md:w-48 px-10 p-3 font-semibold md:text-xl rounded-md bg-primary-400 border-primary-400  text-black hover:bg-transparent hover:text-primary-400  ease-in-out duration-500">
                  Comenzá
                </Link>
                <Link
                  to="/about"
                  className="border-2 md:w-48 px-10 p-3 font-semibold md:text-xl rounded-md bg-transparent text-white hover:bg-white hover:text-black hover:border-transparent ease-in-out duration-500">
                  Conocenos
                </Link>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
      <Objetive />

      <Charac />

      <Compromise />

      <div className="w-full flex flex-col items-center justify-center my-10">
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
