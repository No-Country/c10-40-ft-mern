import { About, CompleteProfile, Home, Login, Register } from 'pages'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/completeprofile" element={<CompleteProfile />} />
    </Routes>
  )
}

export default App
