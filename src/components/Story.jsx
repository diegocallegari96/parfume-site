import React from 'react'


const Story = () => {


  return (
<div name='story' className='w-full h-full py-40  bg-[#e5e2c4] text-black'>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    {/* About Heading */}
    <div className='max-w-[1000px] w-full px-4 text-center pb-8'>
      <p className='text-4xl font-bold inline border-b-4 border-[#548f6f]'>
        Story
      </p>
    </div>
    
    {/* Container for the About content */}
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-right text-4xl font-bold'>
        <p>Test</p>
      </div>
      <div>
        <p className='text-center pb-4 font-bold text-2xl'>Hierom</p>
        <ul className='list-inside text-left space-y-2'>
          <li className='text-lg'><span className="font-bold">jij</span>ik</li>
          <li className='text-lg'><span className="font-bold">jij</span>ik</li>
          <li className='text-lg'><span className="font-bold">jij</span>ik</li>
        </ul>
      </div>              
    </div>    
  </div>
</div>

  )
}

export default Story