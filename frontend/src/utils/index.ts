import type {
  IContact,
  IForgotPassword,
  ILoginUser,
  INewPassword,
  INewUser,
  IUserProfile
} from 'app/types'
import axios from 'axios'
import { checkSession } from './checkSession'

export const server = axios.create({
  baseURL: '/.netlify/functions'
})

export const registerUser = async (user: INewUser): Promise<any> => {
  const { firstName, email, password } = user

  if (firstName === '' || password === '' || email === '') {
    throw new Error(`${password} ${email} missing`)
  }

  const response = await server.post('/registerUser', user)

  if (response.status === 400) {
    return response.data
  }

  return response.data
}

export const loginUser = async (user: ILoginUser): Promise<any> => {
  const { email, password } = user

  if (password === '' || email === '') {
    throw new Error(`${password} ${email} missing`)
  }
  const response = await server.post('/loginUser', user)

  if (response.status === 401) {
    return response.data
  }

  return response.data
}

export const googleCallback = async (): Promise<any> => {
  const url = await server.get('/loginWithGoogle')

  return url
}

export const forgotPw = async (user: IForgotPassword): Promise<any> => {
  const { email } = user
  if (email === '') {
    throw new Error(`${email} missing`)
  }
  const forgotPassword = await server.put('/forgotPw', user).catch((error) => {
    console.log(error)
  })
  console.log(forgotPassword)
  return forgotPassword
}

export const resetPassword = async (user: INewPassword): Promise<any> => {
  const { password } = user
  const tok = localStorage.getItem('PwToken')
  localStorage.removeItem('PwToken')
  if (password === '') {
    throw new Error(`${password} missing`)
  }
  const newPw = await server
    .put('/newPassword', { password, tok })
    .catch((error) => {
      console.log(error)
      throw new Error(
        'No se pudo cambiar la contraseña. Por favor, inténtelo de nuevo más tarde.'
      )
    })
  return newPw
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
  const token: string = await checkSession()

  if (!token && typeof token !== 'string') throw new Error('missing token')
  console.log(token)

  const { gender, age, weight, height } = user
  if (
    gender === '' ||
    (age ?? 0) <= 0 ||
    (weight ?? 0) <= 0 ||
    (height ?? 0) <= 0
  ) {
    throw new Error(' missing')
  }

  const completed = await server.patch('/completeProfile', user, {
    headers: { Authorization: `Bearer ${token}` }
  })

  return completed
}
