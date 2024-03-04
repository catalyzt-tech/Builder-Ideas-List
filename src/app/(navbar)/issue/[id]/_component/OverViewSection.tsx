"use client"
import { MarkDownData } from "../../../(home)/component/Home"

export default function OverViewSection({
    content,
    overViewRef
}:{
    content: MarkDownData
    overViewRef: React.MutableRefObject<HTMLElement | null>;
})  {

return (

    <section
        ref={overViewRef}
        id="Overview"
        className=" bg-white p-6 lg:rounded-md lg:shadow-md items-center w-auto  lg:mb-6"
    > 
        <h6 className="text-3xl font-bold my-4 ">
            {content.title}
        </h6>
        <hr className="hidden lg:block my-6  border-t border-gray-300" />
        <p className=" text-gray-500 text-base font-normal">
            {content.description}    
        </p>

        <div className="flex flex-col  my-4 flex-wrap gap-2">

            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Category:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.category}</h6>
                {/* <div className="inline-flex rounded-full  px-2 py-1  bg-secondaryRed hover:bg-red-100/80 hover:shadow-sm cursor-pointer">
                    <h6 className="text-sm font-normal text-primaryRed">{content.category}</h6>
                </div>        */}
            </div>
            
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Type:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.type}</h6>
                {/* <div className="inline-flex rounded-full  px-2 py-1  bg-slate-50 hover:bg-slate-100/90 hover:shadow-sm cursor-pointer">
                    <h6 className="text-sm font-normal text-gray-600">{content.type}</h6>
                </div>        */}
            </div>
           
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Effort:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.effort}</h6>
            </div>
           
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Skillset:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.skillset}</h6>
            </div>
            
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Labels:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.labels}</h6>
            </div>

        </div>
    </section>

    )

}
