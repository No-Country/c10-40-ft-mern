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
  console.log(event.body)
  const { gender, age, weight, height }: IUserProfile = JSON.parse(event.body)

  if (!gender || !age || !weight || !height) {
    throw new Error('prop missing')
  }

  if (event.headers.Authorization) {
    throw new Error('Bearer token missing')
  }

  try {
    const res = await server.patch(
      '/users/me/completeprofile',
      {
        gender,
        age,
        weight,
        height
      },
      {
        headers: { Authorization: event.headers.authorization }
      }
    )

    const user: IUserProfile = await res.data

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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
