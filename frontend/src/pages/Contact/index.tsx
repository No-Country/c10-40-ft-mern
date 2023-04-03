const Contact = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center bg-white rounded-xl mx-5 w-[80%] md:max-w-[50%] lg:max-w-[40%]">
        <div className="w-full pl-5 pt-5"></div>
        <div>Imagen</div>
        <div className="my-5">CONTACTANOS</div>
        <form className="flex flex-col gap-4 text-center w-full p-10">
          <div className="relative">
            <input
              type="input"
              id="name"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su nombre
            </label>
          </div>
          <div className="relative">
            <input
              type="mail"
              id="mail"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="mail"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Ingrese su mail
            </label>
          </div>
          <div className="relative">
            <input
              type="input"
              id="subject"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="subject"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Asunto
            </label>
          </div>
          <div className="relative">
            <textarea
              rows={4}
              id="message"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="mesagge"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Mensaje
            </label>
          </div>
          <button className="uppercase bg-gray-300 hover:bg-gray-500 hover:text-white ease-in-out duration-300 text-black rounded-md h-10 font-light">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
