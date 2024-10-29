'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


export default function CategoryButton() {

    const [openCategory, setOpenCategory] = useState(false)
  return (
    
      <div className="">
          <button onClick={()=> setOpenCategory(!openCategory)}  className="flex items-center gap-3 py-2 px-5 bg-sky-500 rounded-full w-full sm:w-[250px] justify-between active:bg-sky-400 relative h-[30px]">
            <FaBars className="text-white text-[12px]" />
            <p className="uppercase text-[12px] text-white font-semibold">
              All Categories
            </p>
            <IoIosArrowForward className={`${openCategory ? 'rotate-90': '' } text-white`} />
          </button>
          {openCategory&& (
            <ul className="flex flex-col justify-around w-[250px] bg-white absolute shadow-lg mt-[24px] transition  duration-300 z-50 ">
            <li>
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className=" w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md  ">
                  home
                </button>
              </Link>
            </li>
            <li className=" menButton ">
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className=" flex items-center justify-between w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                  <p>men</p>
                  <IoIosArrowForward />
                </button>
              </Link>
  
              <div className=" menListCategory">
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    clothing
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    footwear
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    watches
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    sports
                  </button>
                </Link>
              </div>
            </li>
            <li className=" menButton ">
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className=" flex items-center justify-between w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                <p>women</p>
                <IoIosArrowForward />
                </button>
              </Link>
              <div className="menListCategory">
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    clothing
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    footwear
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    watches
                  </button>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className="w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                  watches
                </button>
              </Link>
            </li>
            <li className=" menButton ">
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className="flex items-center justify-between w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                <p>kids</p>
                  <IoIosArrowForward />
                </button>
              </Link>
              <div className=" menListCategory">
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    clothing
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    footwear
                  </button>
                </Link>
                <Link href="/">
                  <button onClick={()=> setOpenCategory(false)} className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                    watches
                  </button>
                </Link>
                
              </div>
            </li>
            <li>
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className="w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                  beauty
                </button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className="w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                  blogs
                </button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <button onClick={()=> setOpenCategory(false)} className="w-full text-start  text-[10px] lg:text-[12px] font-bold py-2 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                  contact
                </button>
              </Link>
            </li>
          </ul>
          )}
        </div>
    
  )
}

 
