import Image from 'next/image'
import BtnHeroSection from './BtnHeroSection'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 ">
      {/* lg:max-w-[30rem] xl:max-w-[36rem] */}
      <div className="flex flex-col animate-slideleft duration-200">
        <h6 className="text-slate-900 text-4xl font-semibold font-rubik ">
          Welcome to Builder Ideas
        </h6>
        <p className="text-slate-600 text-sm font-normal my-6">
          Join the Optimism Collective: Shape the Future, Discover
          Opportunities, Get Involved, and Make an Impact Today.
        </p>
        <div className="">
          <BtnHeroSection />
        </div>
      </div>
      <div className="flex justify-center animate-slideright duration-1000">
        <Image
          src="img/sunny.svg"
          alt="retro hero icon"
          width={250}
          height={250}
          className="animate-none"
        />
      </div>
    </div>
  )
}
