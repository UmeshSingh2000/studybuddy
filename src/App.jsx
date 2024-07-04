import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Course from './components/Course'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Course />
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
