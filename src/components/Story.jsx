import React, { useEffect, useRef, useState } from 'react'
import videoBg from '../assets/flower.mp4'

const StoryVid = () => {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.5, // Play video when 50% of it is visible
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVisible])

  return (
    <div name='story' className='relative w-screen h-screen flex justify-center items-center'>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-left" // Shift to left on mobile
        src={videoBg}
        muted
      />

      {/* Overlay Content */}
      <div className='relative text-center z-10'>
        {/* "The Story Behind" text */}
        <p 
          style={{ fontFamily: 'MilkyWay' }}
          className='font-bold text-[#ffff] text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-left leading-none'>
          The Story Behind
        </p>

        {/* "Seraphine Scent" text */}
        <h2 
          style={{ fontFamily: 'MilkyWay' }} 
          className='font-bold text-[#ffff] mt-[-0.5rem] text-[4rem] sm:text-[6rem] md:text-[12rem] leading-none'>
          Seraphine Scent
        </h2>
      </div>

      {/* Dark Overlay to make text stand out */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
    </div>
  )
}

export default StoryVid
