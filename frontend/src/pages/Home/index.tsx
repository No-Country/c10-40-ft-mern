import { Carousel, Charac, Compromise, Objetive, Promo } from 'components'
import { Link } from 'react-router-dom'

/*
 *
 * TODO: CAMBIAR TEXTO EN H1.
 *
 */

const Home = (): JSX.Element => {
  return (
    <div className="h-full w-full">
      <div className="h-screen w-full flex flex-col items-start justify-center sm:pl-20 md:pl-40 bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://hips.hearstapps.com/hmg-prod/images/young-strong-sweaty-focused-fit-muscular-man-with-royalty-free-image-1594652842.jpg?resize=1200:*')] bg-cover bg-fixed">
        <div className="flex flex-col h-72 max-w-[500px] justify-around  ">
          <h1 className="text-2xl font-Barlow p-7 md:text-6xl font-bold uppercase text-white">
            Conocé nuestros planes de entrenamiento
          </h1>
          <div className="flex items-center flex-col sm:flex-row gap-4 md:gap-8 md:mt-10 text-center p-7">
            <Link
              to="/register"
              className="button w-2/4 border-2 border-transparent lg:text-2xl bg-primary-400/80 text-primary-bg hover:bg-primary-400 hover:text-primary-bg">
              Comenzá
            </Link>
            <Link
              to="/about"
              className="button w-2/4 lg:text-2xl border-2 border-primary-100 text-primary-100 hover:border-primary-400 hover:bg-primary-400 hover:text-primary-bg">
              Conocenos
            </Link>
          </div>
        </div>
      </div>
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
