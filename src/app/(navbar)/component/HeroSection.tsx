import SearchIcon from "@/public/icon/SearchIcon";
import InputRef from "../../component/Input";
import HeroIcon from "@/public/img/home_banner.png"
import Image from "next/image";
export default function HeroSection({

}:{
    
})  {

return (

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40"> 
        {/* lg:max-w-[30rem] xl:max-w-[36rem] */}
        <div className="flex flex-col ">

            <h6 className="text-slate-900 text-4xl font-semibold font-rubik ">Open Project Idea</h6>
            <p className="text-slate-600 text-sm font-light mt-4">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            
            <div className="mt-8">
                <InputRef
                Icon={<SearchIcon/>}
                placeholder="Search project"
                />
            </div>
        </div>
        <div className="flex justify-center">
            <Image
            src={HeroIcon}
            alt="retro hero icon"
            width={348}
            height={336}
            />

        </div>
    </div>

    )

}
