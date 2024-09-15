import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/testlogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to track the background color of the navbar
  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  // UseEffect hook to track the scroll position
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 125) { // Change to threshold
        // User has scrolled past treshold
        setNavBackground('bg-[#333333]');
      } else {
        // User is still at the top of the page
        setNavBackground('bg-transparent');
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', changeBackground);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className={`fixed w-full flex justify-between items-center z-10 pt-2 px-4 pb-2 text-gray-900 ${navBackground} ${navBackground === 'bg-transparent' ? 'border-b-2 border-white' : ''} transition-all duration-300`}>
      <div className="flex items-center justify-between w-full">
        {/* Left Section */}
        <ul style={{ fontFamily: 'MilkyWay' }} className='hidden md:flex text-white space-x-6'>
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
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" style={{ width: '80px' }} />
        </div>

        {/* Right Section */}
        <ul style={{ fontFamily: 'MilkyWay' }} className='hidden md:flex text-white space-x-6'>
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

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#548f6f] text-[#e5e2c4] flex flex-col items-center'}>
        <img className='max-w-[25%] pt-16' src={Logo} alt='logo' />
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
