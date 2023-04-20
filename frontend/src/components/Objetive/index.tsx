const Objetives = (): JSX.Element => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-12 px-5 bg-primary-400/60">
      <p className="text-slate-950 text-2xl font-bold border-b border-black pb-2 hover:scale-110 duration-200 ease-in cursor-default">
        {' '}
        Nuestro objetivo
      </p>
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-6 text-black text-lg font-semibold py-8">
          <p className="max-w-lg">
            Nuestra aplicación de ejercicio tiene como objetivo mejorar la salud
            física y mental de los usuarios, brindando una experiencia única y
            personalizada para cada usuario. Nos enfocamos en el ejercicio
            regular y una rutina personalizada para mejorar la calidad de vida
            de nuestros usuarios, ya que sabemos que estos factores tienen un
            impacto significativo en la salud y el bienestar general de las
            personas.
          </p>
        </div>
        <div>
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2023/02/NYPICHPDPICT000007191289.jpg?w=1024"
            alt=""
            className="h-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Objetives
