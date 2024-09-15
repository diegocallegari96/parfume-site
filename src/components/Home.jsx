import React from 'react'
import Image from '../assets/mainplace1.jpeg'
import '../i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  const { t, i18n } = useTranslation()

  // Check if the current language is Thai
  const isThai = i18n.language === 'th';

  return (
    <div name='home' className='w-full h-screen bg-[#f6f4d8] flex justify-center items-center'>

      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex flex-col text-center md:text-left'>
            <h1
              className={`mb-2 pt-28 font-bold text-[#548f6f] ${isThai ? 'text-5xl sm:text-7xl pb-2' : 'text-4xl sm:text-6xl'}`}>
              {t("name")}
            </h1>
            <h2
              className={`font-bold text-grey-600 ${isThai ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'}`}>
              {t("chill")}
            </h2>
            <p
              className={`text-[#575e73] py-4 max-w-[700px] font-bold ${isThai ? 'text-2xl' : 'text-xl'}`}>
              {t("intro1")}
            </p>

            {/* Flex container for buttons */}
            <div className="flex flex-col md:flex-row items-center my-8 md:my-0 space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <Link to="weed" smooth={true} duration={500}>
                <button className='text-grey-900 group border-2 px-6 py-3 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>
                  {t("btnw")}
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>

              <Link to="shop" smooth={true} duration={500}>
                <button className='text-grey-900 group border-2 px-6 py-3 flex items-center border-[#548f6f] hover:bg-[#548f6f] hover:border-[#3f7558]'>
                  {t("btns")}
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className='hidden md:block ml-20 w-[60%] h-[100%] mt-20'>
            <div className=''>
              <img className='h-160 w-full rounded-lg hover:scale-110 duration-500 shadow-md shadow-[#040c16]' alt="" src={Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home