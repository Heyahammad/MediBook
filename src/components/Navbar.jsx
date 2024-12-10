import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom'
function Navbar() {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <ul className='py-1'>ABOUT</ul>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT </li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.arrow} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={() => navigate('/login')}>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu} alt="" />

        {/*mobile menu*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-primary transition-all duration-500 ease-in-out`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img onClick={() => navigate('/'), () => setShowMenu(false)} className='w-36' src={assets.logowhite} alt="" />
            <img className='w-7 ' onClick={() => setShowMenu(false)} src={assets.close} alt="" />
          </div>
          <ul className='text-white flex flex-col items-center gap-2 mt-5 px-5 py-60 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded hover:text-yellow inline-block '>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded hover:text-yellow inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded hover:text-yellow inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded hover:text-yellow inline-block'>CONTACT</p></NavLink>
            {!token && (
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate('/Login');
                }}
                className="px-4 py-2 rounded inline-block"
              >
                SIGN IN / SIGN UP
              </button>
            )}
          </ul>
          <div>
            {/* Copyright Section */}
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/heyahammadhere"
                className="animate-neon transition duration-300"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="https://github.com/heyahammad"
                className="animate-neon transition duration-300"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="https://Instagram.com/ahammadgram"
                className="animate-neon transition duration-300"
              >
                <FaInstagram className="text-4xl" />
              </a>
            </div>
            <div className="mt-12 border-t border-white pt-6">
              <p className=" text-center text-sm text-white">
                Copyright 2024 @heyahammad - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar