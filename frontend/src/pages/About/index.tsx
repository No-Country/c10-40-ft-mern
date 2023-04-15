import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const About = (): JSX.Element => {
  return (
    <>
      <h1 className="text-xl h-12 mx-auto font-bold text-center">
        ¿Quiénes somos?
      </h1>
      <div className="h-auto w-full flex flex-col items-start justify-center"></div>
      <div className="mx-auto w-2/3 mb-8">
        <p className="text-center font-normal">
          ¡Bienvenidos a exercify! Estamos emocionados de ayudarlos a alcanzar
          sus objetivos de fitness desde la comodidad de su hogar. En nuestra
          aplicación, encontrarán ejercicios personalizados basados en sus
          necesidades. Ya sea que quieran perder peso, tonificar sus músculos o
          mejorar su resistencia, nuestra app tiene todo lo que necesitan.
          ¡Gracias por elegirnos y esperamos ser parte de su viaje hacia un
          estilo de vida saludable desde casa!
        </p>
      </div>
      <h2 className="text-xl h-12 mx-auto font-bold text-center font ">
        El Equipo
      </h2>
      {/* Cards */}
      <div className="mx-auto flex flex-wrap justify-center gap-5 items-center max-w-screen-lg">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://avatars.githubusercontent.com/u/99854895?v=4"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Mateo Salinas
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Frontend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/matuumdq"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/mateosalinas/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://avatars.githubusercontent.com/u/105481641?v=4"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Maximiliano Arbelais
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Frontend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/arbelais"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/arbelaism/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://avatars.githubusercontent.com/u/95669607?v=4"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Damián Barera
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Frontend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/Damian-Barera"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/damian-barera/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://avatars.githubusercontent.com/u/62260320?v=4"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Diego Yako
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Frontend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/diegoyako"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/diegoyako/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://media.licdn.com/dms/image/D4E03AQHjnuKw3LR3FQ/profile-displayphoto-shrink_400_400/0/1674691852739?e=1686787200&v=beta&t=ORhlQoE3_2P8848aOf5tvHk6kyyhBxailWZih_Isl-M"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Lucas Macias
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Backend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/l-macias"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/l-macias/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://avatars.githubusercontent.com/u/91107387?v=4"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Yon Roa
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Backend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/yonroa"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/yompa/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10 ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://res.cloudinary.com/du2ewwzsg/image/upload/v1681593817/WhatsApp_Image_2023-04-15_at_18.14.34_nwegv4.jpg"
              alt=" "
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Leonardo Garcia
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Backend Developer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/Jose-Leonardo"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                target="blank">
                <AiFillGithub></AiFillGithub>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
