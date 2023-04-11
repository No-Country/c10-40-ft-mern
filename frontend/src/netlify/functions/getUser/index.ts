import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import axios from 'axios'

const server = axios.create({
  baseURL: process.env.API_BASE_URL
})

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    const response = await server.get('/users/me', {
      headers: { Authorization: event.headers.Authorization }
    })

    const user = await response.data

    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error })
    }
  }
}

export { handler }
