const Compromise = (): JSX.Element => {
  return (
    <div className="py-10 flex flex-col items-center justify-center px-5 lg:gap-12 bg-primary-400/60">
      <p className="text-slate-950 text-2xl font-bold border-b border-black pb-2 hover:scale-110 duration-200 ease-in cursor-default">
        {' '}
        Compromiso
      </p>
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-6 text-black text-lg font-semibold py-8">
          <p className="max-w-lg">
            Estamos comprometidos en hacer el ejercicio fácilmente accesible y
            personalizado para nuestros usuarios, proporcionando rutinas
            adaptadas a sus necesidades y objetivos específicos para mejorar su
            bienestar general. Creemos que el ejercicio regular es clave para un
            estilo de vida saludable y nuestra aplicación está diseñada para
            motivar y ayudar a las personas a mantenerse en forma de manera
            efectiva y conveniente.
          </p>
        </div>
        <div>
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/bicycle-crunch.jpg?quality=82&strip=1"
            alt=""
            className="h-auto w-full max-w-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Compromise
