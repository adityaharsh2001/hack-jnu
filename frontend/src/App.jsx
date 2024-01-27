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
import {  UserProvider } from '../context/AuthContext'
import CreateCase from './pages/CreateCase'
// import { AuthContext } from '../context/AuthContext'

function App() {
  
  return (
   <div className=' '> 
     {/* <AuthContext.Provider value={{user,setUser}}> */}
     <UserProvider>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/datapage' element={<DataPage/>}/>
      <Route path='/createcase' element={<CreateCase/>}/>
    </Routes>
    </UserProvider>
    {/* </AuthContext.provider> */}
    {/* </AuthContext.Provider> */}
   </div>
  )
}

export default App
