import Image from 'next/image'
import Navbar from '@/src/app/component/Navbar'
import BreadCrump from './component/BreadCrump'
import HeroSection from './component/HeroSection'
import TabPage from './component/Tab'
const home = () => {
  return (
   <div className="">
      <div className="px-[4rem] lg:px-[8rem] py-[2.5rem] bg-gradient-to-b from-[#E2E8F0] to-white">
        
        <BreadCrump/>

        <div className="pt-14">
          <HeroSection/>
        </div>


      </div>

      <div className="px-[4rem] lg:px-[8rem] py-[2.5rem]">
        <div className="flex flex-col gap-1"></div>
          <h6 className="text-slate-500 text-lg">
            Explore
          </h6>
          <h4 className="text-slate-900 text-2xl font-semibold">
            Open Project Idea
          </h4>
        <TabPage/>
      </div>


     
   </div>
  )
}
export default home
