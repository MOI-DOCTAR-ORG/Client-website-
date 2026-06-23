import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about' 
import Trust from './components/Trust'
import Features from './components/Features'
import Team from './components/team'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='scroll-smooth'>
       <Navbar /> 
       <Hero />
       <About />
       <Trust />
       <Features />
       <Team />
       <Contact />
       <Footer />
    </div>
  )
}

export default App
   