'use client'

import { TiThMenu } from "react-icons/ti";

import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Card from "./Card";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CategoryRight() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four')
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// pagination
// const [curPage, setCurPage] = useState(1);
// const itemsPerPage = 8;

// const indexOfLastItem = curPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItem = allRecipes.slice(indexOfFirstItem, indexOfLastItem);

// const totalItems = allRecipes.length;
// const pageNumber = [];
// for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//   pageNumber.push(i);
// }

// const paginate = (pageNumber) => {
//   setCurPage(pageNumber);
// };

  return (
    <div className="w-full px-4 ">
      <div className="w-full flex justify-between items-center h-[50px] bg-slate-100 shadow px-2 rounded-sm  ">
           <div className="flex items-center  gap-3 ">
            <button onClick={()=> setProductView('one')}  className={`p-1 rounded-full active:bg-blue-300 opacity-60  `}><TiThMenu size={15} className={(productView=== 'one')? 'text-blue-600' : ''} /> </button>
            
              <button onClick={()=> setProductView('four')} className="p-1 rounded-full active:bg-blue-300 opacity-60"><TfiLayoutGrid4Alt size={13} className={(productView=== 'four')? 'text-blue-600' : ''} /> </button>

           </div>
           <div>
               <div>
                <button onClick={handleClick} className="flex justify-around items-center text-[14px] font-bold text-black/[0.7] p-1 rounded-md active:bg-blue-300 ">Show 9 <IoMdArrowDropdown/> </button>
                <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={openDropDown}
        onClose={handleClose}
        // TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}  >10</MenuItem>
        <MenuItem onClick={handleClose}>30</MenuItem>
        <MenuItem onClick={handleClose}>10</MenuItem>
        <MenuItem onClick={handleClose}>50</MenuItem>
        <MenuItem onClick={handleClose}>20</MenuItem>
        <MenuItem onClick={handleClose}>18</MenuItem>
      </Menu>
               </div>
           </div>
        </div>

        {/* down side */}
        <div className={`${(productView === 'four' ) ? 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 my-2 items-center justify-center  ': 'p-5 ' }`}>
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />
              <Card itemView={productView} />

              {/* pagination */}
              {/* <ul className="flex gap-3 mt-10 items-center ">
        <li className=" rounded-full p-1 hover:bg-red-500 hover:text-white">
          <Link
            href="#"
            onClick={() => {
              if (curPage < pageNumber.length) {
                paginate(curPage - 1);
              }
            }}
          >
            {" "}
            <IoIosArrowBack />
          </Link>
        </li>

        {pageNumber.map((num) => (
          <li
            key={num}
            className={`px-2 bg-white rounded-full ${
              num === curPage ? "text-white bg-red-500 " : ""
            }`}
          >
            <button onClick={() => paginate(num)} className="">
              {num}
            </button>
          </li>
        ))}

        <li className=" rounded-full p-1 hover:bg-red-500 hover:text-white">
          <Link
            href="#"
            onClick={() => {
              if (curPage < pageNumber.length) {
                paginate(curPage + 1);
              }
            }}
          >
            {" "}
            <IoIosArrowForward />
          </Link>
        </li>
      </ul> */}
        </div>
    </div>
  )
}

 
