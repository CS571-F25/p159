import './App.css'
import { Container } from 'react-bootstrap'
import { HashRouter, Routes, Route } from 'react-router'
import SiteNav from './components/SiteNav'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Resources from './components/Resources'
import Team from './components/Team'

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <SiteNav />
        <Container className="py-4 main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  )
}

export default App
