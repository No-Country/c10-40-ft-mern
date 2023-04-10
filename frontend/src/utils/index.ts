import type { ILoginUser, INewUser } from 'app/types'
import axios from 'axios'

const server = axios.create({
  baseURL: '/.netlify/functions'
})

export const registerUser = async (user: INewUser): Promise<any> => {
  const { firstName, email, password } = user

  if (firstName === '' || password === '' || email === '') {
    throw new Error(`${firstName} ${password} ${email} missing`)
  }

  const newUser = await server.post('/registerUser', user).catch((error) => {
    console.log(error)
  })

  return newUser
}

export const loginUser = async (user: ILoginUser): Promise<any> => {
  const { email, password } = user

  if (password === '' || email === '') {
    throw new Error(`${password} ${email} missing`)
  }

  console.log(user)

  const loggedUser = await server.post('/loginUser', user).catch((error) => {
    console.log(error)
  })

  return loggedUser
}
