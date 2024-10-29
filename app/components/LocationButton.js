'use client'

import { IoIosArrowDown } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addLocation } from "../store/SearchLocationSlice";

export default function LocationButton({allCountry}) {

  const [openModal, setOnepModal] = useState(false);
  
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] =useState([]);
  const [countryName, setCountryName] = useState('')

  // const dispatch = useDispatch();
  // const {countryName} = useSelector((state) => state.location)
  

const selectCountry=(index,data)=>{
  setSelectedTab(index);
  setOnepModal(false);
  setCountryList(allCountry);
  // dispatch(addLocation(data))
  setCountryName(data)
};

useEffect(()=>{
    setCountryList(allCountry)
},[]);

const filterList=(e)=> {
  const keyword = e.target.value.toLowerCase();
 if(keyword!== ""){
  const list = countryList.filter((item)=> {
    return item.country.toLowerCase().includes(keyword)
  });
  setCountryList(list);
 }else{
  setCountryList(allCountry)
 }
};


const crossButton = () => {
  setOnepModal(true);
  setCountryList(allCountry)

}

// const filterList = (e)=> {
// setData(e.target.value)
// };

// const filterOut = countryList.filter((curVal)=>{
//   return curVal.country.toLowerCase().includes(data)
// })

  return (
    <div>
      <button onClick={crossButton }  className="flex items-center gap-4 border rounded border-slate-400 px-4  py-2 w-38 active:bg-slate-200">
        <div className="flex flex-col items-start">
          <p className="text-[12px] font-semibold">Your location</p>
          <p className="text-[10px] font-bold text-black/[0.8]">{countryName !== '' ? countryName.country.length> 10 ? countryName.country?.substr(0,10)+ '...' : countryName.country : 'Select Country'}</p>
        </div>
        <IoIosArrowDown />
      </button>

      <Dialog open={openModal} className="">
      
       <div className="flex flex-col gap-3 w-full p-[25px] ">
       <div className="flex items-center justify-between"><p className="text-[20px] font-bold opacity-70 ">Choose Your Delivery Location</p>
       <button onClick={()=> setOnepModal(false)}  className="p-1 rounded-full hover:bg-slate-200 "><IoMdClose /></button></div>
      
        <p className="text-[12px] font-semibold opacity-70 ">Enter your address and we will specify the offer for your area</p>

        <div className="flex items-center h-[40px] w-full bg-slate-200 rounded-md border border-slate-400">
        <div className="px-3">
            <button className="p-3 rounded-full active:bg-slate-500 active:text-white">
              <FaSearch />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search location"
            className="text-[14px] font-semibold
w-full h-[45px] px-3 bg-transparent outline-none  "
          onChange={filterList}  />
          
        </div>
        <ul className="h-[200px] overflow-y-scroll  ">
          {countryList?.map((data,index)=>(
            <li key={index}  className="w-full border-b"><button onClick={()=> selectCountry(index,data)} className={`w-full text-[12px] font-semibold py-1 pl-3 rounded active:bg-sky-200  flex justify-start ${selectedTab===index ? 'active:bg-sky-200':''}`} >{data.country}</button></li>
          ))}


        </ul>
       </div>
      </Dialog>
    </div>
  );
}




 