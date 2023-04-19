import { Dash, Loader } from 'components'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  const { data, isLoading: userIsLoading } = useUser()

  if (isLoading || userIsLoading) {
    return <Loader type="dash" />
  }

  if (!isAuthenticated) {
    navigate('/login')
  }

  if (!data?.profile_completed) {
    navigate('/completeprofile')
  }

  return <Dash />
}
export default Dashboard
