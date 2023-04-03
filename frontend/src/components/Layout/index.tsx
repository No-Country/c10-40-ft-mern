import { Footer } from 'components'
import { NavbarResponsive } from 'components/Navbar'

const MainLayout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element => {
  return (
    <>
      <NavbarResponsive />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
