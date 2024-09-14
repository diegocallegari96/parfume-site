import React from 'react'
import bg from "../assets/landingbg2.jpeg"
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/language_selector'

const Landing = () => {
const {t} = useTranslation()
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}} className='w-full h-screen bg-[#e5e2c4] flex justify-center items-center font-bold text-9xl text-white'>{t("name")}</div>
  )
}

export default Landing