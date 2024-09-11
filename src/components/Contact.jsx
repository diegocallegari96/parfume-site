import React from 'react'

const Contact = () => {

  

  return (
<div name='contact' className='w-full h-screen bg-[#e5e2c4] flex justify-center text-center items-center p-4'>
  <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 border-[#548f6f] text-black'>Contact</p>
      <p className='text-[#575e73] py-4'>Don't be lame and come visit us!</p>
    </div>
    
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='text-4xl font-bold'>
        <br /><br /><br />
        <p>hoi</p>
        <p>doei</p>
      </div>
      <div>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1222911635664!2d100.60080987528006!3d13.711042398235467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fc37905e9b7%3A0xed076e1cc11d44da!2sCafe%20Munchies!5e0!3m2!1snl!2sth!4v1726032830339!5m2!1snl!2sth" 
          width="360" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>              
    </div>
  </div>
</div>
    
  )
}

export default Contact