import AltSideBar from 'components/AltSidebar'
import Loader from 'components/Loader'
import { useAuth } from 'hooks/useAuth'
import { useUser } from 'hooks/useUser'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const DashLayout = (): JSX.Element => {
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useAuth()
  const { user, isLoading: userIsLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isLoading, isAuthenticated])

  if (isLoading || userIsLoading) {
    return <Loader type="dash" />
  }

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center h-screen overflow-hidden">
      <AltSideBar />
      <main className="w-full h-full overflow-x-hidden overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default DashLayout
