import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
 
  return (
   <div className=' '> 
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </div>
  )
}

export default App
