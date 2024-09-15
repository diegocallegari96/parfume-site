import React from 'react'
import bg from "../assets/parfumebg.jpg"


const Landing = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}} className='w-full h-screen flex text-center justify-center items-center'>
        <div className='text-center'>
        <p style={{ fontFamily: 'MilkyWay', fontSize: '12rem' }} className='font-bold mb-0 text-[#ffff]' >
          Seraphine Scent
        </p>
        <p style={{ fontFamily: 'MilkyWay', fontSize: '4rem' }} className='font-bold text-left mt-[-6rem] text-[#ffff]' >
          Parfume
        </p>
      </div>
      </div>
  )
}

export default Landing