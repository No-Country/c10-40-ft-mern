import Cards from 'components/Cards'
import SideBarMenu from 'components/SideBarMenu'

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex justify-start">
      <SideBarMenu />
      <Cards />
    </div>
  )
}
export default Dashboard
