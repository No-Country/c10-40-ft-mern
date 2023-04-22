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
  CreateRoutine,
  NotFound,
  Profile,
  Password,
  NewPassword,
  Google
} from 'pages'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

function App(): JSX.Element {
  const location = useLocation()
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MainLayout> */}
      <Routes location={location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/olvide-password" element={<Password />} />
          <Route path="/reset-password" element={<NewPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeprofile" element={<CompleteProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/google" element={<Google />} />
        </Route>
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/stats" element={<Stats />} />
          <Route path="/dashboard/summary" element={<Summary />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/routine" element={<Routine />} />
          <Route path="/dashboard/create-routine" element={<CreateRoutine />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          {/* <Route path="/dashboard/exercisecard" element={<ExerciseCard />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors />
      {/* </MainLayout> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
