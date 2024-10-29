import { useState } from "react";




export default function CustomerReview() {
const [openPage, setOpenPage] = useState('description')
  return (
    <div className="w-full flex justify-center   ">
      <div className="w-[90%] my-4 border bg-white rounded shadow">
        <div className="w-full p-[40px] ">
            <div className="flex w-full gap-4 ">
                <button onClick={()=> setOpenPage('description')}  className={`py-1 px-3  rounded-full text-[14px] border  border-slate-300 font-semibold text-black/[0.8] ${(openPage === 'description') ? 'bg-slate-200' : '' } `}  >Description </button>
                <button onClick={()=> setOpenPage('additional')}  className={`py-1 px-3  rounded-full text-[14px] border  border-slate-300 font-semibold text-black/[0.8] ${(openPage === 'additional') ? 'bg-slate-200' : '' } `}  >Additional info </button>
          
                <button onClick={()=> setOpenPage('review')}  className={`py-1 px-3  rounded-full text-[14px] border  border-slate-300 font-semibold text-black/[0.8] ${(openPage === 'review') ? 'bg-slate-200' : '' } `}  >Reviews </button>
            </div>
            <div>
                {
                   (openPage === 'description') ?
                    <div className="w-full mt-4 ">
                      <p className="text-[13px] font-semibold text-black/[0.8]  " >
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                      </p>
                     </div>
                      : (openPage === 'additional') ?
                       <div className="w-full mt-4">
                        <table className="  border border-black/[0.6]  w-[80%]" >
                          <tbody className="text-[14px] font-mono text-black/[0.7] capitalize ">
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >stand up</th>
                              
                              <td>
                                <p className="p-2">35"L x 24"W x 37-48"H(front to back wheel)</p>
                              </td>
                            </tr>
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >folded(w/o wheels</th>
                              
                              <td>
                                <p className="p-2">35"L x 24"W </p>
                              </td>
                            </tr>
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >folded(w wheels</th>
                              
                              <td>
                                <p className="p-2"> 24"W x 37-48"H</p>
                              </td>
                            </tr>
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >door pass through</th>
                              
                              <td>
                                <p className="p-2">24</p>
                              </td>
                            </tr>
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >frame</th>
                              
                              <td>
                                <p className="p-2">aluminium</p>
                              </td>
                            </tr>
                            <tr className="border-b border-black/[0.6]  " >
                              <th className="w-[50%] border-r border-black/[0.6]  " >weight</th>
                              
                              <td>
                                <p className="p-2">20kg</p>
                              </td>
                            </tr>
                          
                          </tbody>
                        </table>
                       </div>  
                        : (openPage === 'review') ?
                         <div>see</div> 
                         : ''
                }
               
            </div>
        </div>
      </div>
    </div>
  );
}
