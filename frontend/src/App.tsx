import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import DashLayout from 'components/DashLayout'
import MainLayout from 'components/Layout'
import {
  About,
  CompleteProfile,
  Home,
  Login,
  Register,
  Dashboard,
  Contact,
  Summary,
  Stats,
  Schedule,
  Routine,
  CreateRutine,
  NotFound,
  Profile
} from 'pages'
import { Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MainLayout> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeprofile" element={<CompleteProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path='/dashboard' element={<DashLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/stats" element={<Stats />} />
            <Route path="/dashboard/summary" element={<Summary />} />
            <Route path="/dashboard/schedule" element={<Schedule />} />
            <Route path="/dashboard/routine" element={<Routine />} />
            <Route path="/dashboard/createrutine" element={<CreateRutine />} />
            <Route path="/dashboard/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </MainLayout> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
