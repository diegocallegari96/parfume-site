import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import '../i18next'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div name='contact' className='w-full h-auto bg-[#e5e2c4] flex flex-col items-center p-4'>
      <div className='flex flex-col justify-center items-center w-full max-w-[1000px]'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#548f6f] text-black'>Contact</p>

          {/* Center the paragraph */}
          <div className='w-full flex justify-center items-center'>
            <p className='text-[#575e73] py-4 text-center max-w-[50%]'>{t("intro3")}</p>
          </div>
        </div>
      </div>

      {/* Container for contact details and iframe */}
      <div className='w-full flex flex-col items-center gap-8 px-4'>
        <div className='sm:text-xl md:text-lg lg:text-xl font-bold w-full max-w-[500px]'>
          <p className='mb-4 underline text-black'>
            <a className='flex items-center justify-center border-[#548f6f]' href="https://www.facebook.com/diego.callegari.7792/" target='_blank' rel="noreferrer">
              <FaFacebook size={30} className="mr-4 text-[#1877F2]" /> Facebook
            </a>
          </p>
          <p className='mb-4 underline text-black'>
            <a className='flex items-center justify-center text-black' href="mailto:diegoocallegari@gmail.com">
              <TfiEmail size={30} className="mr-4 text-[#c71610]" /> diegoocallegari@gmail.com
            </a>
          </p>
          <div className='mb-4 text-black'>
            <div className='flex items-center justify-center text-black'>
              <FaPhone size={30} className="mr-4 text-[#0a0a0a]" /> 097 111 1111
            </div>
          </div>
        </div>

        {/* Iframe container */}
        <div className='w-full max-w-[1000px]'>
          <iframe
            title='maps location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496114.9973515906!2d100.63311080000001!3d13.724599550000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok!5e0!3m2!1snl!2sth!4v1726126281608!5m2!1snl!2sth"
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact