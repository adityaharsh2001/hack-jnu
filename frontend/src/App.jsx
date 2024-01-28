import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signin from './components/Signin'
import Signup from './components/Signup'
import DataPage from './pages/DataPage'
import CreateCase from './pages/CreateCase'
import SingleCasePage from './pages/SingleCasePage'


function App() {
  return (
   <div className='h-[100vh]'>
     <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/datapage' element={<DataPage/>}/>
      <Route path='/createcase' element={<CreateCase/>}/>
      <Route path='/casepage' element={<SingleCasePage/>}/>
    </Routes>
   </div>
  )
}

export default App
