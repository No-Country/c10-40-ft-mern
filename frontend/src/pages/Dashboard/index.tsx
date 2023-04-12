import { Dash } from 'components'
import SideBarMenu from 'components/SideBarMenu'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const userQuery = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userQuery.isLoading && !userQuery.data) {
      navigate('/login')
    }
  }, [userQuery.data])

  return (
      <Dash />
  )
}
export default Dashboard
