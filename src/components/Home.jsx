import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Image from '../assets/bar_placeholder.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e5e2c4]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[120%]'>     
    <h1 className='text-4xl sm:text-7xl font-bold text-[#548f6f]'>Cafe Munchies</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-grey-600'>Chill, Eat, Repeat</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quia vero eius assumenda nulla sequi beatae, odit voluptate quam officiis sapiente, atque numquam iure maiores ut ullam repellendus minima dolore?
    </p>
    <img className='h-120 w-60 self-end' src={Image} />
            <div>
            <Link to="work"  smooth={true}  duration={500}>
              <button className='text-grey-900 group border-2 px-6 py-3 my-2 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>View Shop
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