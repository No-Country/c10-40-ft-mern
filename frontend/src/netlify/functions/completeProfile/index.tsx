import {
  type Handler,
  type HandlerEvent,
  type HandlerContext
} from '@netlify/functions'
import type { IUserProfile } from 'app/types'
import axios from 'axios'

const server = axios.create({
  baseURL: process.env.API_BASE_URL
})

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.body === null) {
    return { statusCode: 400 }
  }
  console.log(event.body)
  const { gender, age, weight, height }: IUserProfile = JSON.parse(event.body)

  if (!gender || !age || !weight || !height) {
    throw new Error('prop missing')
  }

  const token = event.headers.authorization?.replace('Bearer ', '')
  if (token) {
    // Agrega el token a la instancia de axios
    server.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  try {
    const res = await server.patch('/users/me/completeprofile', {
      gender,
      age,
      weight,
      height
    })

    const user: IUserProfile = await res.data

    return {
      statusCode: 201,
      body: JSON.stringify(user)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error in the request' })
    }
  }
}

export { handler }
