import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type IUser } from 'app/types'
import { server } from 'utils'

async function getUser(): Promise<IUser> {
  const jwtToken = localStorage.getItem('jwtToken')

  if (!jwtToken) {
    throw new Error('Missing token')
  }
  const response = await server
    .get('/getUser', {
      headers: { Authorization: `Bearer ${jwtToken}` }
    })
    .catch((error) => {
      throw new Error(error)
    })

  return response.data
}

export function useUser(allowFetch: boolean): UseQueryResult {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUser(),
    enabled: allowFetch
  })
}
