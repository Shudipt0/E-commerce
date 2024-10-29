'use client'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import Image from 'next/image';
import pic from '@/public/shop-banner-2.jpg'
import CategoryRight from '../components/CategoryRight';



export default function Categorypage() {
     const [value, setValue] = useState([100, 60000]);
    //  const [value2, setValue2] = useState(0);
   

  return (
    <div className=" w-full   flex flex-col-reverse	 lg:flex-row p-3 z-40 ">
      {/* left side */}
      <div className="w-full lg:w-[20%]  flex flex-wrap lg:flex-row justify-center items-start lg:h-[700px]  gap-3 mx-2  ">
        
        {/* product cat */}
        <div className="w-full sm:w-[300px] lg:w-full py-3 ">
        <p className="text-[14px] md:text-[16px] uppercase font-semibold text-black/[0.8]" >product categories</p>
        <div className='p-1'>
            <ul className='w-full h-[150px] overflow-y-scroll flex flex-col gap-1 '>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
            </ul>
        </div>
        </div>
        {/* price range */}
        <div className='my-3 w-full sm:w-[300px] lg:w-full '>
        <p className="text-[14px] md:text-[16px] uppercase font-semibold text-black/[0.8]" >filter by price</p>

        <div className=' px-2 py-3'>
        <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}  />
        <div className='flex justify-between px-2 pt-2 text-[12px] font-semibold '>
           <span>From: Tk:{value[0]} </span>
           <span>To: Tk:{value[1]} </span>

        </div>
        </div>
        {/* <div>
            <input type='range' min='100' max='60000' step='5' value={value} onInput={setValue} />
            <div className='flex justify-between px-2 text-[12px] font-semibold '>
           <span>From: Tk-{value[0]} </span>
           <span>To: Tk-{value[1]} </span>

        </div> */}
        </div>

        {/* status */}
        
        
        <div className="py-3 w-full sm:w-[300px] lg:w-full">
        <p className="text-[14px] md:text-[16px] uppercase font-semibold text-black/[0.8]" >product status</p>
        <div className='p-1'>
            <ul className='w-full h-[50px]  flex flex-col gap-1 '>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >In stock</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >on sale</label>
                </div>
               </li>
            </ul>
        </div>
        </div>
        {/* brands */}
        <div className="py-3 w-full sm:w-[300px] lg:w-full ">
        <p className="text-[14px] md:text-[16px] uppercase font-semibold text-black/[0.8]" >brands</p>
        <div className='p-1 '>
            <ul className='w-full h-[150px] overflow-y-scroll flex flex-col gap-1 '>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
               <li className='flex '> 
                <div className='flex items-center gap-1'>
                <input type='checkbox' id='men' className=' w-3 h-3 md:w-4 md:h-4' />
                <label for='men' className='capitalize text-[12px] md:text-[14px] font-semibold text-black/[0.8] ' >men</label>
                </div>
               </li>
              
            </ul>
        </div>


        <div className='w-full mt-5 flex justify-center ' >
          <Image src={pic} className='w-[250px]' />
        </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-full lg:w-[80%]  ">
        <CategoryRight/>
      </div>
    </div>
  );
}
