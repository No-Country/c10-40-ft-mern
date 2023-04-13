import { Link } from "react-router-dom"

const CreateRutine = (): JSX.Element => {


  return (
      <div className="p-7 flex flex-col items-center w-full">
        <h2 className="font-bold text-2xl my-6">
          Elegi la cantidad de dias que vas a entrenar en la semana!
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap">
          <Link to='/dashboard/schedule' className="flex flex-col items-center justify-center m-7 p-6 gap-5 rounded-lg cursor-pointer w-56 h-44 hover:scale-110 ease-in duration-200 bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://th.bing.com/th/id/OIP.0wpdnJAgO1sHM5BzspKS9QHaD0?pid=ImgDet&w=700&h=361&rs=1')] bg-cover">
            <p className="text-white font-semibold text-2xl">2 DIAS</p>
            <p className="text-white font-light text-xl">+ Cardio</p>
          </Link>
          <Link to='/dashboard/schedule' className="flex flex-col items-center justify-center m-7 p-6 gap-5 rounded-lg cursor-pointer w-56 h-44 hover:scale-110 ease-in duration-200 bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://ryuublog.com/wp-content/uploads/2019/02/20180409215356-300x200.jpg')] bg-cover">
            <p className="text-white font-semibold text-2xl">3 DIAS</p>
            <p className="text-white font-light text-xl">Sin Cardio</p>
          </Link>
          <Link to='/dashboard/schedule' className="flex flex-col items-center justify-center m-7 p-6 gap-5 rounded-lg cursor-pointer w-56 h-44 hover:scale-110 ease-in duration-200 bg-[linear-gradient(to_right_top,rgba(0,0,0,1),rgba(255,255,255,0.3)),url('https://i.insider.com/5b6dd5b564dce81d008b4ea2?width=600&format=jpeg&auto=webp')] bg-cover">
            <p className="text-white font-semibold text-2xl">5 DIAS</p>
            <p className="text-white font-light text-xl">+ Cardio</p>
          </Link>
        </div>
      </div>
  )
}

export default CreateRutine
