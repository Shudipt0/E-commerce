"use client";


import Link from "next/link";
import Rating from "@mui/material/Rating";
import ProductSlide from "../components/ProductSlide";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import CustomerReview from "../components/CustomerReview";
import RelatedProduct from "../components/RelatedProduct";
import RecentViewPro from "../components/recentView/RecentViewPro";




export default function SingleProduct() {
 const [activeSize, setActiveSize] = useState(null);
 const isActive = (i) => {
  setActiveSize(i)
 }
  return (
    <div className="flex flex-col items-center w-full bg-slate-100">
      <div className="h-fit my-10 w-[90%] bg-white/[0.7] shadow-lg ">
        <div className="w-full p-4  flex flex-col lg:flex-row justify-center md:gap-6">
          {/* left side start*/}
        <ProductSlide/>
          {/* left side end*/}

          {/* right side start*/}
          <div className="lg:w-[70%] flex flex-col items-center  ">
            <div className="w-[90%] mx-auto mt-10">
              {/*  title */}
              <div className="text-[22px] lg:text-[30px] font-semibold mb-2 ">
                Smart Watch model-3243
              </div>
              {/* ratings */}
              <p className="uppercase text-[9px] lg:text-[11px] font-bold text-green-600 ">
                in stock
              </p>
              <ul className="flex items-center gap-2 " >
                
               <li className="text-[12px] lg:text-[13px] text-black/[0.7] font-mono ">Brand: <span className="text-black" >Watches</span> </li>
               <li className="" >
                
                <Rating name="read-only" value={5} readOnly size="small" className="py-1" />
                
               
               </li>
               <li className="text-[12px] lg:text-[13px] text-black/[0.7] ">1 Review</li>
               </ul>
               {/* price */}
               <div className=' text-black/[0.5] py-2 '>
             
               <p className='ml-auto text-sm lg:text-base font-bold text-green-500'>30
               %off
              </p>
             <div className='flex gap-2 items-center'>
             
              <p className='mr-2 text-base lg:text-lg font-semibold'>&#8377;1200</p>
              <p className='text-sm lg:text-base font-medium line-through text-red-600'>&#8377;2000</p>
             </div>
            
         </div>
         
          <p className="text-[12px] font-semibold text-black/[0.7] ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

          

          <div className="my-4">
            
            <ul className="flex gap-1 items-center ">
            <span className="text-[12px] font-semibold text-black/[0.8] mr-3"> Size / Weight:</span>
              <li><button onClick={()=> setActiveSize(0)}  className={  `${activeSize === 0 ? 'active text-white' : ''} text-[11px] py-1 px-2 rounded border border-black/[0.5] font-semibold text-black/[0.8] `} >50g</button></li>
              <li><button onClick={()=> setActiveSize(1)}  className={  `${activeSize === 1 ? 'active text-white' : ''} text-[11px] py-1 px-2 rounded border border-black/[0.5] font-semibold text-black/[0.8] `} >100g</button></li>
              <li><button onClick={()=> setActiveSize(2)}  className={  `${activeSize === 2 ? 'active text-white' : ''} text-[11px] py-1 px-2 rounded border border-black/[0.5] font-semibold text-black/[0.8] `} >150g</button></li>
              <li><button onClick={()=> setActiveSize(3)}  className={  `${activeSize === 3 ? 'active text-white' : ''} text-[11px] py-1 px-2 rounded border border-black/[0.5] font-semibold text-black/[0.8] `} >200g</button></li>
              <li><button onClick={()=> setActiveSize(4)}  className={  `${activeSize === 4 ? 'active text-white' : ''} text-[11px] py-1 px-2 rounded border border-black/[0.5] font-semibold text-black/[0.8] `} >250g</button></li>
            </ul>
          </div>
          <div className="flex gap-2 mt-3">
            <div>quantity box</div>
            <button className="py-1 px-3 mx-4 text-[12px] lg:text-[13px] rounded-full bg-blue-500 text-white active:bg-green-500 hover:bg-blue-700 uppercase border-none  ">add to cart</button>
            <button className="p-1  rounded-full bg-slate-300 text-black  hover:bg-blue-700 hover:text-white border border-black/[0.5]  text-center "><CiHeart size={20} /></button>
            <button className="p-1  rounded-full bg-slate-300 text-black  hover:bg-blue-700 hover:text-white border border-black/[0.5]  text-center "><HiArrowsUpDown size={20} /></button>
           

          </div>
                 
            </div>
          </div>
        </div>
      </div>
      {/* right side end*/}

      <CustomerReview/>
      <RelatedProduct/>
      <RecentViewPro/>
      
    </div>
  );
}
