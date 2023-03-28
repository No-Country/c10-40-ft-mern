const Register = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 max-w-xl mx-auto">
      <div>Imagen</div>
      <div className="my-5">Registrate</div>

      <form className="flex flex-col gap-4 text-center w-full">
        <input
          className="rounded-md h-10"
          placeholder={'correo@correo.com'}
          value={''}
        />
        <input
          className="rounded-md h-10"
          placeholder={'*********'}
          value={''}
        />
        <input
          className="rounded-md h-10"
          placeholder={'*********'}
          value={''}
        />
        <button className="uppercase bg-white hover:bg-gray-500 ease-in-out duration-300 text-black rounded-md h-10 font-light">
          Confirmar
        </button>
      </form>
    </div>
  )
}

export default Register
