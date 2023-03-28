const CompleteProfile = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 max-w-xl mx-auto">
      <div>Imagen</div>
      <div className="my-5">Completa tu perfil</div>

      <form className="flex flex-col gap-4 text-center w-full">
        <input className="rounded-md h-10" placeholder={'Género'} value={''} />
        <input className="rounded-md h-10" placeholder={'Años'} value={''} />
        <input className="rounded-md h-10" placeholder={'Peso'} value={''} />
        <input className="rounded-md h-10" placeholder={'Altura'} value={''} />
        <button className="uppercase bg-white hover:bg-gray-500 ease-in-out duration-300 text-black rounded-md h-10 font-light">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default CompleteProfile
