import React from 'react'
import bg from "../assets/parfumebg.jpg"

const Landing = () => {
  return (
    <div name='landing' 
         style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}} 
         className='w-screen h-screen flex text-center justify-center items-center'>
      <div className='text-center px-4 lg:mt-8'>
        {/* Large Seraphine Scent Text */}
        <p style={{ fontFamily: 'MilkyWay', lineHeight: '5rem' }} 
           className='font-bold mb-0 text-[#ffff] text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none'>
          Seraphine Scent
        </p>

        {/* Smaller Parfume Text closely underneath */}
        <p style={{ fontFamily: 'MilkyWay' }} 
           className='font-bold mt-[-0.5rem] text-[#ffff] lg:text-left text-[2rem] md:text-[4rem]'>
          Parfume
        </p>
      </div>
    </div>
  )
}

export default Landing
