import LinkIcon from "@/public/icon/LinkIcon";
import { MarkDownData } from "./Home";
import Link from "next/link";

export default function ListCard({
    currentItems
}:{
    currentItems:Omit<MarkDownData, "contentHtml">[]
})  {

return (

    <> 
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right table-fixed ">
                <thead className="text-gray-700 text-base font-semibold ">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-[40%] 2xl:w-5/12">
                            Project
                        </th>
                        <th scope="col" className="px-6 py-3 w-[40%] 2xl:w-5/12">
                            Color
                        </th>
                        <th scope="col" className="py-3 w-[20%] 2xl:w-2/12">
                            Estimate Effort
                        </th>
                    
                    </tr>
                </thead>
                <tbody>
                  {currentItems.length!== 0 && currentItems.map((item, i) => (
                      <tr className="border " key={i}>
                      <th scope="row" className="py-4 px-3 flex flex-col">
                              <Link href={`/issue/${item.id}`} 
                              className="flex gap-1 items-center cursor-pointer hover:underline">
                                  <h6 className="text-sm font-bold text-gray-900">{item.title}</h6>
                                  <LinkIcon/>
                              </Link>
                              <p className="text-sm font-normal text-gray-500 line-clamp-2">
                                  {item.description}
                            </p>

                      </th>
                      
                      <td className="px-6 py-4 ">
                          <div className="flex flex-wrap gap-2">
                              <div className="px-2 py-1 rounded-full bg-secondaryRed grow-0 text-primaryRed cursor-pointer w-fit"> 
                                  <p className="text-xs font-normal line-clamp-2 break-all">{item.category}</p>
                              </div>          
                              <div className="inline-flex px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200/75 cursor-pointer w-fit">
                                  <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">{item.type}</h6>
                              </div>    
                              {item.labels.split(",").map((subItem, i) => (
                              <div
                              key={i} 
                              className="inline-flex px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200/75 cursor-pointer w-fit">
                                  <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">{subItem}</h6>
                              </div>      
                              ))}  
                          </div>
                      </td>
                      <td className="px-6 py-4">
                          <h6 className="text-sm font-normal text-gray-500">{item.effort}</h6>
                      </td>
                  
                  </tr>
                  ))}
                
                </tbody>
            </table>
        </div>

    </>

    )

}
