import { SideBarMenu } from 'components'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Stats = (): JSX.Element => {
  const navigate = useNavigate()

  return (
      <div className="w-full max-w-[1024px] lg:w-[1024px] my-10 mx-10 md:mx-5 xl:mx-auto">
        <button
          onClick={() => {
            navigate('/dashboard')
          }}>
          <BsFillArrowLeftCircleFill size={30} />
        </button>
        <div className="h-full md:h-[80vh] flex flex-col justify-around md:mx-20">
          {/* Semanal */}
          <div className="shadow-xl rounded-md h-2/5 w-full p-5">
            <p className="font-bold text-2xl">Semanal</p>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 h-4/5 pt-2">
              <div className="w-1/2 mx-auto h-full bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://jonathanweisberg.org/img/referee_gender_files/unnamed-chunk-16-1.png')] bg-cover bg-center"></div>
              <div className="w-1/2 h-2/3 flex flex-col justify-around font-semibold text-lg">
                <p>Series Realizadas: </p>
                <p>Cantidad de Ejercicios finalizados: </p>
                <p>Rutinas Finalizadas: </p>
              </div>
            </div>
          </div>
          {/* Mensual */}
          <div className="shadow-xl rounded-md h-2/5 w-full p-5">
            <p className="font-bold text-2xl">Mensual</p>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 h-4/5 pt-2">
              <div className="w-1/2 mx-auto h-full bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://jonathanweisberg.org/img/referee_gender_files/unnamed-chunk-16-1.png')] bg-cover bg-center"></div>
              <div className="w-1/2 h-2/3 flex flex-col justify-around font-semibold text-lg">
                <p>Series Realizadas: </p>
                <p>Cantidad de Ejercicios finalizados: </p>
                <p>Rutinas Finalizadas: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Stats
