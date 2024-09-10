import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9049e4]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Diego, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I'm an aspiring Front-End Developer with a passion for React, JavaScript, and TailwindCSS. 
                       My journey is driven by a relentless curiosity and a keen eye for solving problems. 
                       I thrive on creating responsive, user-friendly web applications and am always exploring ways to enhance their functionality and design. 
                       I'm eager to learn, grow, and collaborate on exciting projects that push the boundaries of web development.</p>
                </div>              
            </div>    
        
        </div>
    </div>
  )
}

export default About