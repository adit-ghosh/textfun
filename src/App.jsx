import About from './pages/About'
import Index from './pages/Index'
import { BrowserRouter as Router, Link, Route, Routes}  from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
