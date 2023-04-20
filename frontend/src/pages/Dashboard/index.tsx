import { Dash, Loader } from 'components'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  const { data, isLoading: userIsLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isLoading, isAuthenticated])

  useEffect(() => {
    if (!userIsLoading && data && !data.profile_completed) {
      navigate('/completeprofile')
    }
  }, [data, userIsLoading, navigate, isAuthenticated])

  if (isLoading || userIsLoading) {
    return <Loader type="dash" />
  }
  return <Dash />
}
export default Dashboard
