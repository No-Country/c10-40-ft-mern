import { useQuery } from '@tanstack/react-query'
import { checkSession } from 'utils/checkSession'

export const useAuth = (): {
  isAuthenticated: string | boolean
  isLoading: boolean
} => {
  const { data, isLoading } = useQuery({
    queryKey: ['authStatus'],
    queryFn: checkSession,
    cacheTime: 0,
    staleTime: 0
  })

  return { isAuthenticated: !!data, isLoading }
}
