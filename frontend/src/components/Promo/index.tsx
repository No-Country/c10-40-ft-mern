import { useNavigate } from 'react-router-dom'

const Promo = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-5 bg-primary-400/60 w-full">
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-3/4 px-6 bg-primary-bg/90 my-8 rounded-2xl max-w-screen-sm">
        <div className="flex flex-col gap-6 text-primary-400 p-4 text-lg font-semibold py-8">
          <p className="text-2xl text-center uppercase">
            Registrate en nuestra web, y consegui un 15% de descuento en nuestro
            plan especial y personalizado: Exercify+
          </p>
          <button
            onClick={() => {
              navigate('/register')
            }}
            className="text-lg uppercase max-w-72 mx-auto px-4 py-2 font-semibold bg-primary-400/70 hover:scale-110 ease-in-out duration-300 text-primary-bg rounded-md">
            Registrate Gratis
          </button>
        </div>
      </div>
    </div>
  )
}

export default Promo
