

import capture from '@/public/Capture.PNG';
import Image from 'next/image';
import CategoryCarousel from './CategoryCarousel';

export default function HeroCat() {
  return (
    <div className=" w-full flex justify-center mt-[10px] py-1 shadow-md ">
      <div className='hidden lg:flex justify-around   w-[90%]  ' >
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
      </div>
      <CategoryCarousel/>
    </div>
  )
}

