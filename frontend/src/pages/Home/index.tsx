import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div className="h-[80vh] w-full flex flex-col items-start justify-center bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://hips.hearstapps.com/hmg-prod/images/young-strong-sweaty-focused-fit-muscular-man-with-royalty-free-image-1594652842.jpg?resize=1200:*')] bg-cover pl-40">
      <div className="flex flex-col h-72 max-w-[500px] justify-around  ">
        <p className="text-6xl font-bold uppercase text-white">
          Conocé nuestros planes de entrenamiento
        </p>

        <div className="flex gap-8 mt-10 text-center">
          <Link
            to="/register"
            className="border-2 w-48 p-3 font-semibold text-xl rounded-md bg-[#fb8500] border-[#fb8500]  text-black hover:bg-transparent hover:text-[#fb8500]  ease-in-out duration-500">
            Comenzá
          </Link>
          <Link
            to="/about"
            className="border-2 w-48 p-3 font-semibold text-xl rounded-md bg-transparent text-white hover:bg-white hover:text-black hover:border-transparent ease-in-out duration-500">
            Conocenos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
