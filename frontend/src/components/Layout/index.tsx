import { Footer } from 'components'
import NavbarResponsive from 'components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = (): JSX.Element => {
  return (
    <div>
      <NavbarResponsive />
      {/* <main>{children}</main> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
