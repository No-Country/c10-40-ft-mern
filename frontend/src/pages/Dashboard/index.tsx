import { Dash } from 'components'
import SideBarMenu from 'components/SideBarMenu'

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex justify-start h-screen">
      <SideBarMenu />
      <Dash />
    </div>
  )
}
export default Dashboard
