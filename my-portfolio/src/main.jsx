import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import App from './App.jsx'
import './index.css'

import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home';

const root= createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
        <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/Resume" element={<Resume />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
