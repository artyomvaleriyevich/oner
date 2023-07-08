import './globals.css'
import {  Commissioner } from 'next/font/google'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";




const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata = {
  title: 'Oner Магазин автозапчастей',
  description: 'Автозапчасти',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={commissioner.className }>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
