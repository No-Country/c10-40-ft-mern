import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import axios from 'axios'

const server = axios.create({
  baseURL: process.env.API_BASE_URL
})

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  if (!event.body) {
    return { statusCode: 400 }
  }

  const { routineId }: { routineId: string } = JSON.parse(event.body)

  if (!routineId) {
    throw new Error('prop missing')
  }

  try {
    const res = await server.post(
      `/users/me/routines/${routineId}`,
      {},
      {
        headers: { Authorization: event.headers.authorization }
      }
    )

    const r = await res.data

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(r)
    }
  } catch (error) {
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
