import Navbar from "../component/navbar/Navbar"


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
  <div className="sticky top-0">
    <Navbar/>
  </div>
    {children}
    </>
  )
}
