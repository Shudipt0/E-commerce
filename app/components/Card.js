import Link from "next/link";
import Image from "next/image";
import Rating from "@mui/material/Rating";
// import { getDiscount } from '../utils/helper';
import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";

import pic from "@/public/Capture.PNG";

export default function Card({ itemView }) {
  return (
    <div>
      {itemView ? (
       <div  className={`cardView ${itemView}  `}>
       <Link href='/' className="link" >

       <div className='image card'>
         <Image src={pic} alt={pic} className='w-full rounded-t ' />
         <div className= ' cardButton '>
             <button className='border border-sky-400 p-1 rounded-full active:bg-sky-200 shadow-md shadow-sky-200 hover:bg-blue-800 hover:text-white text-sky-400' >
             <TfiFullscreen  />
             </button>
             <button className='border border-sky-400 p-1 rounded-full active:bg-sky-200 shadow-md hover:bg-blue-800 hover:text-white text-sky-400'>
             <CiHeart  />
 
                 </button>
         </div>
         </div>
       <div className='p-4   '>
         <h2 className='text-sm md:text-base font-semibold pb-1 text-black capitalize'>
            Smart Watch model-3243
         </h2>
         <div><p className='uppercase text-[9px] lg:text-[11px] font-bold text-green-600 '>in stock</p></div>
         <div>
         <Rating name="read-only" value={5} readOnly size='small' />
         </div>
         
         <div className='flex flex-wrap  items-center justify-between  text-black/[0.5] '>
             <p className='mr-2 text-base lg:text-lg font-semibold'>&#8377;1200</p>
           
             <div className='flex gap-2'>
              <p className='text-sm lg:text-base font-medium line-through text-red-600'>&#8377;2000</p>
              <p className='ml-auto text-sm lg:text-base font-bold text-green-500'>30
               %off
              </p>
             </div>
            
         </div>
       </div>
       </Link>
     </div>

      ) : (
        <div
          className={`w-[150px] md:w-[220px] lg:w-[280px] hover:scale-95 duration-200  rounded-md bg-white  mx-auto card   `}
        >
          <Link href="/">
            <div className="w-full ">
              <Image src={pic} alt={pic} className="w-full" />
              <div className=" cardButton ">
                <button className="border border-sky-400 p-1 rounded-full active:bg-sky-200 shadow-md shadow-sky-200 hover:bg-blue-800 hover:text-white text-sky-400">
                  <TfiFullscreen />
                </button>
                <button className="border border-sky-400 p-1 rounded-full active:bg-sky-200 shadow-md hover:bg-blue-800 hover:text-white text-sky-400">
                  <CiHeart />
                </button>
              </div>
            </div>
            <div className="p-4   ">
              <h2 className="text-sm md:text-base font-semibold pb-1 text-black capitalize">
                Smart Watch model-3243
              </h2>
              <div>
                <p className="uppercase text-[9px] lg:text-[11px] font-bold text-green-600 ">
                  in stock
                </p>
              </div>
              <div>
                <Rating name="read-only" value={5} readOnly size="small" />
              </div>

              <div className="flex flex-wrap  items-center justify-between  text-black/[0.5] ">
                <p className="mr-2 text-base lg:text-lg font-semibold">
                  &#8377;1200
                </p>

                <div className="flex gap-2">
                  <p className="text-sm lg:text-base font-medium line-through text-red-600">
                    2000
                  </p>
                  <p className="ml-auto text-sm lg:text-base font-bold text-green-500">
                    30 %off
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
