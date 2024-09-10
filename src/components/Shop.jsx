import React from 'react'
import Inside from '../assets/inside_picture.jpg'
import Inside2 from '../assets/inside_picture2.jpg'
import Outside from '../assets/outside_picture.jpg'

const MyWork = () => {
  return (
    <div name='shop' className='w-full h-full text-[#575e73] text-center bg-[#e5e2c4]'>
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-[#548f6f]'>Our Place</p>
                <p className='py-6'>Have a look in your future hang-out</p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item */}
                <div 
                style={{backgroundImage: `url(${Inside})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                </div>
                <div 
                style={{backgroundImage: `url(${Inside2})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                </div>
                <div 
                style={{backgroundImage: `url(${Outside})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork