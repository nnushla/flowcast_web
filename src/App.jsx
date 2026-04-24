import { Routes, Route } from 'react-router-dom'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Predict    from './pages/Predict'
import Insights   from './pages/Insights'
import About      from './pages/About'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/predict"     element={<Predict />} />
        <Route path="/insights"    element={<Insights />} />
        <Route path="/about"       element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
