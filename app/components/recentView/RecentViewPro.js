

import { IoIosArrowRoundForward } from "react-icons/io";

import RecentCarousel from "./RecentCarousel";

export default function RecentViewPro() {
  return (
    <div className='w-[95%] my-[40px] '>
              {/* upper site */}
           <div className="flex justify-between w-full items-center"> 
             <div>
               <h1 className='text-[20px] md:text-[22px] lg:text-[25px] uppercase font-bold text-black/[0.8] '>recent views</h1>
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
                  <RecentCarousel/>
                  </div>
          </div>
             </div>
  )
}


