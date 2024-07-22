import React, { useState } from 'react';
import { unesco } from '../assets'; 
import { navLinks } from '../constants';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img src={unesco} alt="wmsu_unesco_logo" className="w-[80px] h-[77px]" />
      </div>

      {/* Center: NavLinks */}
      <ul className="hidden md:flex space-x-10 justify-center flex-grow ">
        {navLinks.map((link) => (
          <li key={link.id} className={`font-spacegrotesk font-regular text-[16px] cursor-pointer ${location.pathname === link.id ? 'text-orange-500' : 'text-white' } hover:text-orange-500`}>
            <Link to={link.id}>{link.title}</Link>
          </li>
        ))}

      </ul>

      {/* Right side: Contact Us */}
      <div className="hidden md:flex items-center space-x-6">    
        <li className="list-none gradient-button font-spacegrotesk font-semibold font-white text-white cursor-pointer text-[16px] px-6 py-3 rounded-[30px]">
          <Link to="/ContactPage">Contact Us</Link>
        </li>
      </div>   

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 justify-center w-full bg-black shadow-lg md:hidden mt-10">
          <ul className="flex flex-col items-center space-y-10 py-14">
            {navLinks.map((link) => (
              <li key={link.id} className={`font-spacegrotesk font-regular text-white cursor-pointer text-[16px] ${location.pathname === link.id ? 'text-orange-500' : 'text-white' } hover:text-orange-500`}>
                <Link to={link.id}>{link.title}</Link>
              </li>
            ))}
            <li className="gradient-button font-spacegrotesk font-white text-white cursor-pointer text-[16px] px-6 py-3 rounded-[30px]">
                <Link to="/ContactPage">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
