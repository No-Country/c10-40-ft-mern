import { Link } from 'react-router-dom'

const Dash = (): JSX.Element => {
  return (
    <div className="max-w-[1024px] lg:w-[1024px] my-10 mx-10 h-auto flex flex-col justify-around md:grid md:grid-cols-2 md:grid-rows-3 gap-5 md:mx-5 xl:mx-auto">
      <Link
        to={'/dashboard/summary'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://th.bing.com/th/id/OIP.999TPTVt_T0MLB8r1FLTagHaDt?pid=ImgDet&w=800&h=400&rs=1')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Calendario</p>
      </Link>
      <Link
        to={'/dashboard/routine'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://th.bing.com/th/id/OIP.H3h_PXhO6ocD7sqyLtpxuwHaE8?pid=ImgDet&w=847&h=565&rs=1')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Rutina</p>
      </Link>
      <div className="md:col-span-2 md:h-4/5 cursor-pointer hover:scale-95 ease-in duration-200 text-white rounded-xl md:my-auto bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1680880048/banner_b0oxja.png')] bg-center bg-cover">
        <div className="flex flex-col justify-around mx-5 h-full">
          <p className="uppercase text-2xl">Hacete miembro!</p>
          <p className="font-bold text-5xl font-mono">
            SE <span className="text-green-500">POWERPRO</span>
          </p>
          <p className="mx-auto text-2xl font-semibold">
            Ahorra hasta un <span className="text-green-500">50%</span> con
            nuestro plan <span className="text-green-500">PRO</span>
          </p>
        </div>
      </div>
      <Link
        to={'/dashboard/stats'}
        className="flex justify-center h-2/5 md:h-full items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://rukminim1.flixcart.com/image/416/416/kmwcuq80/poster/9/m/f/medium-gym-boy-girl-poster-poster-for-decoration-wall-sticker-original-imagfp6gtmhgxcmm.jpeg?q=70')] md:bg-center bg-cover">
        <p className="font-bold text-lg md:text-2xl text-white">Estadisticas</p>
      </Link>
      <div className="flex flex-col md:justify-around justify-start gap-3 h-2/4 md:h-full">
        <Link
          to={'/contact'}
          className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-2/5 md:h-3/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://img.edilportale.com/product-thumbs/b_reception-bralco-374183-rel49fd26f6.jpg')] bg-cover bg-center">
          <p className="font-bold text-lg md:text-2xl text-white">
            Contactanos
          </p>
        </Link>
        <Link
          to={'/'}
          className="flex justify-center items-center cursor-pointer hover:scale-95 ease-in duration-200 rounded-md h-1/4 md:h-2/5 bg-[linear-gradient(to_right_top,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('https://th.bing.com/th/id/R.67822b0404bb406550ccd347679f60ea?rik=DQMSo8DCgPqZbg&pid=ImgRaw&r=0')] bg-cover bg-center">
          <p className="font-bold text-lg md:text-2xl text-white">
            Cerrar Sesion
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Dash
