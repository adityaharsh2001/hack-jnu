import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import LandingPage from './pages/LandingPage'

function App() {
 
  return (
   <div className=' '> 
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </div>
  )
}

export default App
