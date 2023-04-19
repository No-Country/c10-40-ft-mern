import { JWT_TOKEN } from 'app/constants'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dash = (): JSX.Element => {
  const userQuery = useUser()
  const { data } = userQuery
  const navigate = useNavigate()
  useEffect(() => {
    if (data) {
      if (!userQuery.isLoading && !data.profileCompleted) {
        navigate('/completeprofile')
      }
    }
  }, [data, userQuery.isLoading, navigate])
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
          <p className="font-bold text-5xl font-mono">
            SE <span className="text-green-500">PRO-Fy</span>
          </p>
          <p className="mx-auto text-2xl font-semibold">
            Ahorra hasta un <span className="text-green-500">50%</span> con
            nuestro plan <span className="text-green-500">PRO</span>
          </p>
        </div>
      </div>
      <Link
        to={'/dashboard/stats'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153866/stats_z0fje1.webp')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Estadisticas</p>
      </Link>
      <div className="flex flex-col md:justify-around justify-start gap-3 h-2/4 md:h-full">
        <Link
          to={'/contact'}
          className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-2/5 md:h-3/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153864/contactus_pdqigt.webp')] bg-cover bg-center">
          <p className="font-bold text-lg md:text-2xl text-white">
            Contactanos
          </p>
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem(JWT_TOKEN)
            window.location.reload()
          }}
          className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-1/4 md:h-2/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1681153856/cerrar_wlsz11.jpg')] bg-cover bg-center">
          <p className="font-bold text-lg md:text-2xl text-white">
            Cerrar Sesion
          </p>
        </button>
      </div>
    </div>
  )
}

export default Dash
