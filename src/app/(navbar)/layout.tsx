import Navbar from '../component/navbar/Navbar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
         <div className="pl-2 pr-8 lg:px-10 py-4 bg-white">
          <Navbar/>
        </div>
        <div className="font-inter ">
          {children}
        </div>
    </div>
  )
}
