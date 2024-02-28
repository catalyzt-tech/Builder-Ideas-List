import Navbar from '../../component/navbar/Navbar'
import { HomeProvider } from './Context'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
         <div className="px-10 py-4 bg-white">
          <Navbar/>
        </div>
          <HomeProvider>
            {children}
          </HomeProvider>
    </div>
  )
}
