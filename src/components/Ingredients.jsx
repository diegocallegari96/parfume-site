import React from 'react';

const Ingredients = () => {
  return (
    <div name='ingredients' className='w-full h-full pt-40 relative bg-white text-black'>
      
      {/* Introduction Section */}
      <div className='relative z-10 max-w-[1400px] mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-6xl font-bold uppercase tracking-widest' style={{ fontFamily: 'MilkyWay', color: '#333' }}>
            Ingredients
          </h2>
          <p className='text-lg md:text-2xl text-[#575e73] mt-4'>
            The exceptional ingredients that make Seraphine Scent a true luxury experience.
          </p>
        </div>

        {/* Key Ingredients Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 relative'>
          
          {/* Bergamot */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Bergamot</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Southern Italy</p>
            <p className='text-sm md:text-lg mt-4'>
              A fresh, zesty citrus that awakens the senses, adding a vibrant, uplifting quality.
            </p>
          </div>

          {/* Pear Blossom */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Pear Blossom</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Delicate sweetness</p>
            <p className='text-sm md:text-lg mt-4'>
              Offers a fruity, soft element, enhancing the fresh opening of the fragrance.
            </p>
          </div>

          {/* Jasmine */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Jasmine</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Handpicked from India</p>
            <p className='text-sm md:text-lg mt-4'>
              Rich, floral opulence that creates an exotic and elegant heart note.
            </p>
          </div>

          {/* Rose Petals */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Rose Petals</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Classic elegance</p>
            <p className='text-sm md:text-lg mt-4'>
              Timeless beauty that adds depth and sophistication, blending seamlessly with the heart notes.
            </p>
          </div>

          {/* Sandalwood */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Sandalwood</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Sustainably sourced</p>
            <p className='text-sm md:text-lg mt-4'>
              A warm, woody undertone that provides richness and depth to the base notes.
            </p>
          </div>

          {/* Amber */}
          <div className='group relative bg-[#333] text-white p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='hidden md:block md:absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 bg-[#f1f1f1] rounded-full group-hover:bg-[#ffffff] transition-all duration-500'></div>
            <h3 className='text-2xl md:text-4xl font-bold' style={{ fontFamily: 'MilkyWay' }}>Amber</h3>
            <p className='text-sm md:text-lg italic text-[#d1d1d1] mt-2'>Golden resin</p>
            <p className='text-sm md:text-lg mt-4'>
              Sweet and warm, amber adds a luxurious finish that lingers, ensuring longevity.
            </p>
          </div>

        </div>
      </div>

      {/* Commitment to Quality Section */}
      <div className='flex flex-col justify-center items-center w-full py-32 bg-[#f7f7f7] mt-20'>
        {/* Heading */}
        <div className='max-w-[1200px] w-full text-center'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-wide lg:underline inline-block border-[#333]' style={{ fontFamily: 'MilkyWay' }}>
            Our Commitment to Quality
          </h2>
        </div>

        {/* Commitment Text */}
        <div className='max-w-[1000px] text-center mt-12 px-4'>
          <p className='text-sm md:text-lg text-[#575e73]'>
            At <i>Seraphine Scent</i>, we believe in ethical sourcing and sustainable production practices. Each ingredient is carefully selected to ensure quality, purity, and a luxurious scent experience. Our commitment to excellence ensures that every bottle is crafted with care and free from harmful chemicals, making it not only beautiful but also eco-conscious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
