import Image from 'next/image'
import Navbar from '@/src/app/component/Navbar'

const home = () => {
  return (
    <>
      <div className="px-10 py-4 bg-white">
        <Navbar />
      </div>
      <div className="px-10 py-4 bg-gradient-to-b from-slate-200 to-white">
        <section className="mt-10 mx-64 ">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-semibold text-4xl">Builder Ideas</h1>
              <p className="mt-4 text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="flex flex-row justify-center">
              <Image
                src="/img/home_banner.png"
                alt="Home"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default home
