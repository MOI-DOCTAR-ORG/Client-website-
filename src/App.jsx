import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about' 
import Trust from './components/Trust'
import Features from './components/Features'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <Navbar /> 
       <Hero />
       <About />
       <Trust />
       <Features />
       <Contact />
       <Footer />
    </div>
  )
}

export default App
   