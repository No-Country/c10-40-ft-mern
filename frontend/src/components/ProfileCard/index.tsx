const ProfileCard = (): JSX.Element => {
  return (
    <div className="bg-gray-900/60 max-w-[1024px] w-full h-full lg:mx-auto flex-1 ">
      <div className="p-7 flex flex-col items-center justify-center h-[100%] md:flex-row gap-5">
        {/* Profile */}
        <div className="w-full md:w-1/2 bg-white rounded-lg h-full md:h-1/2 flex flex-col justify-center items-center gap-5">
          <img
            src="https://th.bing.com/th/id/R.cd11bbffa7058e1e537714db756fd292?rik=S4NZoZfqS3il%2bQ&pid=ImgRaw&r=0"
            alt="profile"
            className="w-auto max-h-40 p-4"
          />
          <div className="flex flex-col  gap-4">
            <p>
              Nombre: <span className="font-bold">Mateo</span>{' '}
            </p>
            <p>
              Email: <span className="font-bold">mateo@mateo.com</span>{' '}
            </p>
            <button className="bg-black text-white p-1 rounded-lg mb-3">
              Cerrar Sesion
            </button>
          </div>
        </div>
        {/* Data User */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 h-full md:justify-center">
          <div className="bg-white rounded-lg md:h-1/3 my-10">
            <div className="flex flex-col justify-center h-full text-sm p-5">
              <div className="flex justify-between items-center border-b-2">
                <p>Altura:</p>
                <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                  176cm
                </p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p>Peso:</p>
                <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                  78kg
                </p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p>Genero:</p>
                <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                  Masculino
                </p>
              </div>
              <div className="flex justify-between items-center border-b-2">
                <p>Edad:</p>
                <p className="font-bold bg-green-400 rounded-md p-2 m-2">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
