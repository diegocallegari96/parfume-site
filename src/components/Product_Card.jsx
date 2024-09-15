import React from 'react';
import { FaLine, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'


const ProductCard = ({ name, imageSrc, thc, cbd, sativa, indica, effects, price, lineUrl, whatsappUrl, messengerUrl }) => {
  const {t} = useTranslation()
  return (
    <div className='shadow-md bg-white shadow-[#040c16] hover:scale-110 duration-500 rounded-lg'>
      <img className='w-50 mx-auto rounded-t-lg' src={imageSrc} alt={`${name} icon`} />
      <div className='justify-center w-max-[20%]'>
        <p className='my-4 text-xl font-bold text-center'>{name}</p>
        <p className='text-sm'><b>THC</b> {thc}% <b>CBD</b> {cbd}%</p>
        <p className='text-sm'><b>Sativa</b> {sativa}% <b>Indica</b> {indica}%</p>
        <p className='text-sm sm:text-xs'>{effects}</p>
        <p className='text-sm mt-2 pl-28'>{t("from")} <b>฿{price}</b></p>
      </div>
      <div className='flex justify-center rounded-b-lg bg-[#e5e2c4] text-5xl'>
        <a href={lineUrl} target="_blank" rel="noopener noreferrer">
          <FaLine className='px-2 text-[#548f6f]' />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='px-2 text-[#548f6f]' />
        </a>
        <a href={messengerUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebookMessenger className='px-2 text-[#548f6f]' />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
