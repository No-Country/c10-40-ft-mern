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
  const { password, token }: { password: string; token: string } = JSON.parse(
    event.body
  )
  console.log(password, token)

  if (!token || !password) {
    throw new Error('prop missing')
  }

  try {
    const res = await server.put(`/auth/new-password/?token=${token}`, {
      password
    })
    const response = await res.data

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error })
    }
  }
}

export { handler }
