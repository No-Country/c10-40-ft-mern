import { Loader } from 'components'
import { useUser } from 'hooks/useUser'

const ProfileCard = (): JSX.Element => {
  const { data, isLoading } = useUser()
  let imgSrc
  if (data?.gender === 'Masculino') {
    imgSrc =
      'https://cdn3.iconfinder.com/data/icons/my-business-icons/200/BusinessIcon-03-512.png'
  } else if (data?.gender === 'Femenino') {
    imgSrc = 'https://www.mediawind.be/images/tete_4.png'
  }
  // TODO: profile picture
  return (
    <div className="max-w-screen-lg w-full h-full lg:mx-auto ">
      <h1 className="uppercase font-Barlow font-bold text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-12 text-center">
        Bienvenido a tu Perfil
      </h1>
      <div className="p-7 flex flex-col items-center justify-center h-auto md:flex-row gap-5">
        {/* Profile */}
        {isLoading ? (
          <Loader type={'card'} />
        ) : (
          <div className="w-full md:w-1/2 border-2 border-primary-100 mt-12 md:mt-0 py-10 rounded-lg h-full md:min-h-1/2 md:h-auto flex flex-col justify-center items-center gap-5">
            <img
              src={data?.imagen ?? imgSrc}
              alt="profile"
              className="w-auto max-h-56 p-4"
            />
            <div className="flex flex-col  gap-4">
              <p>
                Nombre:{' '}
                <span className="font-bold text-primary-400 text-xl">
                  {/* {data?.first_name} */} aca va el nombre
                </span>{' '}
              </p>
              <p>
                Email:{' '}
                <span className="font-bold text-primary-400 text-xl">
                  {data?.email}
                </span>{' '}
              </p>
            </div>
          </div>
        )}

        {/* Data User */}
        {isLoading ? (
          <Loader type={'text'} />
        ) : (
          <div className="w-full md:w-1/2  flex flex-col gap-5 h-full md:justify-center ">
            <div className="border-2 border-primary-100 rounded-lg md:min-h-1/3 my-10">
              <div className="flex flex-col justify-center h-full text-sm p-5">
                <div className="flex justify-between items-center border-b-2 py-3 ">
                  <p className="text-lg font-thin">Altura:</p>
                  <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                    {data?.height ?? 'n/a'} cm
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3 ">
                  <p className="text-lg font-thin">Peso:</p>
                  <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                    {data?.weight ?? 'n/a'} Kg
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2 py-3 ">
                  <p className="text-lg font-thin">Genero:</p>
                  <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                    {data?.gender ?? 'n/a'}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3 ">
                  <p className="text-lg font-thin">Edad:</p>
                  <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                    {data?.age ?? 'n/a'} years
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden h-1/4 mx-auto md:flex md:flex-col w-full">
        <p className="mx-auto text-primary-400 font-Barlow font-bold text-xl md:text-2xl  my-6 pb-2 duration-200 ease-in cursor-default">
          Aprovecha ahora
        </p>
        <div className="h-full w-3/4 mx-auto cursor-pointer hover:scale-95 ease-in duration-200 text-white rounded-xl bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://th.bing.com/th/id/OIP.FK_MACdcUiwgamCrPy04WAHaE7?pid=ImgDet&rs=1')] bg-center bg-cover">
          <div className="flex flex-col justify-around mx-5 h-full">
            <p className="font-bold text-3xl ">
              Convertite en{' '}
              <span className="text-primary-500 text-4xl font-Barlow">
                Exercify+
              </span>
            </p>
            <p className="mx-auto text-2xl text-primary-500 font-semibold">
              Ahorra hasta un <span className="font-bold text-white">50%</span>{' '}
              con nuestro plan <span className="font-bold text-white">PRO</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
