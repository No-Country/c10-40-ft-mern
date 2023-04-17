import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import axios from 'axios'

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

  const { email } = JSON.parse(event.body)

  if (!email) {
    throw new Error('prop missing')
  }
  try {
    const res = await server.put('/forgot-password', {
      email
    })
    const token = await res.data

    return {
      statusCode: 200,
      body: JSON.stringify(token.data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error })
    }
  }
}

export { handler }
