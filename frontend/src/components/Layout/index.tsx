import { Navbar, Footer } from 'components'

const MainLayout = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
