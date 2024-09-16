import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-white.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 125) {
        setNavBackground('bg-[#333333]');
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className={`fixed w-full flex justify-between items-center z-10 pt-2 px-4 pb-2 text-gray-900 ${navBackground} transition-all duration-300`} style={{ height: '90px' }}>
      <div className="flex items-center justify-between w-full h-full">
        {/* Left Section */}
        <ul style={{ fontFamily: 'MilkyWay' }} className="hidden md:flex text-white space-x-6">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="story" smooth={true} duration={500}>
              Story
            </Link>
          </li>
        </ul>

        {/* Logo in the Middle */}
        <div className="flex-shrink-0 flex justify-start ml-[4rem] pt-[3rem] md:justify-center w-full md:w-auto">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: '180px', width: 'auto', marginTop: '-3rem', paddingLeft: '4rem' }}  // Adjust the height of the logo
            className="max-w-none"
          />
        </div>

        {/* Right Section */}
        <ul style={{ fontFamily: 'MilkyWay' }} className="hidden md:flex font-bold text-white space-x-6">
          <li>
            <Link to="notes" smooth={true} duration={500}>
              Fragrance Notes
            </Link>
          </li>
          <li>
            <Link to="shop" smooth={true} duration={500}>
              Ingredients
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom Border for Transparent Background */}
      {navBackground === 'bg-transparent' && (
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-[95%] border-b-2 rounded-b-full border-white"></div>
      )}

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-20 text-white'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu with sliding animation */}
      <ul
        className={`fixed top-0 right-0 h-screen bg-[#e0e0e0] text-[#000000] flex flex-col items-center transition-transform duration-500 ease-in-out ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '75%', fontFamily: 'MilkyWay' }}
      >
        <li className='pb-6 pt-20 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="story" smooth={true} duration={500}>
            Story
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="notes" smooth={true} duration={500}>
            Fragrance Notes
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="shop" smooth={true} duration={500}>
            Ingredients
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
