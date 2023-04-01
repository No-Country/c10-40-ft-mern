import MainLayout from 'components/Layout'
import { About, CompleteProfile, Home, Login, Register, Dashboard } from 'pages'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/completeprofile" element={<CompleteProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  )
}

export default App
