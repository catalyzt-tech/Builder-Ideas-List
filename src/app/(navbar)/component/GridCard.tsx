import EffortIcon from "@/public/icon/EffortIcon";
import ImpactIcon from "@/public/icon/ImpactIcon";
import { MarkDownData } from "./Home";

export default function GridCard({
    data
}:{
    data:Omit<MarkDownData, "contentHtml">
})  {
    //📝     // "category": "S5: Intent 2 - Grow the Superchain",

    return (

        
        <div className="flex flex-col gap-4 border rounded-md p-3">
        <div>
            <h5 className="text-sm font-semibold text-gray-900 mb-0.5 line-clamp-1">{data.title}</h5>
            <p className="text-xs text-slate-500 font-normal line-clamp-2">{data.description}</p>
        </div>
    
        <div className="flex flex-col gap-2 w-full">
            <div className="inline-flex px-2 py-1 rounded-full bg-secondaryRed grow-0 text-primaryRed cursor-pointer w-fit"> 
                <h6 className="text-xs font-normal line-clamp-2 break-all">{data.category}</h6>
            </div>                
            <div className="inline-flex px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200/75 cursor-pointer w-fit">
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
    </div>
    
    
       

    )

}
