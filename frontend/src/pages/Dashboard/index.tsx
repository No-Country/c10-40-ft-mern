import { Dash } from 'components'
import SideBarMenu from 'components/SideBarMenu'

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex justify-start h-[89vh]">
      <SideBarMenu />
      <Dash />
    </div>
  )
}
export default Dashboard
