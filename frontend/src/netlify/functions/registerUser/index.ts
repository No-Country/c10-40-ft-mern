import {
  type Handler,
  type HandlerEvent,
  type HandlerContext
} from '@netlify/functions'
import type { IUser } from 'app/types'
import axios, { isAxiosError } from 'axios'

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

    const user: IUser = await res.data

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const { response } = error

      if (response?.status === 400) {
        return {
          statusCode: 400,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response.data.message)
        }
      }
    }
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Error in the request' })
    }
  }
}

export { handler }
