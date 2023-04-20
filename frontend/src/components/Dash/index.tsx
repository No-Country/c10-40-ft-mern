import { JWT_TOKEN } from 'app/constants'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Dash = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="max-w-[1024px] lg:w-[1024px] my-20 mx-10 h-full lg:h-auto flex flex-col justify-around md:grid md:grid-cols-2 md:grid-rows-3 gap-5 md:mx-auto xl:mx-auto">
      <Link
        to={'/dashboard/schedule'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153869/calendario_nejz0y.jpg')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Calendario</p>
      </Link>
      <Link
        to={'/dashboard/routine'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153861/routine_odkoqm.jpg')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Rutina</p>
      </Link>
      <div className="md:col-span-2 md:h-4/5 cursor-pointer hover:scale-95 ease-in duration-200 text-white rounded-xl md:my-auto bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1680880048/banner_b0oxja.png')] bg-center bg-cover">
        <div className="flex flex-col justify-around mx-5 h-full">
          <p className="uppercase text-2xl">Hacete miembro!</p>
          <p className="font-bold text-3xl ">
            SE{' '}
            <span className="text-primary-500 text-4xl font-Barlow">
              Exercify+
            </span>
          </p>
          <p className="mx-auto text-2xl font-semibold">
            Ahorra hasta un <span className="text-primary-500">50%</span> con
            nuestro plan <span className="text-primary-500">PRO</span>
          </p>
        </div>
      </div>
      <Link
        to={'/contact'}
        className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-2/5 md:h-3/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153864/contactus_pdqigt.webp')] bg-cover bg-center">
        <p className="font-bold text-lg md:text-2xl text-white">Contactanos</p>
      </Link>

      <div
        onClick={() => {
          Cookies.remove(JWT_TOKEN)
          navigate('/login')
        }}
        className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-2/5 md:h-3/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153856/cerrar_wlsz11.jpg')] bg-cover bg-center">
        <p className="font-bold text-lg md:text-2xl text-white">
          Cerrar Sesion
        </p>
      </div>
    </div>
  )
}

export default Dash
