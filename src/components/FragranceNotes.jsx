import React from 'react';

const FragranceNotes = () => {
  return (
    <div name='notes' className='w-full h-full pt-40 bg-white text-black'>
      
      {/* Fragrance Notes Section */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* Heading */}
        <div className='max-w-[1200px] w-full px-4 text-center pb-8'>
          <h2 className='text-6xl font-bold' style={{ fontFamily: 'MilkyWay' }}>
            Fragrance Notes
          </h2>
          <p className='text-2xl mt-4 text-[#575e73]'>Discover the captivating layers of Seraphine Scent</p>
        </div>

        {/* Notes List */}
        <div className='max-w-[1200px] w-full grid sm:grid-cols-3 gap-8 pb-8 px-4'>
          {/* Top Notes */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black text-center' style={{ fontFamily: 'MilkyWay' }}>Top Notes</h3>
            <ul className='mt-4 space-y-2'>
              <li className='text-xl'><strong>Bergamot</strong> – A fresh and vibrant burst of citrus to uplift your senses.</li>
              <li className='text-xl'><strong>Pear Blossom</strong> – Soft, fruity, and delicate, adding a sweet freshness to the opening.</li>
            </ul>
          </div>

          {/* Heart Notes */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black text-center' style={{ fontFamily: 'MilkyWay' }}>Heart Notes</h3>
            <ul className='mt-4 space-y-2'>
              <li className='text-xl'><strong>Jasmine</strong> – A lush floral essence that embodies elegance.</li>
              <li className='text-xl'><strong>Rose Petals</strong> – Soft, romantic, and timeless, adding depth and sophistication to the scent.</li>
            </ul>
          </div>

          {/* Base Notes */}
          <div className='bg-[#f7f7f7] shadow-lg rounded-lg p-6'>
            <h3 className='text-3xl font-bold text-black text-center' style={{ fontFamily: 'MilkyWay' }}>Base Notes</h3>
            <ul className='mt-4 space-y-2'>
              <li className='text-xl'><strong>Sandalwood</strong> – A warm and woody aroma that lingers on the skin, grounding the fragrance in a rich earthy tone.</li>
              <li className='text-xl'><strong>Amber</strong> – Adds a subtle sweetness and warmth, leaving a long-lasting, luxurious finish.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className='flex flex-col justify-center items-center w-full h-full py-24 bg-[#f7f7f7]'>
        {/* Heading */}
        <div className='max-w-[1200px] w-full px-4 text-center pb-8'>
          <h2 className='text-5xl font-bold' style={{ fontFamily: 'MilkyWay' }}>
            A Fragrance that Evolves with You
          </h2>
        </div>

        {/* Story Details */}
        <div className='max-w-[1000px] text-center'>
          <p className='text-lg text-[#747884] px-8'>
            Each layer of <i>Seraphine Scent</i> tells a story, evolving as the day progresses, revealing a new side of yourself with every hour. From the light, airy top notes to the rich and sultry base, this fragrance is designed to complement your unique presence, ensuring a long-lasting, luxurious finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FragranceNotes;
