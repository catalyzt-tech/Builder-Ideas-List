import Link from "next/link"
import { MarkDownData } from "../../../(home)/component/Home"
import HomeIcon from "@/public/icon/Home"
export default function BreadCrump({
  content
}:{
  content: MarkDownData
})  {

return (

    <> 
    {/* <div className="hidden lg:block px-[4rem] lg:px-[8rem] pt-[1.5rem] items-center">
        <div className="flex items-center">
          <div className="pl-1 flex items-center">
            <HomeIcon/>
            <Link href={"/"} className="text-sm font-medium text-gray-700 pl-1">Home</Link>
          </div>
          <p className="pl-2.5 text-sm font-medium text-gray-600">/</p>

          <a href="#" className="pl-2.5 text-gray-500 text-sm font-medium">
            {content.title}
          </a>
        </div>
        <hr className="my-4 border-t border-gray-300" />
      </div> */}

      <div className="hidden lg:flex flex-wrap items-center gap-4 border-b border-gray-300 pb-4 font-inter ">
          <div className="flex gap-2 items-center">
            <HomeIcon/>
            <h6 className="text-sm font-medium text-gray-700">Home</h6>
          </div>
        
          <div className="text-sm font-medium text-gray-600">/</div>
          
          <h6 className="text-sm font-medium text-gray-700">RetroPGF</h6>

          <div className="text-sm font-medium text-gray-600">/</div>

          <h6 className="text-sm font-medium text-gray-500">Open Project Idea</h6>

        </div>
    </>

    )

}
