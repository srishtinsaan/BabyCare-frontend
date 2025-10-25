import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs"
import Team from "./pages/Team"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
