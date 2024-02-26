import HomeIcon from "@/public/icon/Home"

export default function BreadCrump({

}:{
    
})  {

return (

        <div className="flex flex-wrap items-center gap-2 border-b pb-4 font-rubik">
          <div className="flex gap-1.5 items-center">
            <HomeIcon/>
            <h6 className="text-base font-extralight">Home</h6>
          </div>
        
          <div className="text-base font-extralight text-slate-400">/</div>
          
          <h6 className="text-base font-extralight">Explore</h6>

          <div className="text-base font-extralight text-slate-400">/</div>

          <h6 className="text-base font-extralight">Open Project Idea</h6>
        
        </div>

    )

}
