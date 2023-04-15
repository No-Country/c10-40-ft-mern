import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !data) {
      navigate('/login')
    }
  }, [data, isLoading])

  return { isAuthenticated: !!data, isLoading }
}
