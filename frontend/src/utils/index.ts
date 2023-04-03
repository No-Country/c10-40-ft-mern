import type { INewUser } from 'app/types'
import axios from 'axios'

const server = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const registerUser = async (user: INewUser): Promise<any> => {
  const { firstName, email, password } = user

  if (firstName === '' || password === '' || email === '') {
    throw new Error(`${firstName} ${password} ${email} missing`)
  }

  const newUser = await server.post('/users', user).catch((error) => {
    console.log(error)
  })
  console.log(newUser)
}