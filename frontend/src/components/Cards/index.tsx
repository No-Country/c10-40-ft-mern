import { SiBookmeter } from 'react-icons/si'
import { Link } from 'react-router-dom'
// import {
//   ImStatsBars,
//   ImHome3,
//   ImCalendar,
//   ImProfile,
//   ImNotification,
//   ImUnlocked
// } from 'react-icons/im'
// import { Link } from 'react-router-dom'

const Cards = (): JSX.Element => {
  return (
    <div className="grid grid-rows-3 p-6 justify-center gap-5 h-full w-full">
      <div className="flex flex-col md:flex-row w-full gap-5 items-center justify-around">
        {/* Summary */}
        <Link
          to={'/dashboard/summary'}
          className="h-full w-full bg-contain bg-no-repeat bg-center text-center rounded-xl bg-white bg-[url('https://play-lh.googleusercontent.com/bHJ1urQPzOdE71NCjb7LcE3al0e_KTelqGU2uaHIKjoHXFqkYyzwARS0MOE4_Lb4ZA')]">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className=" text-base">Aca van los ejercicios que hiciste</p>
          </div>
        </Link>

        {/* Stats */}
        <Link
          to={'/dashboard/stats'}
          className="h-full w-full bg-contain bg-no-repeat bg-center text-center rounded-xl bg-white bg-[url('https://i0.wp.com/verderamade.com/wp-content/uploads/2020/12/primary-color.png?fit=1062%2C656&ssl=1')]">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">Estadisticas</div>
            <p className=" text-base">Aca van las estadisticas</p>
          </div>
        </Link>

        {/* Schedule */}
        <Link
          to={'/dashboard/schedule'}
          className="h-full w-full bg-contain bg-no-repeat bg-center text-center rounded-xl bg-white bg-[url('https://cdn-icons-png.flaticon.com/512/1869/1869397.png')]">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">Calendario</div>
            <p className=" text-base">
              Aca van el calendario de mierda que elegiste
            </p>
          </div>
        </Link>
      </div>
      {/* promo */}
      <div className="flex w-full gap-5 items-center justify-around">
        <div className="h-2/3 w-full bg-cover text-center rounded-xl bg-[url('https://image.freepik.com/vector-gratis/pagina-inicio-promocion-gimnasio-foto_23-2148312766.jpg')]">
          {/* <div className="mb-8">
            <SiBookmeter size={10} />
            <p className="text-sm text-gray-600 flex items-center">
              Workout Tracker
            </p>
            <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className="text-gray-700 text-base">
              Aca van los ejercicios que hiciste
            </p>
          </div> */}
        </div>
        <div className="h-2/3 w-full bg-cover text-center rounded-xl bg-[url('https://f.ptcdn.info/582/044/000/oapn5md2G99q6OSRwr-o.jpg')]">
          {/* <div className="mb-8">
            <SiBookmeter size={10} />
            <p className="text-sm text-gray-600 flex items-center">
              Workout Tracker
            </p>
            <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className="text-gray-700 text-base">
              Aca van los ejercicios que hiciste
            </p>
          </div> */}
        </div>
        <div className="h-2/3 w-full bg-cover text-center rounded-xl bg-[url('https://f.ptcdn.info/582/044/000/oapn5md2G99q6OSRwr-o.jpg')]">
          {/* <div className="mb-8">
            <SiBookmeter size={10} />
            <p className="text-sm text-gray-600 flex items-center">
              Workout Tracker
            </p>
            <div className=" p-2 text-gray-900 font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className="text-gray-700 text-base">
              Aca van los ejercicios que hiciste
            </p>
          </div> */}
        </div>
      </div>
      {/* chiquitos */}
      <div className="flex w-full gap-5 items-center justify-around">
        <div className="h-full w-full bg-contain bg-no-repeat text-center bg-white rounded-xl bg-[url('https://i0.wp.com/verderamade.com/wp-content/uploads/2020/12/primary-color.png?fit=1062%2C656&ssl=1')] bg-center">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className=" text-base">Aca van los ejercicios que hiciste</p>
          </div>
        </div>
        <div className="h-full w-full bg-contain bg-no-repeat text-center bg-white rounded-xl bg-[url('https://i0.wp.com/verderamade.com/wp-content/uploads/2020/12/primary-color.png?fit=1062%2C656&ssl=1')] bg-center">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className=" text-base">Aca van los ejercicios que hiciste</p>
          </div>
        </div>
        <div className="h-full w-full bg-contain bg-no-repeat text-center bg-white rounded-xl bg-[url('https://i0.wp.com/verderamade.com/wp-content/uploads/2020/12/primary-color.png?fit=1062%2C656&ssl=1')] bg-center">
          <div className="bg-black/60 ease-in duration-200 hover:bg-transparent hover:text-transparent rounded-md p-5 h-full text-white">
            <SiBookmeter size={10} />
            <p className="text-sm  flex items-center">Workout Tracker</p>
            <div className=" p-2  font-bold text-xl mb-2">
              Resumen semanal de ejercicios
            </div>
            <p className=" text-base">Aca van los ejercicios que hiciste</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards
