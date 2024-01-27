import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>Logo</div>
        <div>
            <ul className=' hover:cursor-pointer text-slate-600 font-[400] text-base flex justify-between list-none gap-x-5 capitalize'>
            <li>features</li>
            <li>about us</li>
            <li>use cases</li>
            </ul>
        </div>
        <button className="btn m-0 bg-purple-300 hover:bg-purple-200 border-none hover:border-none text-sm">Get started</button>

    </div>
  )
}

export default Navbar