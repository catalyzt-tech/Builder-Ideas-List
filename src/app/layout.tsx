import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Builder Ideas List',
  description: 'Explore ideas for your next project.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <div className="px-10 py-4 bg-white">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
