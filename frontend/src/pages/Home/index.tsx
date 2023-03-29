import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center">
      <div className="flex flex-col h-72 w-[300px] justify-around items-center">
        <p className="text-4xl font-bold uppercase">
          Conoce nuestros planes de entrenamiento
        </p>

        <div className="flex gap-3 items-center text-center">
          <Link
            to="/login"
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
