import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#9049e4]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Diego Callegari</h1>
            <h2 className='text-4xl sm:text-7xl  font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Welcome to my digital space! As a fresh and enthusiastic front-end developer, I am on a thrilling journey of continuous learning and improvement. With a keen eye for design and a steadfast commitment to crafting seamless user experiences, my focus lies in developing responsive and dynamic web applications that not only look good but also perform excellently across all devices.             
            <br/><br/>So, take a look around, explore my projects, and let's connect to create something amazing together!

</p>
            <div>
            <Link to="work"  smooth={true}  duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9049e4] hover:border-[#9049e4]'>View work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
            </Link>    
            </div>

        </div>
    </div>
  )
}

export default Home