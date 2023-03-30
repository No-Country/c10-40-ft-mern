import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center bg-hero bg-cover">
      <div className="flex flex-col h-72 max-w-[500px] justify-around items-center hover:animate-spin bg-white/50">
        <p className="text-4xl font-bold uppercase text-black px-12 ">
          Conoce nuestros planes de entrenamiento
        </p>

        <div className="flex gap-3 items-center text-center">
          <Link
            to="/register"
            className="border w-48 p-3 font-semibold rounded-md bg-black border-black text-white hover:bg-gray-300 hover:text-black ease-in-out duration-500">
            Empeza
          </Link>
          <button className="border w-48 p-3 font-semibold rounded-md border-black text-black hover:bg-black hover:text-white ease-in-out duration-500">
            Sobre Nosotros
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
