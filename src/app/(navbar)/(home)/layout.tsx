import Navbar from '../../component/navbar/Navbar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        {children}
    </>
  )
}
