import { Suspense } from "react"
import Navbar from "../component/navbar/Navbar"
import Loading from "./loading"
import Footer from "../component/footer/Footer"


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      {children}
      <Footer />
    </Suspense>
  )
}
