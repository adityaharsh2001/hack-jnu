import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'

function App() {
 
  return (
   <div className='p-8 bg-gradient-to-t from-purple-300/80 h-screen to-white'>
      {/* <Route path='/' ></Route> */}
      <Navbar/>
      <Hero/>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </div>
  )
}

export default App
