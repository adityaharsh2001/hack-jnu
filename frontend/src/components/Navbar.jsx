import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-transparent text-white px-0 w-full'>
            <div className='flex justify-between items-center rounded-md mx-auto'>
                <Link to='/'>
                <div className='text-3xl font-extrabold text-purple-500 px-2 py-1 rounded-md'>
                    DCM
                </div>
                    </Link>
                <div>
                    <ul className='flex gap-x-5'>
                        <li className='hover:text-purple-500'>
                            <Link to='/casepage'>Features</Link>
                        </li>
                        <li className='hover:text-purple-500'>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li className='hover:text-purple-500'>
                            <Link to='/createcase'>Use Cases</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/signin'>
                    <button className='btn bg-purple-500 hover:bg-purple-400 text-sm text-white'>
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
