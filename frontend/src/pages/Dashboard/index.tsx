import { Dash, Loader } from 'components'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <Loader />
  }

  if (!isAuthenticated) {
    navigate('/login')
  }

  return <Dash />
}
export default Dashboard
