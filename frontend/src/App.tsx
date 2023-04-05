import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
  Rutine,
  CreateRutine,
  NotFound
} from 'pages'
import { Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeprofile" element={<CompleteProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/stats" element={<Stats />} />
          <Route path="/dashboard/summary" element={<Summary />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/rutine" element={<Rutine />} />
          <Route path="/dashboard/createrutine" element={<CreateRutine />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </QueryClientProvider>
  )
}

export default App
