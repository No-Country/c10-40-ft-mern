import { type IUser } from 'app/types'
import { Loader } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProfileCard = (): JSX.Element => {
  const { data, isLoading } = useUser()
  console.log(data)
  // TODO: profile picture
  return (
    <div className=" max-w-screen-lg w-full h-full lg:mx-auto flex-1 ">
      <div className="p-7 flex flex-col items-center justify-center h-[100%] md:flex-row gap-5">
        {/* Profile */}
        {isLoading ? (
          <Loader type={'card'} />
        ) : (
          <div className="w-full md:w-1/2 bg-white rounded-lg h-full md:h-1/2 flex flex-col justify-center items-center gap-5">
            <img
              src="https://th.bing.com/th/id/R.cd11bbffa7058e1e537714db756fd292?rik=S4NZoZfqS3il%2bQ&pid=ImgRaw&r=0"
              alt="profile"
              className="w-auto max-h-40 p-4"
            />
            <div className="flex flex-col  gap-4">
              <p>
                Nombre: <span className="font-bold">{data?.firstName}</span>{' '}
              </p>
              <p>
                Email: <span className="font-bold">{data?.email}</span>{' '}
              </p>
            </div>
          </div>
        )}

        {/* Data User */}
        {isLoading ? (
          <Loader type={'text'} />
        ) : (
          <div className="w-full md:w-1/2 flex flex-col gap-5 h-full md:justify-center">
            <div className="bg-white rounded-lg md:h-1/3 my-10">
              <div className="flex flex-col justify-center h-full text-sm p-5">
                <div className="flex justify-between items-center border-b-2">
                  <p>Altura:</p>
                  <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                    {data?.height ?? 'n/a'} cm
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <p>Peso:</p>
                  <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                    {data?.weight ?? 'n/a'} Kg
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <p>Genero:</p>
                  <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                    {data?.gender ?? 'n/a'}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <p>Edad:</p>
                  <p className="font-bold bg-green-400 rounded-md p-2 m-2">
                    {data?.age ?? 'n/a'} years
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
