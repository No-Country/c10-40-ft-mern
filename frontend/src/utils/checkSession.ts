import { JWT_TOKEN } from 'app/constants'

export async function checkSession(): Promise<string | boolean> {
  const userToken = localStorage.getItem(JWT_TOKEN)

  if (userToken) {
    return userToken
  } else {
    return false
  }
}
