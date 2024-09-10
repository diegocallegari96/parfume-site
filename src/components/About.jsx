import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e5e2c4] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#548f6f]'>
                        About Us
                    </p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>lorem poepsie Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde commodi nobis odit molestiae voluptate nesciunt,</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam officiis rem sunt perspiciatis perferendis mollitia, veritatis atque, sequi non similique, dolores illo asperiores at quod nostrum. Cupiditate, ab excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde commodi nobis odit molestiae voluptate nesciunt, quae architecto tempore obcaecati hic. Enim magnam quam, odit cumque placeat laudantium vel culpa iure.</p>
                </div>              
            </div>    
        
        </div>
    </div>
  )
}

export default About