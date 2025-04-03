import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'

const NavBar = () => {
    
    const {user} = useContext(AppContext);
    const Navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/' className='flex items-center'>
                <img src={assets.logo} className='inline mr-2' />
                <h1 className='inline m-0 font-bold text-3xl'>Pictify</h1>
            </Link>

            <div>
                {user ? 
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='relative group'>
                            <button onClick={() => Navigate('/BuyCredits')} className='cursor-pointer flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                <img className='w-5' src={assets.credit_star} />
                                <p className="absolute left-1/2 -translate-x-1/2 top-full mt-2 border hidden sm:hidden group-hover:block bg-white p-2 rounded-md text-xs sm:text-sm font-medium text-gray-600">Credits</p>
                            </button>
                        </div>
                        
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi Pictify</p> 
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 drop-shadow'/>
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white shadow-lg rounded-md border text-sm'>
                                    <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : 
                    <div className='flex item-center gap-2 sm:gap-5'>
                        <p onClick={() => Navigate('/BuyCredits')} className='cursor-pointer py-2'>Pricing</p>
                        <button className='cursor-pointer bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Log In</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar
