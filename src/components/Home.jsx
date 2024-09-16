import React from 'react'
import Image from '../assets/perfumepic.jpeg'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {

  return (
    <div name='home' className='w-full h-full pt-16 pb-24 bg-white flex justify-center items-center'>

      {/* Container */}
      <div className='w-full mx-auto px-8 flex flex-col justify-center items-center'>
        <div className='flex w-full h-full flex-col md:flex-row justify-center items-center'>
          {/* Image container */}
          <div className='w-full md:w-1/2 h-full'>
            <img src={Image} alt="Perfume" className='w-full h-full object-cover' />
          </div>
          {/* Text container */}
          <div className='w-full md:w-[50%] h-[100%] px-6 md:px-16'>
            <div className='flex flex-col text-center md:text-left mt-8 md:mt-[-10rem]'>
              <h2
                style={{ fontFamily: 'MilkyWay', fontSize: '3rem' }} // Adjust font size for mobile
                className={`mb-2 font-bold text-[#000000]`}>
                Seraphine
              </h2>
              <h2
                style={{ fontFamily: 'MilkyWay', fontSize: '3rem' }} // Adjust font size for mobile
                className={`font-bold text-grey-600 mt-[-1.5rem] md:mt-[-5rem] md:pl-[13rem]`}>
                Scent
              </h2>
              <p
                className={`text-[#747884] pb-4 font-bold`}>
                Immerse yourself in the world of <i>Seraphine Scent</i>, a fragrance that captures the essence of grace and sophistication.
                Crafted with the finest ingredients, <i>Seraphine Scent</i> is more than just a perfume—it’s a statement. 
                Unveil your signature scent and leave a lasting impression wherever you go.
              </p>
            </div>

            {/* Centered Button */}
            <div className='flex justify-center md:justify-start items-center mt-4'>
              <Link to="about" smooth={true} duration={500}>
                <button className='text-grey-900 group border-2 px-6 py-3 flex items-center border-black hover:bg-black hover:text-white'>
                  Learn More
                  <span className=''>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
