import React from 'react'
import Navbar from '../src/components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'
function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:speciality" element={<Doctors/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/my-profile" element={<Myprofile/>} />
        <Route path="/my-appointments" element={<Myappointments/>} />
        <Route path="/appointments/:docId" element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App