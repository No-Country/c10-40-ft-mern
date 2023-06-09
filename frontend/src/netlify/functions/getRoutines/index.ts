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
    const response = await server.get('/routine')

    const routine = await response.data

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(routine.data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: error })
    }
  }
}

export { handler }
