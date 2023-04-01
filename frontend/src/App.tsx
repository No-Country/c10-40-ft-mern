import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainLayout from 'components/Layout'
import { About, CompleteProfile, Home, Login, Register, Dashboard } from 'pages'
import Stats from 'pages/Stats/Stats'
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
        </Routes>
      </MainLayout>
    </QueryClientProvider>
  )
}

export default App
