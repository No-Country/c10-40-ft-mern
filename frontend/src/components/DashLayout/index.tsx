import AltSideBar from 'components/AltSidebar'
import { Outlet } from 'react-router-dom'

const DashLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row justify-start h-screen">
      <AltSideBar />
      <Outlet />
    </div>
  )
}

export default DashLayout
