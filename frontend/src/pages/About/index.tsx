const About = (): JSX.Element => {
  return (
    <>
      {/* Welcome Tittle and Text */}
      <div className="mx-auto w-2/3 mb-8 mt-8">
        <h1 className="text-7xl font-bold text-center">Power Play Team</h1>
      </div>
      <div className="mx-auto w-2/3 mb-8">
        <p className="text-center">
          ¡Bienvenidos a Power Play! Estamos emocionados de ayudarlos a alcanzar
          sus objetivos de fitness desde la comodidad de su hogar. En nuestra
          aplicación, encontrarán ejercicios personalizados basados en sus
          necesidades. Ya sea que quieran perder peso, tonificar sus músculos o
          mejorar su resistencia, nuestra app tiene todo lo que necesitan.
          ¡Gracias por elegirnos y esperamos ser parte de su viaje hacia un
          estilo de vida saludable desde casa!
        </p>
      </div>
      {/* Card Boxes */}
      <div className="mx-auto flex flex-wrap justify-center gap-4 items-center w-4/5 mb-8">
        <div className="w-[260px] block rounded-xl border border-gray-800 bg-[#0dff00] p-4 shadow-xl">
          <h3 className="mt-3 text-lg font-bold text-black sm:text-xl">
            Con o sin Maquinarias
          </h3>

          <p className="mt-4 text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            nisi tempore modi vel voluptate ullam nostrum adipisci suscipit
            cupiditate, accusamus minus laboriosam totam laborum, deserunt sint.
          </p>
        </div>
        <div className="w-[260px] block rounded-xl border border-gray-800 bg-[#0dff00] p-4 shadow-xl">
          <h3 className="mt-3 text-lg font-bold text-black sm:text-xl">
            Rutinas Personalizadas
          </h3>

          <p className="mt-4 text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            nisi tempore modi vel voluptate ullam nostrum adipisci suscipit
            cupiditate, accusamus minus laboriosam totam laborum, deserunt sint.
          </p>
        </div>
        <div className="w-[260px] block rounded-xl border border-gray-800 bg-[#0dff00] p-4 shadow-xl">
          <h3 className="mt-3 text-lg font-bold text-black sm:text-xl">
            Gana Masa o Tonifica
          </h3>

          <p className="mt-4 text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius
            nisi tempore modi vel voluptate ullam nostrum adipisci suscipit
            cupiditate, accusamus minus laboriosam totam laborum, deserunt sint.
          </p>
        </div>
      </div>
      {/* Next Section */}
    </>
  )
}

export default About
