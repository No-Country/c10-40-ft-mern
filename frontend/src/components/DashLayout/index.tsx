import AltSideBar from 'components/AltSidebar'
import SideBarMenu from 'components/SideBarMenu'
import { Outlet } from 'react-router-dom'

const DashLayout = (): JSX.Element => {
  return (
    <div className="flex justify-start h-screen">
      {/* <SideBarMenu /> */}
      <AltSideBar />
      <Outlet />
    </div>
  )
}

export default DashLayout
