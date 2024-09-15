import React from 'react'
import Image from '../assets/mainplace1.jpeg'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {


  return (
    <div name='home' className='w-full h-screen bg-white flex justify-center items-center'>

      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex flex-col text-center md:text-left'>
            <h1
              style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}
              className={`mb-2 pt-28 font-bold text-[#548f6f]`}>
              Experience the Essence of Elegance
            </h1>
            <h2
              className={`font-bold text-grey-600`}>
              hoi
            </h2>
            <p
              className={`text-[#575e73] py-4 max-w-[700px] font-bold`}>
              hoi
            </p>

            {/* Flex container for buttons */}
            <div className="flex flex-col md:flex-row items-center my-8 md:my-0 space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <Link to="weed" smooth={true} duration={500}>
                <button className='text-grey-900 group border-2 px-6 py-3 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>
                  koop
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='hidden md:block ml-20 w-[60%] h-[100%] mt-20'>
            <div className=''>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home