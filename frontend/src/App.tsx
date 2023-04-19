import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  ExerciseCard,
  RoutineDays2,
  RoutineDays3,
  RoutineDays5
} from 'components'
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
  Profile,
  Password,
  NewPassword,
  Google
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
          <Route path="/dashboard/createrutine" element={<CreateRutine />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/routinedays2" element={<RoutineDays2 />} />
          <Route path="/dashboard/routinedays3" element={<RoutineDays3 />} />
          <Route path="/dashboard/routinedays5" element={<RoutineDays5 />} />
          {/* <Route path="/dashboard/exercisecard" element={<ExerciseCard />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </MainLayout> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
