import React from 'react'
import HTML from '../assets/kush.jpg'

const Weed = () => {
  return (
    <div name='skills' className=' w-full h-full pt-[100px] bg-[#e5e2c4] text-black'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#548f6f]'>Indica</p>
            </div>
                {/* col aanpassen misschien naar 3?*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
            </div>
            <div>
                <p className='text-4xl text-black font-bold inline border-b-4 border-[#548f6f]'>Sativa</p>
            </div>
                {/* col aanpassen */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>Kaas Kush 27% THC</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Weed