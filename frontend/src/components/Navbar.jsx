import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
  return (
    <div className='flex justify-between items-center text-black'>
        <div>Logo</div>
        <div>
            <ul className=' hover:cursor-pointer text-slate-600 font-[400] text-base flex justify-between list-none gap-x-5 capitalize'>
            <li>features</li>
            <li>about us</li>
            <li>use cases</li>
            </ul>
        </div>
        <Link to={'/signin'}>
        <button className="btn m-0 bg-purple-500 hover:bg-purple-400 border-none hover:border-none text-sm text-white">Get started</button>
        </Link>
    </div>
  )
}

export default Navbar