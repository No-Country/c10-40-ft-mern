import { SideBarMenu, ProfileCard } from 'components'

const Profile = (): JSX.Element => {
  return (
    <div className="flex flex-1 justify-start max-h-screen h-screen">
      <SideBarMenu />
      <ProfileCard />
    </div>
  )
}

export default Profile
