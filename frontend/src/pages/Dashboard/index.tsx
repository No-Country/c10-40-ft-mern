import { Dash, Loader } from 'components'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  //
  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     navigate('/login')
  //   }
  // }, [isLoading, isAuthenticated])

  // if (isLoading) {
  //   return <Loader type="dash" />
  // }
  return <Dash />
}
export default Dashboard
