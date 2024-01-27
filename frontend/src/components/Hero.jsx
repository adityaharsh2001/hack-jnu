import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-y-12 items-center mt-28'>
        <p className='text-6xl capitalize font-bold w-[60%] text-black text-center'>Differentiated <span className='text-purple-400 text-6xl font-bold'>Case Flow </span>Management</p>
        <p className='w-[40%] text-lg text-center text-black font-[400]'>Minimizing and making more predictable the time between case events</p>
        <button className="btn m-0 bg-purple-500 hover:bg-purple-400 border-none hover:border-none text-base text-white ">Explore more</button>
    </div>
  )
}

export default Hero