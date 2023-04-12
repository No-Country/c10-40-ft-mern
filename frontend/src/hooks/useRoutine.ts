import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type IBodyPart} from 'app/types'
import { server } from 'utils'

async function getRoutine(): Promise<IBodyPart | boolean> {
  if (!getRoutine) {
    return false
  }

  const response = await server.get('/getRoutines').catch((error) => {
    throw new Error(error)
  })

  if (response.status === 404) {
    throw new Error("no existe")
  }

  if (response.status === 400) {
    throw new Error("something bad")
  }

  return response.data
}

export function useRoutine(): UseQueryResult<IBodyPart[]> {
  return useQuery({
    queryKey: ['routine'],
    queryFn: async () => await getRoutine()
  })
}