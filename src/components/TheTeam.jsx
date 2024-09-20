import React from 'react'
import Woman1 from '../assets/w1.jpg'
import Woman2 from '../assets/w2.jpg'
import Woman3 from '../assets/w3.jpeg'
import bg from '../assets/parfumeteam.jpg'

const TheTeam = () => {
  return (
    <div name='team' className='w-full h-full pt-16 pb-28 text-[#575e73] text-center bg-white' style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}}>
      <div className='mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center w-[90%] h-full'>
        <h2 className='font-bold pb-8 text-white text-4xl md:text-5xl' style={{ fontFamily: 'MilkyWay' }}>
          Our Team
        </h2>
        
        {/* Container */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12'>
          {/* Grid item for Woman1 */}
          <div className='relative group'>
            <div 
              style={{backgroundImage: `url(${Woman1})`}} 
              className='flex justify-center items-center mx-auto h-[250px] md:h-[400px] lg:h-[500px] w-full bg-cover bg-center content-div'
            />
            {/* Name card */}
            <div className='absolute bottom-0 w-full bg-white bg-opacity-90 py-2'>
              <h3 className='font-bold text-base md:text-lg lg:text-xl'>Isabelle Fontaine</h3>
              <p className='text-sm'>Perfume Specialist</p>
            </div>
          </div>

          {/* Grid item for Woman2 */}
          <div className='relative group'>
            <div 
              style={{backgroundImage: `url(${Woman2})`}} 
              className='flex justify-center items-center mx-auto h-[250px] md:h-[400px] lg:h-[500px] w-full bg-cover bg-center content-div'
            />
            {/* Name card */}
            <div className='absolute bottom-0 w-full bg-white bg-opacity-90 py-2'>
              <h3 className='font-bold text-base md:text-lg lg:text-xl'>Sophie Laurent</h3> 
              <p className='text-sm'>Fragrance Consultant</p>
            </div>
          </div>

          {/* Grid item for Woman3 */}
          <div className='relative group'>
            <div 
              style={{backgroundImage: `url(${Woman3})`}} 
              className='flex justify-center items-center mx-auto h-[250px] md:h-[400px] lg:h-[500px] w-full bg-cover bg-center content-div'
            />
            {/* Name card */}
            <div className='absolute bottom-0 w-full bg-white bg-opacity-90 py-2'>
              <h3 className='font-bold text-base md:text-lg lg:text-xl'>Elena Dufour</h3>
              <p className='text-sm'>Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheTeam
