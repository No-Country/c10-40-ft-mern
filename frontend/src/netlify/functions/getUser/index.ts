import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import axios from 'axios'

const server = axios.create({
  baseURL: process.env.API_BASE_URL
})

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.headers.Authorization) {
    throw new Error('Bearer token missing')
  }
  try {
    const response = await server.get('/users/me', {
      headers: { Authorization: event.headers.authorization }
    })

    const user = await response.data

    return {
      statusCode: 200,
      body: JSON.stringify(user.data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error })
    }
  }
}

export { handler }
