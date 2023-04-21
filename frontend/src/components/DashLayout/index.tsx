import AltSideBar from 'components/AltSidebar'
import Loader from 'components/Loader'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const DashLayout = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  const { data, isLoading: userIsLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isLoading, isAuthenticated])

  if (isLoading || userIsLoading) {
    return <Loader type="dash" />
  }

  return (
    <div className="flex flex-col lg:flex-row justify-start h-screen">
      <AltSideBar />
      <Outlet />
    </div>
  )
}

export default DashLayout
