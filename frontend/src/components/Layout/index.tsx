import { Footer } from 'components'
import NavbarResponsive from 'components/Navbar'

const MainLayout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element => {
  return (
    <div>
      <NavbarResponsive />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
