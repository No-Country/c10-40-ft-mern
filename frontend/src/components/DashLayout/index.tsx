import AltSideBar from 'components/AltSidebar'
import { useAuth } from 'hooks/useAuth'
import { Outlet, useNavigate } from 'react-router-dom'

const DashLayout = (): JSX.Element => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    navigate('/login')
  }

  return (
    <div className="flex flex-col lg:flex-row justify-start h-screen">
      <AltSideBar />
      <Outlet />
    </div>
  )
}

export default DashLayout
