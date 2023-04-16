import { Dash, Loader } from 'components'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  const { data, isLoading: userIsLoading } = useUser()
  console.log(data)
  if (isLoading) {
    return <Loader />
  }

  if (!isAuthenticated) {
    navigate('/login')
  }

  if (!data && !userIsLoading && !data.profileCompleted) {
    navigate('/completeprofile')
  }

  return <Dash />
}
export default Dashboard
