import { SideBarMenu, Calendar } from 'components'

const Schedule = (): JSX.Element => {
  return (
    <div className="flex justify-start h-[89vh]">
      <SideBarMenu />
      <Calendar />
    </div>
  )
}

export default Schedule
