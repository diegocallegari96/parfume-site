import React, { useState } from 'react'
import {FaBars, FaTimes, FaMapMarkerAlt, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/cafe_muchies_logo.webp'
import { Link } from 'react-scroll'
import bg from '../assets/cannabis_navbar1.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div style={{backgroundImage: `url(${bg})`}}  className='fixed w-full h-[160px] flex justify-between items-center z-10 pt-6 px-4 pb-24 text-gray-900'>
        <div>
            <img src={Logo} alt="Logo image" style={{width: '240px'}}/>
        </div>

        {/* menu */}

            <ul className='hidden md:flex font-bold text-white'>
                <li>
                    <Link to="home"  smooth={true}  duration={500}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="about"  smooth={true}  duration={500}>
                    About Us
                    </Link>
                </li>
                <li>
                    <Link to="weed"  smooth={true}  duration={500}>
                    Weed
                    </Link>
                </li>
                <li>
                    <Link to="shop"  smooth={true}  duration={500}>
                    Shop
                    </Link>
                </li>
                <li>
                    <Link to="contact"  smooth={true}  duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#548f6f] text-white flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
                    Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="weed"  smooth={true}  duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="shop"  smooth={true}  duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>


            {/* Social icons */}
            <div className='lg:flex fixed flex-col top-[35%] left-0 hide-at-1268'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.facebook.com/Cafemunchiesbkk/" target='blank'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://maps.app.goo.gl/dzrG7HS6xtW5mT8N8" target='blank'>
                            Location <FaMapMarkerAlt size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#548f6f]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:Cafemunchiesbkk@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
            <style jsx>{`
                @media (max-width: 1268px) {
                    .hide-at-1268 {
                        display: none;
                    }
                }
            `}</style>
    </div>
  )
}

export default Navbar