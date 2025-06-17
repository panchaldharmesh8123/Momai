import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// Components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
