import React from 'react'
import Perfume1 from '../assets/p1.jpg'
import Perfume2 from '../assets/p2.jpg'
import Perfume3 from '../assets/p3.jpg'
import Perfume4 from '../assets/p4.jpg'


const PhotoFrame = () => {
  return (
    <div name='' className='w-full h-full text-[#575e73] text-center bg-white'>
      <div className='mx-auto px-1 flex flex-col justify-center w-full h-full'>
        {/* Container */}
        <div className='grid grid-cols-4 gap-1'>
          {/* Grid item */}
          <div 
            style={{backgroundImage: `url(${Perfume1})`}} 
            className='group container flex justify-center items-center mx-auto h-[300px] md:h-[700px] w-full bg-cover bg-center content-div'
          >
          </div>
          <div 
            style={{backgroundImage: `url(${Perfume2})`}} 
            className='group container flex justify-center items-center mx-auto h-[300px] md:h-[700px] w-full bg-cover bg-center content-div'
          >
          </div>
          <div 
            style={{backgroundImage: `url(${Perfume3})`}} 
            className='group container flex justify-center items-center mx-auto h-[300px] md:h-[700px] w-full bg-cover bg-center content-div'
          >
          </div>
          <div 
            style={{backgroundImage: `url(${Perfume4})`}} 
            className='group container flex justify-center items-center mx-auto h-[300px] md:h-[700px] w-full bg-cover bg-center content-div'
          >
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoFrame
