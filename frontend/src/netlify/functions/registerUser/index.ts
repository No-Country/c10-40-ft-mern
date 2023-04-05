import {
  type Handler,
  type HandlerEvent,
  type HandlerContext
} from '@netlify/functions'
import type { IUser } from 'app/types'
import axios from 'axios'

const server = axios.create({
  baseURL: 'https://backend-workout-aoo.onrender.com/api/v1'
})

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.body === null) {
    return { statusCode: 400 }
  }

  const { firstName, email, password } = JSON.parse(event.body)

  if (!firstName || !password || !email) {
    throw new Error('prop missing')
  }

  try {
    const res = await server.post('/users', {
      firstName,
      password,
      email
    })

    const user: IUser = res.data

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
