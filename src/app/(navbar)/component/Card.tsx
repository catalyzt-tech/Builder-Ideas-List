import EffortIcon from "@/public/icon/EffortIcon";
import ImpactIcon from "@/public/icon/ImpactIcon";
import { MarkDownData } from "./Home";

export default function Card({
    data
}:{
    data:Omit<MarkDownData, "contentHtml">
})  {
    //📝    

    return (

        
        <div className="flex flex-col gap-4 border rounded-md p-3">
            
            <div className="">
                <h5 className="text-sm font-semibold text-slate-900">{data.title}</h5>
                <p className="text-xs text-slate-500 font-normal line-clamp-3">{data.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
                <div className="py-1 px-1.5 rounded-[0.25rem] bg-amber-100 hover:bg-amber-200/75 cursor-pointer">
                    <h6 className="text-xs font-normal text-amber-950">📝 {data.category}</h6>
                </div>                
                <div className="py-1 px-1.5 rounded-[0.25rem] bg-slate-100 hover:bg-slate-200/75 cursor-pointer">
                    <h6 className="text-xs font-normal text-slate-900">{data.type}</h6>
                </div>                
                {/* <div className="py-1 px-1.5 rounded-[0.25rem] bg-slate-100">
                    <h6 className="text-xs font-normal text-slate-900"></h6>
                </div>  */}
            </div>

            {/* <div className="flex gap-2 items-center">
                <ImpactIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-slate-900">{data.labels}</h6>
                    <h6 className="text-xs font-medium text-slate-500">Impact</h6>
                </div>
            </div> */}
            <div className="flex gap-2 items-center">
                <EffortIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-slate-900">{data.effort}</h6>
                    <h6 className="text-xs font-medium text-slate-500">Effort</h6>
                </div>
            </div>
        </div>
       

    )

}
