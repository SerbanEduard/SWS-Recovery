import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import App from './Pages/App.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Gallery from './Pages/Gallery.jsx'
import Booking from './Pages/Booking.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='contact' element={<Contact />} /> 
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='booking' element={<Booking />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
