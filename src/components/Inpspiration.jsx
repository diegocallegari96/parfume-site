import React from 'react'
import bg from '../assets/mandalabg.jpg' // Replace with your background image

const InspirationPage = () => {
  return (
    <div name='inspiration' className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
      {/* Overlay for better readability */}
      <div className='w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
        
        <div className='text-center px-4 md:px-20 max-w-[900px]'>
          <h1 style={{ fontFamily: 'MilkyWay', fontSize: '5rem' }} className='text-white font-bold mb-8'>
            The Inspiration
          </h1>
          <p className='text-lg text-[#eaeaea] leading-relaxed'>
            At the heart of <span className='italic'>Seraphine Scent</span> lies a tale of elegance, passion, and craftsmanship. This fragrance was born from the desire to encapsulate the essence of timeless beauty. It’s more than just a scent—it’s a journey into the soul of nature and luxury.
          </p>
          <p className='text-lg text-[#eaeaea] leading-relaxed mt-4'>
            Inspired by the delicate balance between strength and softness, Seraphine Scent is the result of countless hours of dedication by a team of master perfumers. Their goal was to create a fragrance that speaks to both the heart and the mind, evoking emotions of grace, confidence, and allure.
          </p>
          <p className='text-lg text-[#eaeaea] leading-relaxed mt-4'>
            The journey starts with fresh, uplifting top notes that greet you like the first breath of morning air. This freshness is the initial burst of energy and optimism that sets the stage for the complex scent journey that follows.
          </p>
        </div>

      </div>
    </div>
  )
}

export default InspirationPage
