import { Footer } from 'components'
import NavbarResponsive from 'components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = (): JSX.Element => {
  return (
    <>
      <NavbarResponsive />
      <main className="w-full h-full flex flex-col items-center justify-center 2xl:min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
