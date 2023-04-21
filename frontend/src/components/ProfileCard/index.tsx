import { Loader } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'

const frases = [
  'El éxito en el entrenamiento no se logra con un solo golpe, sino con la suma de pequeños esfuerzos que se hacen día tras día',
  'No importa cuánto tiempo te tome, lo importante es que no dejes de avanzar y nunca te rindas',
  'El dolor que sientes hoy será tu fuerza mañana',
  'El éxito no es para aquellos que tienen buena suerte, sino para aquellos que trabajan duro y nunca se rinden',
  'El entrenamiento no es un destino, es un viaje. Disfruta del camino',
  'No te rindas, los comienzos son difíciles, pero los resultados valen la pena',
  'El entrenamiento no es solo para el cuerpo, también es para la mente y el alma',
  'Si no te desafías a ti mismo, nunca sabrás de lo que eres capaz',
  'La clave del éxito en el entrenamiento es la consistencia',
  'Mientras más te esfuerces, más grande será la recompensa'
]

const ProfileCard = (): JSX.Element => {
  const { data, isLoading } = useUser()
  console.log(data?.profileCompleted)
  const [motivacion, setMotivacion] = useState(
    frases[Math.floor(Math.random() * frases.length)]
  )
  const [imc, setImc] = useState(0)
  const [mensaje, setMensaje] = useState('')
  let imgSrc
  if (data?.gender === 'Masculino') {
    imgSrc =
      'https://cdn3.iconfinder.com/data/icons/my-business-icons/200/BusinessIcon-03-512.png'
  } else if (data?.gender === 'Femenino') {
    imgSrc = 'https://www.mediawind.be/images/tete_4.png'
  }

  useEffect(() => {
    if (data) {
      if (data.height && data.weight) {
        const { weight, height } = data
        const mtrHeight = height / 100
        const result = weight / (mtrHeight * mtrHeight)
        setImc(Number(result.toFixed(2)))

        if (result < 18.5) {
          setMensaje('Bajo peso')
        } else if (result >= 18.5 && result < 25) {
          setMensaje('Peso normal')
        } else if (result >= 25 && result < 30) {
          setMensaje('Sobrepeso')
        } else {
          setMensaje('Obesidad')
        }
      }
    }
  }, [data])

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
                  {data?.firstName}
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
                {imc !== 0 ? (
                  <div className="flex justify-between items-center border-b-2 py-3 ">
                    <p className="text-lg font-thin">IMC:</p>
                    <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                      {imc}
                    </p>
                  </div>
                ) : null}
                {mensaje !== '' ? (
                  <div className="flex justify-between items-center border-b-2 py-3 ">
                    <p className="text-lg font-thin">Estado IMC:</p>
                    <p className="font-bold bg-primary-400 w-28 text-center rounded-md p-2 m-2 text-lg text-primary-bg font-WS">
                      {mensaje}
                    </p>
                  </div>
                ) : null}
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
          Recorda
        </p>
        <div className="h-full w-3/4 mx-auto cursor-pointer hover:scale-95 ease-in duration-200 text-white rounded-xl bg-[linear-gradient(to_right_top,rgba(0,0,0,0.4),rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dnqmez68n/image/upload/v1682018542/fotos%20banner/banner1_ur1k7f.jpg')] bg-center bg-cover">
          <div className="flex flex-col justify-around mx-5 h-full">
            <p className="font-bold text-3xl text-primary-500 ">{motivacion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
