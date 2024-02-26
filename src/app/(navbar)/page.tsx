
import BreadCrump from '@/src/app/(navbar)/component/BreadCrump';
import HeroSection from '@/src/app/(navbar)/component/HeroSection';
import TabPage from '@/src/app/(navbar)/component/Tab';
import Navbar from '@/src/app/(navbar)/component/Navbar';
import Image from 'next/image';
import Cpage from './component/Cpage';
import Card from './component/Card';


const Home: React.FC = () => {
  return (
    <div className="">
      <div className="px-[4rem] lg:px-[8rem] py-[2.5rem] bg-gradient-to-b from-[#E2E8F0] to-white">
        <BreadCrump />
        <div className="pt-14">
          <HeroSection />
        </div>
      </div>
      <div className="px-[4rem] lg:px-[8rem] py-[2.5rem]">
        <div className="flex flex-col gap-1">
          <h6 className="text-slate-500 text-lg font-rubik">Explore</h6>
          <h4 className="text-slate-900 text-2xl font-semibold font-rubik">Open Project Idea</h4>
        </div>
        <TabPage />
        <div className="mt-[2.5rem]">
          <Cpage
          />
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Home;

