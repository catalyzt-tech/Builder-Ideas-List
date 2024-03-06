import EffortIcon from "@/public/icon/EffortIcon";
import { MarkDownData } from "./Home";
import Link from "next/link";
import { categoryKeyAndValue } from "../Text";

export default function GridCard({
    data
}:{
    data:Omit<MarkDownData, "contentHtml">
})  {
    //📝     // "category": "S5: Intent 2 - Grow the Superchain",

    return (

        
        <div className="flex flex-col gap-4 border rounded-md p-3 h-full" >
        <div>
            <Link 
            className="text-sm font-semibold text-gray-900 mb-0.5 line-clamp-1 hover:underline"
            href={`/issue/${data.id}`}
            >
                {data.title}
            </Link>
            <p className="text-xs text-slate-500 font-normal line-clamp-2">{data.description}</p>
        </div>
    
        <div className="flex flex-col gap-2 w-full">
            <div className="inline-flex px-2 py-1 rounded-full bg-secondaryRed hover:bg-red-100/80 hover:shadow-sm grow-0 text-primaryRed cursor-pointer w-fit"> 
                <p className="text-xs font-normal line-clamp-1 break-all">
                    {categoryKeyAndValue[data.category] ? categoryKeyAndValue[data.category] : data.category.replace("-", "")} 
                </p>
            </div>                
            <div className="inline-flex px-2 py-1 rounded-full bg-slate-50 hover:bg-slate-100/90 hover:shadow-sm cursor-pointer w-fit">
                <h6 className="text-xs font-normal text-gray-600 line-clamp-2 break-all">{data.type}</h6>
            </div>                
        </div>


        <div className="flex-grow"></div> 
    
        <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <EffortIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-gray-900 line-clamp-1">{data.effort}</h6>
                    <h6 className="text-xs font-medium text-gray-500">Effort</h6>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <EffortIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-gray-900 line-clamp-1">{data.contribution["execution-status"]}</h6>
                    <h6 className="text-xs font-medium text-gray-500">Execution Status</h6>
                </div>
            </div>
        </div>
    </div>
    
    
       

    )

}
