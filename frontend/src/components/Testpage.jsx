import React, { useEffect } from 'react'
import { useUser } from '../../context/AuthContext'

const Testpage = () => {
    const {user}=useUser()
    useEffect(()=>{console.log(user);},[user])
  return (
    <div>
       <p>{user.email}</p>
    </div>
  )
}

export default Testpage