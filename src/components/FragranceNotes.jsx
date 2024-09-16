import React from 'react';

const Ingredients = () => {
  return (
    <div name='notes' className='w-full h-full py-40 bg-white text-black'>
      
      {/* Key Ingredients Section */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Heading */}
        <div className='max-w-[1200px] w-full px-4 text-center pb-8'>
          <h2 className='text-6xl font-bold' style={{ fontFamily: 'MilkyWay' }}>
            Key Ingredients
          </h2>
          <p className='text-2xl mt-4 text-[#575e73]'>The Essence of Seraphine Scent</p>
        </div>

        {/* Ingredient List */}
        <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 pb-8 px-4'>
          {/* Bergamot */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Bergamot</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>Sourced from the sun-drenched orchards of Southern Italy.</p>
            <p className='text-lg mt-4'>Adds a fresh, zesty start with its bright, citrusy profile.</p>
          </div>

          {/* Pear Blossom */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Pear Blossom</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>A delicate touch of sweetness.</p>
            <p className='text-lg mt-4'>Offers a fruity, soft element that enhances the freshness of the top notes.</p>
          </div>

          {/* Jasmine */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Jasmine</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>Handpicked from the fields of India.</p>
            <p className='text-lg mt-4'>Brings floral richness, opulence, and an exotic scent to the heart of Seraphine Scent.</p>
          </div>

          {/* Rose Petals */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Rose Petals</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>Finest petals for timeless beauty.</p>
            <p className='text-lg mt-4'>Adds elegance and sophistication, blending seamlessly with other notes.</p>
          </div>

          {/* Sandalwood */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Sandalwood</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>Sustainably sourced from Australia.</p>
            <p className='text-lg mt-4'>Provides a warm, woody undertone that adds depth and richness.</p>
          </div>

          {/* Amber */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black' style={{ fontFamily: 'MilkyWay' }}>Amber</h3>
            <p className='text-lg mt-2 text-[#747884] italic'>Sweet, resinous aroma for the perfect finish.</p>
            <p className='text-lg mt-4'>Adds warmth and longevity, ensuring the fragrance stays with you.</p>
          </div>
        </div>
      </div>

      {/* Commitment to Quality Section */}
      <div className='flex flex-col justify-center items-center w-full h-full py-24 bg-[#f7f7f7]'>
        {/* Heading */}
        <div className='max-w-[1200px] w-full px-4 text-center pb-8'>
          <h2 className='text-5xl font-bold inline border-b-4 border-black' style={{ fontFamily: 'MilkyWay' }}>
            Our Commitment to Quality
          </h2>
        </div>

        {/* Commitment Details */}
        <div className='max-w-[1000px] text-center'>
          <p className='text-lg text-[#747884] px-8'>
            At Seraphine Scent, we prioritize quality and sustainability in every aspect of our production process. Our ingredients are ethically sourced, and we adhere to the highest standards of craftsmanship, ensuring that every bottle of <i>Seraphine Scent</i> is a true work of art. Free from harmful chemicals, we offer a luxurious and eco-conscious fragrance designed to elevate your senses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
