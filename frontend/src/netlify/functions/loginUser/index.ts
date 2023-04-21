import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import axios, { isAxiosError } from 'axios'

const server = axios.create({
  baseURL: process.env.API_BASE_URL
})

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (!event.body) {
    return { statusCode: 400 }
  }

  const { email, password } = JSON.parse(event.body)

  if (!password || !email) {
    throw new Error('prop missing')
  }

  try {
    const res = await server.post('/auth/login', {
      email,
      password
    })
    const token = await res.data

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token.data)
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const { response } = error

      if (response?.status === 401) {
        return {
          statusCode: 401,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response.statusText)
        }
      }
    }

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: error
      })
    }
  }
}

export { handler }
