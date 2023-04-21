import { Footer } from 'components'
import NavbarResponsive from 'components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const MainLayout = (): JSX.Element => {
  const location = useLocation()

  return (
    <>
      <NavbarResponsive />
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="page">
          <main className="w-full min-h-[88vh] flex flex-col items-center justify-center">
            <Outlet />
          </main>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

export default MainLayout
