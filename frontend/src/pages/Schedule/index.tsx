import { SideBarMenu, Calendar } from 'components'

const Schedule = (): JSX.Element => {
  return (
    <div className="flex justify-start h-screen">
      <SideBarMenu />
      <Calendar />
    </div>
  )
}

export default Schedule
