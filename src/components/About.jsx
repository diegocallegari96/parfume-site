import React from 'react'


const About = () => {

  return (
    <div name='about' className='w-full h-full pt-20 pb-24 bg-white flex justify-center items-center'>

      {/* Container */}
      <div className='w-full mx-auto px-8 flex flex-col justify-center items-center'>
        <div className='flex w-full h-full flex-col md:flex-row justify-center items-center'>
          {/* Text container */}
          <div className='hidden md:block w-[50%] h-[100%] pt-16 pr-16'>
            <div className='flex flex-col text-center mt-[-10rem] md:text-left'>
              <h2
                style={{ fontFamily: 'MilkyWay', fontSize: '6rem' }}
                className={`mb-2 pt-20 font-bold text-[#000000] text-center`}>
                About
              </h2>
              <p
                className={`text-[#747884] pb-4  text-sm text-center font-bold`}>
                 <i>Seraphine Scent</i> is more than just a fragrance;
                 it's a sensory journey that captivates the soul and lingers in memory.
                 Inspired by the elegance of nature and the sophistication of timeless beauty,
                 <i>Seraphine Scent</i> was crafted to evoke a sense of grace and allure with every spritz.
              </p>
              <p
                className={`text-[#747884] pb-4  text-sm text-center font-bold`}>
                Our perfume is the result of an artistic blend of the finest ingredients sourced from around the world,
                ensuring that every note tells a story. From the fresh top notes that greet you with a burst of energy,
                to the warm, lingering base notes that leave a lasting impression, 
                <i>Seraphine Scent</i> is designed for those who appreciate the art of subtle luxury.
              </p>
              <p
                className={`text-[#747884] pb-4  text-sm text-center font-bold`}>
                Created with care and precision, our fragrance embodies the spirit of individuality, elegance, 
                and authenticity. Whether you're looking to express yourself or leave an unforgettable impression, 
                <i>Seraphine Scent</i> is your signature scent for every occasion.
              </p>
            </div>
            </div>
              {/* Video container */}
              <div className='w-full md:w-1/2 h-full'>
                <video className='w-full h-full object-cover' controls>
                  <source src="./spray.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About