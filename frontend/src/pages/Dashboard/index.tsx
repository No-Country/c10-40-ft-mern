import Cards from 'components/Cards'
import SideBarMenu from 'components/SideBarMenu'

const Dashboard = (): JSX.Element => {
  return (
    <div className="flex justify-start h-[89vh]">
      <SideBarMenu />
      <Cards />
    </div>
  )
}
export default Dashboard
