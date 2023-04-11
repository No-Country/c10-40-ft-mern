import { SideBarMenu } from 'components'

const Summary = (): JSX.Element => {
  return (
    <div className="flex justify-start h-screen">
      <SideBarMenu />
      <p>Summary</p>
    </div>
  )
}
export default Summary
