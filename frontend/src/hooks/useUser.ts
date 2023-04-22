import { useQuery } from '@tanstack/react-query'
import { type IUser } from 'app/types'
import { useEffect, useState } from 'react'
import { server } from 'utils'
import { checkSession } from 'utils/checkSession'

async function getUser(): Promise<IUser> {
  const jwtToken = await checkSession()

  if (!jwtToken) {
    throw new Error('token missing')
  }

  const response = await server
    .get('/getUser', {
      headers: { Authorization: `Bearer ${jwtToken}` }
    })
    .catch((error) => {
      throw new Error(error)
    })

  if (response.status === 401) {
    throw new Error('not Authorization')
  }

  return response.data
}

export function useUser(): {
  user: IUser | undefined
  isLoading: boolean
  hasRoutine: boolean
} {
  const [hasRoutine, setHasRoutine] = useState(false)
  const { data, isLoading } = useQuery<IUser>({
    queryKey: ['user'],
    queryFn: async () => await getUser()
  })

  useEffect(() => {
    if (!isLoading && data?.routines && data?.routines.length) {
      setHasRoutine(true)
    }
  }, [data, isLoading])

  return {
    user: data,
    isLoading,
    hasRoutine
  }
}
