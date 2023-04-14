import { useQuery } from '@tanstack/react-query'
import { Dash } from 'components'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkSession } from 'utils/checkSession'

const Dashboard = (): JSX.Element => {
  const userQuery = useUser()
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

  return <Dash />
}
export default Dashboard
