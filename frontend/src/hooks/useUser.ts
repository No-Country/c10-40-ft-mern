import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type IUser } from 'app/types'
import { server } from 'utils'
import { checkSession } from 'utils/checkSession'

async function getUser(): Promise<IUser | boolean> {
  const jwtToken = await checkSession()

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
