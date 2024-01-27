import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
 
  return (
   <div className='p-8 bg-gradient-to-t from-purple-300/80 h-screen to-white'>
      <Navbar/>
      <Hero/>
   </div>
  )
}

export default App
