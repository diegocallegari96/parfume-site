import React from 'react'
import HTML from '../assets/kush.jpg'
import '../i18next'
import { useTranslation } from 'react-i18next'
import { FaLine } from "react-icons/fa6";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";


const Weed = () => {
    const {t} = useTranslation()
  return (
    <div name='weed' className=' w-full h-full pt-[100px] bg-[#e5e2c4] text-black'>
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
                    <p className='pb-4 pt-4 bg-[#548f6f]'>Kaas Kush 27% THC</p>
                    <div className='flex justify-center text-5xl rounded-b-lg bg-[#e5e2c4]'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                    <FaLine className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://line.me/ti/p/31624728289" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className='px-2 text-[#548f6f]'/>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-b-lg font-bold'>
                    <img className='w-50 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='mt-4 mb-2'>Kaas Kush 27% THC</p>
                    <div className='flex justify-center'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                        <button className='text-grey-900 group border-2 px-6 py-1 mb-2 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>
                            Order Line
                        </button>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg font-bold'>
                    <img className='w-50 mx-auto rounded-t-lg' src={HTML} alt="HTML icon" />
                    <p className='mt-4 mb-2'>Kaas Kush 27% THC</p>
                    <div className='flex justify-center'>
                    <a href="https://wa.me/31624728289" target="_blank" rel="noopener noreferrer">
                        <button className='text-grey-900 group border-2 px-6 py-1 mb-2 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>
                            Whatsapp
                        </button>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-50 mx-auto rounded-t-lg' src={HTML} alt="HTML icon" />
                    <div className='justify-center w-max-[20%]'>
                    <p className='my-4 text-xl font-bold text-center'>OG Kush</p>
                    <p className='text-sm' ><b>THC</b> 27% <b>CBD</b> 0%</p>
                    <p className='text-sm'><b>Sativa</b> 30% <b>Indica</b> 70%</p>
                    <p className='text-sm'>euphoric - happy</p>
                    <p className='text-sm mt-2 pl-16'>From <b>฿799.00</b></p>
                    </div>
                    <div className='flex justify-center text-5xl'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                    <FaLine className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://wa.me/31624728289" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className='px-2 text-[#548f6f]'/>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-50 mx-auto rounded-t-lg' src={HTML} alt="HTML icon" />
                    <div className='justify-center w-max-[20%]'>
                    <p className='my-4 text-xl font-bold text-center'>Cherry Runtz</p>
                    <p className='text-sm' ><b>THC</b> 32% <b>CBD</b> 1%</p>
                    <p className='text-sm'><b>Sativa</b> 60% <b>Indica</b> 40%</p>
                    <p className='text-sm'>euphoric - happy - relaxed</p>
                    <p className='text-sm mt-2 pl-16'>From <b>฿200.00</b></p>
                    </div>
                    <div className='flex justify-center text-5xl'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                    <FaLine className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://wa.me/31624728289" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className='px-2 text-[#548f6f]'/>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-50 mx-auto rounded-t-lg' src={HTML} alt="HTML icon" />
                    <div className='justify-center w-max-[20%]'>
                    <p className='my-4 text-xl font-bold text-center'>Cherry Runtz</p>
                    <p className='text-sm' ><b>THC</b> 32% <b>CBD</b> 1%</p>
                    <p className='text-sm'><b>Sativa</b> 60% <b>Indica</b> 40%</p>
                    <p className='text-sm'>relaxed - uplifted</p>
                    <p className='text-sm mt-2 pl-16'>From <b>฿200.00</b></p>
                    </div>
                    <div className='flex justify-center text-5xl'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                    <FaLine className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://wa.me/31624728289" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className='px-2 text-[#548f6f]'/>
                    </a>
                    </div>
                </div>
                <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-50 mx-auto rounded-t-lg' src={HTML} alt="HTML icon" />
                    <div className='justify-center w-max-[20%]'>
                    <p className='my-4 text-xl font-bold text-center'>Oreoz</p>
                    <p className='text-sm' ><b>THC</b> 30% <b>CBD</b> 0%</p>
                    <p className='text-sm'><b>Sativa</b> 30% <b>Indica</b> 70%</p>
                    <p className='text-sm'>relaxed - Happy - Creative</p>
                    <p className='text-sm mt-2 pl-16'>From <b>฿400.00</b></p>
                    </div>
                    <div className='flex justify-center text-5xl'>
                    <a href="https://line.me/ti/p/khamkoo1996" target="_blank" rel="noopener noreferrer">
                    <FaLine className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://wa.me/31624728289" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='px-2 text-[#548f6f]'/>
                    </a>
                    <a href="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush" target="_blank" rel="noopener noreferrer">
                    <FaFacebookMessenger className='px-2 text-[#548f6f]'/>
                    </a>
                    </div>
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
            </div>
            
        </div>
    </div>
  )
}

export default Weed