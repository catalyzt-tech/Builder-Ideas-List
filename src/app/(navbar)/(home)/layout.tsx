import Navbar from '../../component/navbar/Navbar'
import { HomeProvider } from './Context'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
          <HomeProvider>
            {children}
          </HomeProvider>
    </div>
  )
}
