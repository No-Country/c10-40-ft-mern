import Cards from 'components/Cards'
import SideBarMenu from 'components/SideBarMenu'

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex">
      <SideBarMenu /> <Cards />
    </div>
  )
}
export default Dashboard
