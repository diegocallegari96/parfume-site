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
        ref={videoRef} // Ensure the ref is on the video element, not the container div
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        muted
        loop
      />

      {/* Overlay Content */}
      <div className='relative text-center z-10'>
        <p style={{ fontFamily: 'MilkyWay', fontSize: '4rem' }} className='font-bold pt-24 text-left text-[#ffff]'>
          The Story Behind
        </p>
        <h2 style={{ fontFamily: 'MilkyWay', fontSize: '12rem' }} className='font-bold mt-[-5rem] text-[#ffff]'>
          Seraphine Scent
        </h2>
      </div>

      {/* Dark Overlay to make text stand out */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
    </div>
  )
}

export default StoryVid
