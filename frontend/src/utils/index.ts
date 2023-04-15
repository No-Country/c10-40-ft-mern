import type {
  IContact,
  ILoginUser,
  INewUser,
  IUser,
  IUserProfile
} from 'app/types'
import axios from 'axios'
import { useUser } from 'hooks/useUser'

export const server = axios.create({
  baseURL: '/.netlify/functions'
})

export const registerUser = async (user: INewUser): Promise<any> => {
  const { firstName, email, password } = user

  if (firstName === '' || password === '' || email === '') {
    throw new Error(`${password} ${email} missing`)
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
  const loggedUser = await server.post('/loginUser', user).catch((error) => {
    console.log(error)
  })

  return loggedUser
}

export const sendEmail = async (data: IContact): Promise<any> => {
  const { name, email, subject, message } = data

  if (name === '' || subject === '' || email === '' || message === '') {
    throw new Error(`${name} ${subject} ${email} missing`)
  }

  const response = await server.post('/sendMail', data).catch((error) => {
    console.log(error)
  })

  return response
}

export const completeProfile = async (user: IUserProfile): Promise<any> => {
  const { id, gender, age, weight, height } = user
  console.log(user)
  console.log(id)
  if (
    gender === '' ||
    (age ?? 0) <= 0 ||
    (weight ?? 0) <= 0 ||
    (height ?? 0) <= 0
  ) {
    throw new Error(' missing')
  }

  const completed = await server
    .patch('/completeProfile', user)
    .catch((error) => {
      console.log(error)
    })

  return completed
}
