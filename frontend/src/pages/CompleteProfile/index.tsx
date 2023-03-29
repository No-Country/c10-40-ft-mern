const CompleteProfile = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div>Imagen</div>
        <div className="my-5">Completa tu perfil</div>

        <form className="flex flex-col gap-4 text-center w-full p-10">
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'Género'}
            value={''}
          />
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'Años'}
            value={''}
          />
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'Peso'}
            value={''}
          />
          <input
            className="rounded h-10 bg-transparent border border-black placeholder-gray-600 p-2"
            placeholder={'Altura'}
            value={''}
          />
          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CompleteProfile