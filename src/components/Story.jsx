import React from 'react'
import videoBg from '../assets/flower.mp4'  // Import your MP4 video file

const StoryVid = () => {
  return (
    <div name='story' className='relative w-screen h-screen flex justify-center items-center'>
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src={videoBg} 
        autoPlay 
        muted
      />

      {/* Overlay Content */}
      <div className='relative text-center z-10'>
          <p style={{ fontFamily: 'MilkyWay', fontSize: '4rem' }} className='font-bold pt-24 text-left text-[#ffff]' >
          The Story Behind
          </p>
        <h2 style={{ fontFamily: 'MilkyWay', fontSize: '12rem' }} className='font-bold mt-[-5rem] text-[#ffff]' >
          Seraphine Scent
        </h2>
      </div>

      {/* Dark Overlay to make text stand out */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
    </div>
  )
}

export default StoryVid
