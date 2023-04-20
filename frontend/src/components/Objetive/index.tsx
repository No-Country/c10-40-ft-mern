const Objetives = (): JSX.Element => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-12 px-5 bg-primary-400/60">
      <p className="text-slate-950 text-2xl font-bold border-b border-black pb-2 hover:scale-110 duration-200 ease-in">
        {' '}
        Nuestro objetivo
      </p>
      <div className="flex flex-col gap-6 lg:gap-20 lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex flex-col gap-6 text-black text-lg font-semibold py-8">
          <p className="max-w-lg">
            Nuestra aplicación de ejercicio tiene como objetivo principal ayudar
            a mejorar la salud y el bienestar general de nuestros usuarios.
            Creemos que el ejercicio regular y una rutina personalizada pueden
            tener un impacto significativo en la salud física y mental de las
            personas.{' '}
          </p>
          <p className="max-w-lg">
            Nuestro sistema de registro ayuda a mantener a los usuarios
            motivados y responsables de su progreso. Con la opción de ver y
            elegir las rutinas desde un calendario, la aplicación hace que sea
            fácil planificar y seguir una rutina de ejercicios.
          </p>
          <p className="max-w-lg">
            Nos esforzamos por hacer que el ejercicio sea accesible y fácil de
            incorporar en la vida cotidiana de nuestros usuarios. Al ofrecer la
            opción de elegir cuántos días a la semana quieren hacer ejercicio,
            nuestra aplicación se adapta a los horarios y necesidades de cada
            persona. Además, nuestras rutinas personalizadas aseguran que cada
            usuario reciba un entrenamiento adaptado a sus necesidades y
            objetivos específicos.
          </p>

          <p className="max-w-lg">
            En resumen, nuestra aplicación de ejercicio tiene como objetivo
            mejorar la salud física y mental de nuestros usuarios, haciéndolo
            fácil y accesible para todos. Creemos que el ejercicio regular es
            una parte importante de un estilo de vida saludable y estamos
            comprometidos a ayudar a nuestros usuarios a alcanzar sus objetivos
            de fitness.
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
