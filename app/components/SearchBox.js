import { FaSearch } from "react-icons/fa";


export default function SearchBox(){
    return(
        <div className="flex items-center h-[40px] w-[60%] bg-slate-200 rounded-md border border-slate-400">
<input type="text" placeholder="Search for products" className="text-[14px] font-semibold
w-full h-[45px] px-6 bg-transparent outline-none  " />
<div className="px-6">
<button className="p-3 rounded-full active:bg-slate-500 active:text-white">
<FaSearch />
</button>
</div>
</div>
    )
}