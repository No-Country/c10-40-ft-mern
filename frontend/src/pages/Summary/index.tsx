import { SideBarMenu } from 'components'

const Summary = (): JSX.Element => {
  return (
    <div className="flex justify-start h-[89vh]">
      <SideBarMenu />
      <p>Summary</p>
    </div>
  )
}
export default Summary
