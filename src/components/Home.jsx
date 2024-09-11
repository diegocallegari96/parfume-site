import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Image from '../assets/main_image.jpg'
import '../i18next'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()

  

  return (
    <div name='home' className='w-full h-screen bg-[#e5e2c4]'>

    {/* Container */}
    <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-[120%]'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col'>
          <h1 className='text-4xl sm:text-6xl font-bold text-[#548f6f]'>Cafe Munchies</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-grey-600'>{t("chill")}</h2>
          <p className='text-[#575e73] py-4 max-w-[700px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quia vero eius assumenda nulla sequi beatae, odit voluptate quam officiis sapiente, atque numquam iure maiores ut ullam repellendus minima dolore?
          </p>
  
          {/* Flex container for buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link to="weed" smooth={true} duration={500}>
              <button className='text-grey-900 group border-2 px-6 py-3 my-2 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558] mx-auto md:mx-0'>
                View Weed
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
  
            <Link to="shop" smooth={true} duration={500}>
              <button className='text-grey-900 group border-2 px-6 py-3 my-2 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558] mx-auto md:mx-0'>
                View Shop
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
  
        <div className='hidden md:block ml-20 w-[60%] h-[100%] mt-20'>
          <div className=''>
            <img className='h-160 w-full rounded-lg hover:scale-110 duration-500 shadow-md shadow-[#040c16]' alt="" src={Image} />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home