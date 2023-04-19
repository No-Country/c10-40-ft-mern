import { Footer } from 'components'
import NavbarResponsive from 'components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = (): JSX.Element => {
  return (
    <>
      <NavbarResponsive />
      <main className="w-full min-h-[88vh] flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
