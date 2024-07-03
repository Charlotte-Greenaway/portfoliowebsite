import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/_components/navbar';
import TopButton from '@/_components/TopButton';


export const metadata: Metadata = {
  title: 'Charlotte Greenaway',
  description: 'Junior software developer in Devon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">

      <body><NavBar/>{children}<TopButton/></body>

    </html>
  )
}
