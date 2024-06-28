// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {FaPiedPiper, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4  w-full top-0 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-serif font-bold">Usman.dev 
         
          <FaPiedPiper className='animate-spin' color="white"/> </div>
        <div className="hidden md:flex space-x-4">
        <Link to='/' className="text-white  p-2  hover:text-gray-300 animate-pulse">Home</Link>
        <Link to='/about' className="text-white  p-2 hover:text-gray-300 animate-pulse">About</Link>
        <Link to='/pricing' className="text-white  p-2  hover:text-gray-300 animate-pulse">Pricing</Link>
        <Link to='/portfolio' className="text-white  p-2  hover:text-gray-300 animate-pulse">Portfolio</Link>
        <Link to='/contact' className="text-white  p-2  hover:text-gray-300 animate-pulse">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <FaTimes color='white' className='cursor-pointer' size={32} onClick={toggleMenu}/>
        <Link to='/'  className="block text-white px-4 py-2 hover:text-blue-700">Home</Link>
        <Link to='/about' className="block text-white px-4 py-2 hover:text-blue-700">About</Link>
        <Link to='/pricing' className="block text-white px-4 py-2 hover:text-blue-700">Pricing</Link>
        <Link to='/portfolio' className="block text-white px-4 py-2 hover:text-blue-700">Portfolio</Link>
        <Link to='/contact' className="block text-white px-4 py-2 hover:text-blue-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;


