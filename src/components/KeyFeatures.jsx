import React from 'react'
import PerfumeImage from '../assets/keyp1.jpg'
import IconElegance from '../assets/ico6.png'
import IconLongLasting from '../assets/ico1.png'
import IconCraftedWithCare from '../assets/ico2.png'
import IconSignatureFragrance from '../assets/ico3.png'
import IconExclusivity from '../assets/ico4.png'
import IconLuxuriousPackaging from '../assets/ico5.png'

const KeyFeatures = () => {
  return (
    <div name='' className='w-full min-h-screen bg-[#e7e6e6] text-black pt-1'>
      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 min-h-screen'>
        
        {/* Left side: Key Features (80%) */}
        <div className='col-span-4 flex flex-col justify-start mt-6'>
          {/* Heading and Intro Paragraph */}  
          <div className='text-center'>
            <h2 className='text-4xl font-bold pt-8 mb-4' style={{ fontFamily: 'MilkyWay', fontSize: '3.5rem' }}>
              Discover the Essence
            </h2>
            <p className='text-lg max-w-[800px] mx-auto mb-8'>
              A fragrance crafted for those who seek sophistication and elegance in every moment. With its blend of premium ingredients and luxurious presentation, <i>Seraphine Scent</i> offers more than just a perfume—it’s an experience. Explore the key features that make this fragrance truly exceptional.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className='grid grid-cols-1 px-4 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center text-center'>
              <img src={IconElegance} alt='Elegance Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold'
              style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Elegance</h3>
              <p className='text-lg pt-4'>
                Discover a fragrance that brings a sense of refined sophistication with every spritz. Elevate your style with an aura of timeless elegance.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src={IconLongLasting} alt='Long-Lasting Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold' style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Long-Lasting</h3>
              <p className='text-lg pt-4'>
                Enjoy a scent that lasts all day. Seraphine Scent ensures you remain captivating from morning to night.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src={IconCraftedWithCare} alt='Crafted with Care Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold' style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Crafted with Care</h3>
              <p className='text-lg pt-4'>
                Each bottle of Seraphine Scent is a work of art, crafted with precision and care using the finest natural ingredients.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src={IconSignatureFragrance} alt='Signature Fragrance Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold' style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Signature Fragrance</h3>
              <p className='text-lg pt-4'>
                A unique blend of top, middle, and base notes creates a signature scent that is truly unforgettable and personalized.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src={IconExclusivity} alt='Exclusivity Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold' style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Exclusivity</h3>
              <p className='text-lg pt-4'>
                Seraphine Scent is a limited edition release. Experience the exclusivity of a fragrance designed for those who appreciate the finer things in life.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <img src={IconLuxuriousPackaging} alt='Luxurious Packaging Icon' className='w-24 h-24'/>
              <h3 className='text-xl font-bold' style={{ fontFamily: 'MilkyWay', fontSize: '2rem' }}>
                Luxurious Packaging</h3>
              <p className='text-lg pt-4'>
                Encased in premium packaging, Seraphine Scent is perfect for both personal indulgence or gifting to someone special.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Image (20%) */}
        <div className='col-span-1 w-full h-full'>
          <img src={PerfumeImage} alt='Seraphine Scent Perfume' className='w-full h-full object-cover pr-1' />
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
