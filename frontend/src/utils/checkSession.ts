import { JWT_TOKEN } from 'app/constants'
import Cookies from 'js-cookie'

export async function checkSession(): Promise<string> {
  const userToken = Cookies.get(JWT_TOKEN)

  if (userToken) {
    return userToken
  } else {
    return ''
  }
}
