import { Navbar, Hero, Portfolio, Skills, Contact } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router className="bg-body text-title font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
