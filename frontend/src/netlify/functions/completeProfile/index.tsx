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

  const { gender, age, weight, height } = JSON.parse(event.body)

  if (!gender || !age || !weight || !height) {
    throw new Error('prop missing')
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
