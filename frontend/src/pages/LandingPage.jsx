import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const LandingPage = () => {
  return (
    <div className='p-8 bg-gradient-to-t from-purple-300/80 h-screen to-white'>
        <Navbar/>
      <Hero/>
    </div>
  )
}

export default LandingPage