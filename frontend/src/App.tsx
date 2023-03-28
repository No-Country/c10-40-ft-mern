import { Home, About } from 'pages'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
