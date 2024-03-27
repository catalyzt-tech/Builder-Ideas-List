import './globals.css'
import { Inter, Rubik } from 'next/font/google'
import { RouteChangeListener } from './component/routeListener';
import Head from 'next/head';

const interFont = Inter({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
});


<<<<<<< HEAD
export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Buider Ideas',
=======
  title: 'Builder Ideas List',
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
  description: 'Explore ideas for your next project.',
}
=======
// export const metadata: Metadata = {
//   title: 'Buider Ideas',
//   description: 'Explore ideas for your next project.',
// }
>>>>>>> ori/main

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <body className={`${interFont.variable} ${rubikFont.variable} `}>
        <RouteChangeListener/>
        <div className="font-inter  ">
          {children}
        </div>
      </body>
    </html>
  )
}
