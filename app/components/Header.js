import Link from "next/link";
import logo from "@/app/public/logo.png";
import Image from "next/image";
import LocationButton from "./LocationButton";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchBox from "./SearchBox";


import CountryData from "../utils/countryData";

import CategoryButton from "./CategoryButton";

export default async function Header() {
  const allCountry = await CountryData();
 
  return (
    <div className=" flex flex-col items-center w-full h-42  md:h-[130px] border-b-2">
      {/* first part start*/}
      <p className="flex justify-center items-center w-full bg-blue-900 text-white text-[10px] lg:text-[12px] h-6  lg:h-8  ">
        Due to the <span className="font-bold mx-2"> covid-19 </span> pendemic,
        orders may be processed with a slight delay
      </p>

      {/* second part start*/}

      <div className=" flex items-center justify-between w-full sm:w-[90%]  h-[50px] my-1 px-4">
        <div className="w-52">
          <Image src={logo} />
        </div>

        <LocationButton allCountry={allCountry} />

        <SearchBox />

        <div className="flex items-center justify-center h-full gap-3">
          <button className="p-2 border border-slate-300 rounded-full active:bg-slate-200">
            <CiUser />
          </button>
          <span className="text-[12px] font-semibold text-black/[0.8] ">
            $3.29
          </span>
          <button className="p-2 bg-orange-200 active:bg-orange-300  rounded-full relative border border-slate-300">
            <MdOutlineShoppingBag className="text-orange-600 " />
            <div className="h-[18px] rounded-full bg-red-600 absolute top-0 left-6 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[5px] font-semibold">
              0
            </div>
          </button>
        </div>
      </div>
      {/* third part start*/}
      <div className="flex flex-col  sm:flex-row items-center justify-between w-full sm:w-[90%] h-[130px]  lg:h-[35px]  gap-2  ">
        {/* all category start */}
        <CategoryButton/>
        {/* all category end */}

        <ul className="flex flex-wrap justify-around items-center w-[75%] ">
          <li>
            <Link href="/">
              <button className="text-[10px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                home
              </button>
            </Link>
          </li>
          <li className=" menButton ">
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                men
              </button>
            </Link>

            <div className=" menList">
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  clothing
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  footwear
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  watches
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  sports
                </button>
              </Link>
            </div>
          </li>
          <li className=" menButton ">
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                women
              </button>
            </Link>
            <div className=" menList">
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  clothing
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  footwear
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  watches
                </button>
              </Link>
            </div>
          </li>
          <li>
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                watches
              </button>
            </Link>
          </li>
          <li className=" menButton ">
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                kids
              </button>
            </Link>
            <div className=" menList">
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  clothing
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  footwear
                </button>
              </Link>
              <Link href="/">
                <button className="w-[100%] text-start uppercase text-[10px] font-semibold text-black/[0.7] hover:underline underline-offset-1">
                  watches
                </button>
              </Link>
              
            </div>
          </li>
          <li>
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                beauty
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                blogs
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button className="text-[12px] lg:text-[12px] font-bold py-1 px-4 uppercase text-black/[0.8] hover:text-sky-500 hover:bg-sky-200 rounded-md">
                contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
