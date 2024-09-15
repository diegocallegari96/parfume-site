import React from 'react'
import HTML from '../assets/kush.jpg'
import '../i18next'
import { useTranslation } from 'react-i18next'
import { FaLine } from "react-icons/fa6";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import ProductCard from './Product_Card';


const Weed = () => {
    const {t} = useTranslation()
  return (
    <div name='weed' className=' w-full h-full pt-[100px] bg-[#e5e2c4] text-black'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#548f6f]'>{t("indica")}</p>
            </div>
                {/* col aanpassen misschien naar 3?*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
                <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
                <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
                <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
            </div>
            <div>
                <p className='text-4xl text-black font-bold inline border-b-4 border-[#548f6f]'>{t("sativa")}</p>
            </div>
                {/* col aanpassen */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
                <ProductCard 
                name="Oreoz" 
                imageSrc={HTML} 
                thc={30} 
                cbd={0} 
                sativa={30} 
                indica={70} 
                effects="Relaxed - Happy - Creative"
                price={400.00.toFixed(2)}
                lineUrl="https://line.me/ti/p/khamkoo1996" 
                whatsappUrl="https://wa.me/31624728289" 
                messengerUrl="https://m.me/profile.php?id=100084795074605?ref=I%20would%20like%20to%20order%20Kaas%20Kush"
                />
            </div>
            
        </div>
    </div>
  )
}

export default Weed