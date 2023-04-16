import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { JWT_TOKEN } from 'app/constants'
import { type IUser } from 'app/types'
import { server } from 'utils'

const jwtToken = localStorage.getItem(JWT_TOKEN)
async function getUser(): Promise<IUser | boolean> {
  if (!jwtToken) {
    return false
  }
  const response = await server
    .get('/getUser', {
      headers: { Authorization: `Bearer ${jwtToken}` }
    })
    .catch((error) => {
      throw new Error(error)
    })

  if (response.status === 401) {
    return false
  }

  return response.data
}

export function useUser(): UseQueryResult<IUser> {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUser()
  })
}
