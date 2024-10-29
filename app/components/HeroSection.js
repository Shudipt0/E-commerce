

import { IoIosArrowRoundForward } from "react-icons/io";
import CardCarousel from './CardCarousel';
import shopBanner from '@/public/shop-banner.jpg'
import shopBanner2 from '@/public/shop-banner-2.jpg'
import banner1 from '@/public/banner-1.jpg';
import banner2 from '@/public/banner-2.jpg';

import Image from 'next/image' ;

export default function HeroSection() {
  return (
    <div className="flex justify-center w-full   py-[20px]">
      <div className="flex flex-col  md:flex-row justify-between  w-[95%]  h-fit gap-2">
        {/* left site start */}
        <div className="w-full  md:w-[22%]  ">
           <div className='flex md:flex-col justify-around md:gap-2 sticky top-0'>
            <Image src={shopBanner} className=' w-[150px] sm:w-[200px] md:w-full ' />
            <Image src={shopBanner2} className=' w-[150px] sm:w-[200px] md:w-full'/>
            </div>
        </div>
        {/* right site start */}
        <div className=" w-full  md:w-[75%] ">
          {/* first part */}
         <div>
           {/* upper site */}
           <div className="flex justify-between w-full items-center"> 
             <div>
               <h1 className='text-[20px] md:text-[22px] lg:text-[25px] uppercase font-bold text-black/[0.8] '>best sales</h1>
               <p className='text-[12px] md:text-[14px] font-semibold text-black/[0.7]  '>Do not miss the current offers until the end of december!</p>
             </div>
             <div>
                 <button className=" flex items-center justify-between gap-1 text-[10px] md:text-[12px] font-semibold py-1 px-3 rounded-full bg-slate-200 text-black/[0.8]">
                <p>view all</p>
                 <IoIosArrowRoundForward />
                 </button>
             </div>
          </div>
          {/* down site */}
          <div className=' '>
                <div className=''>
                  <CardCarousel/>
                  </div>
          </div>
         </div>
          {/* second part */}
             <div className=''>
              {/* upper site */}
           <div className="flex justify-between w-full items-center"> 
             <div>
               <h1 className='text-[20px] md:text-[22px] lg:text-[25px] uppercase font-bold text-black/[0.8] '>new products</h1>
               <p className='text-[12px] md:text-[14px] font-semibold text-black/[0.7]  '>Check out our new collection!</p>
             </div>
             <div>
                 <button className=" flex items-center justify-between gap-1 text-[10px] md:text-[12px] font-semibold py-1 px-3 rounded-full bg-slate-200 text-black/[0.8]">
                <p>view all</p>
                 <IoIosArrowRoundForward />
                 </button>
             </div>
          </div>
          {/* down site 2 */}
          <div className=' '>
                <div className=''>
                  <CardCarousel/>
                  </div>
          </div>
             </div>

             {/* down site-3 */}
             <div className='w-full flex justify-around mt-3 gap-1'>
                  <Image src={banner1} className="w-[50%]" />
                  <Image src={banner2} className="w-[50%]"/>

             </div>
        </div>

      </div>
    </div>
  )
}
