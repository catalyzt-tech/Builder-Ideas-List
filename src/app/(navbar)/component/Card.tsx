import EffortIcon from "@/public/icon/EffortIcon";
import ImpactIcon from "@/public/icon/ImpactIcon";

export default function Card({

}:{
    
})  {
    //📝    
    let arr = [1,2,3,4,5,6,7,8];

return (

    <> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div className="flex flex-col gap-4 border rounded-md p-3">
            <div className="">
                <h5 className="text-sm font-semibold text-slate-900">Withdrawal Visualizer</h5>
                <p className="text-xs text-slate-500 font-normal line-clamp-3">A UI to monitor OP Mainnet withdrawais for network safety</p>
            </div>
            <div className="flex flex-wrap gap-2">
                <div className="py-1 px-1.5 rounded-[0.25rem] bg-amber-100">
                    <h6 className="text-xs font-normal text-amber-950">📝 Draft Project Idea</h6>
                </div>                
                <div className="py-1 px-1.5 rounded-[0.25rem] bg-slate-100">
                    <h6 className="text-xs font-normal text-slate-900">Contracts</h6>
                </div>                
                <div className="py-1 px-1.5 rounded-[0.25rem] bg-slate-100">
                    <h6 className="text-xs font-normal text-slate-900">Consumer Apps</h6>
                </div>                
            </div>
            <div className="flex gap-2 items-center">
                <ImpactIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-slate-900">Large</h6>
                    <h6 className="text-xs font-medium text-slate-500">Impact</h6>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <EffortIcon/>
                <div className="flex gap-1 items-center">
                    <h6 className="text-xs font-medium text-slate-900">Medium</h6>
                    <h6 className="text-xs font-medium text-slate-500">Effort</h6>
                </div>
            </div>
        </div>
       
    </div>
    </>

    )

}
