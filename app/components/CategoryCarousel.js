'use client'

import capture from '@/public/Capture.PNG';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel() {
    const responsive = {
      
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 8,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 7,
        },
      };
  return (
    <div className='w-full lg:hidden '>
       <Carousel responsive={responsive}   removeArrowOnDeviceType={["tablet", "mobile"]}
 containerClass=' flex justify-start mx-2 ' itemClass=" mx-[2px] bg-white shaddow-sm  flex justify-center "  >
         <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
          <div className='w-[80px] flex flex-col items-center '>
            <Image src={capture} className='w-[60px]' />
            <p className='font-semibold text-[14px] capitalize'>grocery</p>
          </div>
        </Carousel>
    </div>
  )
}


