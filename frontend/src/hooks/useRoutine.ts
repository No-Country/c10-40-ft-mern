import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { server } from 'utils'
import { type IRoutine } from 'app/types'

async function getRoutines(): Promise<IRoutine | boolean> {
  if (!getRoutines) {
    return false
  }

  const response = await server.get('/getRoutines').catch((error) => {
    throw new Error(error)
  })

  if (response.status === 404) {
    throw new Error('no existe')
  }

  if (response.status === 400) {
    throw new Error('something bad')
  }

  return response.data
}

export function useRoutines(): UseQueryResult<IRoutine[]> {
  return useQuery({
    queryKey: ['routines'],
    queryFn: async () => await getRoutines()
  })
}
